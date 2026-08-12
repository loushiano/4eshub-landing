import {
  authApiFetch,
  buildLmsHandoffUrl,
  publicAuthFetch,
} from "../../utils/lmsApi";

type LoginResponse = {
  access_token: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = String(body?.email || "")
    .trim()
    .toLowerCase();
  const code = String(body?.code || "").trim();
  const password = String(body?.password || "");
  const courseId = String(body?.courseId || "");
  const locale = String(body?.locale || "en");

  if (!email || !code) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and verification code are required",
    });
  }
  if (!password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Password is required to sign in after verification",
    });
  }
  if (!courseId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Course id is required",
    });
  }

  await authApiFetch("/users/verify-client-user", {
    method: "POST",
    body: { email, code },
  });

  const login = await publicAuthFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: {
      username: email,
      password,
      locale,
    },
  });

  if (!login?.access_token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Verified but login failed",
    });
  }

  return {
    access_token: login.access_token,
    handoffUrl: buildLmsHandoffUrl(login.access_token, courseId),
  };
});
