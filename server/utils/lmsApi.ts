type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

let tokenCache: TokenCache | null = null;

function getLmsConfig() {
  const config = useRuntimeConfig();
  const baseUrl = (
    config.lmsApiBaseUrl ||
    process.env.LMS_API_BASE_URL ||
    ""
  ).replace(/\/$/, "");
  const authBaseUrl = (
    config.lmsAuthBaseUrl ||
    config.apiBaseUrl ||
    process.env.LMS_AUTH_BASE_URL ||
    process.env.API_BASE_URL ||
    ""
  ).replace(/\/$/, "");
  const clientId = config.lmsClientId || process.env.LMS_CLIENT_ID || "";
  const clientSecret =
    config.lmsClientSecret || process.env.LMS_CLIENT_SECRET || "";

  if (!baseUrl || !authBaseUrl || !clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "LMS API credentials are not configured (LMS_API_BASE_URL, LMS_AUTH_BASE_URL or API_BASE_URL, LMS_CLIENT_ID, LMS_CLIENT_SECRET)",
    });
  }

  return { baseUrl, authBaseUrl, clientId, clientSecret };
}

function mapFetchError(error: any, fallback: string): never {
  const statusCode = error?.response?.status || error?.statusCode || 500;
  const data = error?.data ||
    error?.response?._data || {
      message: error?.message || fallback,
    };
  const message =
    typeof data?.message === "string"
      ? data.message
      : data?.message?.message || data?.statusMessage || fallback;
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

async function getLmsAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken;
  }

  const { authBaseUrl, clientId, clientSecret } = getLmsConfig();
  try {
    const response = await $fetch<{
      access_token: string;
      expires_in?: number;
    }>(`${authBaseUrl}/auth/token`, {
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
  } catch (error: any) {
    mapFetchError(error, "Failed to obtain LMS API token");
  }
}

/** Call 4es_backend with the LMS client-credentials token. */
export async function authApiFetch<T>(
  path: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: any;
  } = {},
): Promise<T> {
  const { authBaseUrl } = getLmsConfig();
  const token = await getLmsAccessToken();
  const method = options.method || "GET";

  try {
    return (await $fetch<T>(`${authBaseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: options.body,
    })) as T;
  } catch (error: any) {
    mapFetchError(error, "Auth API request failed");
  }
}

/** Public auth endpoints (login) — no API token. */
export async function publicAuthFetch<T>(
  path: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: any;
  } = {},
): Promise<T> {
  const { authBaseUrl } = getLmsConfig();
  const method = options.method || "GET";

  try {
    return (await $fetch<T>(`${authBaseUrl}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: options.body,
    })) as T;
  } catch (error: any) {
    mapFetchError(error, "Auth request failed");
  }
}

export function buildLmsHandoffUrl(accessToken: string, courseId: string) {
  const config = useRuntimeConfig();
  const lmsUrl = String(
    config.public.lmsUrl || process.env.NUXT_PUBLIC_LMS_URL || "",
  ).replace(/\/$/, "");

  if (!lmsUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: "NUXT_PUBLIC_LMS_URL is not configured",
    });
  }

  const rawToken = accessToken.startsWith("Bearer ")
    ? accessToken.slice(7)
    : accessToken;
  const redirect = `/do/lms/catalog/${courseId}`;
  const params = new URLSearchParams({
    token: rawToken,
    redirect,
  });
  return `${lmsUrl}/handoff?${params.toString()}`;
}

export async function lmsFetch<T>(
  path: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: any;
    query?: Record<string, string | number | undefined>;
  } = {},
): Promise<T> {
  const { baseUrl } = getLmsConfig();
  const token = await getLmsAccessToken();
  const method = options.method || "GET";

  try {
    return (await $fetch<T>(`${baseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      query: options.query,
      body: options.body,
    })) as T;
  } catch (error: any) {
    mapFetchError(error, "LMS request failed");
  }
}
