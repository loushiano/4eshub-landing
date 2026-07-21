type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

let tokenCache: TokenCache | null = null;

function getBackendConfig() {
  const config = useRuntimeConfig();
  const baseUrl = (config.apiBaseUrl || process.env.API_BASE_URL || "").replace(
    /\/$/,
    "",
  );
  const clientId = config.apiClientId || process.env.API_CLIENT_ID || "";
  const clientSecret =
    config.apiClientSecret || process.env.API_CLIENT_SECRET || "";

  if (!baseUrl || !clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "Backend API credentials are not configured (API_BASE_URL, API_CLIENT_ID, API_CLIENT_SECRET)",
    });
  }

  return { baseUrl, clientId, clientSecret };
}

async function getApiAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken;
  }

  const { baseUrl, clientId, clientSecret } = getBackendConfig();
  const response = await $fetch<{
    access_token: string;
    expires_in?: number;
  }>(`${baseUrl}/auth/token`, {
    method: "POST",
    body: {
      client_id: clientId,
      client_secret: clientSecret,
    },
  });

  tokenCache = {
    accessToken: response.access_token,
    expiresAt: Date.now() + (response.expires_in || 1800) * 1000,
  };

  return tokenCache.accessToken;
}

export async function backendFetch<T>(
  path: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    query?: Record<string, string | undefined>;
    formData?: FormData;
  } = {},
): Promise<T> {
  const { baseUrl } = getBackendConfig();
  const token = await getApiAccessToken();
  const method = options.method || "GET";

  try {
    if (options.formData) {
      return await $fetch<T>(`${baseUrl}${path}`, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: options.formData,
      }) as any;
    }

    return await $fetch<T>(`${baseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      query: options.query,
      body: options.body,
    }) as any;
  } catch (error: any) {
    const statusCode = error?.response?.status || error?.statusCode || 500;
    const data = error?.data || error?.response?._data || {
      message: error?.message || "Backend request failed",
    };
    const message =
      typeof data?.message === "string"
        ? data.message
        : data?.message?.message ||
          data?.statusMessage ||
          "Backend request failed";
    throw createError({
      statusCode,
      statusMessage: message,
      data: {
        ...data,
        message,
        code: data?.code || data?.message?.code,
      },
    });
  }
}
