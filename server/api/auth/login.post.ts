import {
  buildLmsHandoffUrl,
  publicAuthFetch,
} from "../../utils/lmsApi";

type LoginResponse = {
  access_token: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = String(body?.email || body?.username || "")
    .trim()
    .toLowerCase();
  const password = String(body?.password || "");
  const courseId = String(body?.courseId || "");
  const locale = String(body?.locale || "en");

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password are required",
    });
  }
  if (!courseId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Course id is required",
    });
  }

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
      statusMessage: "Login failed",
    });
  }

  return {
    access_token: login.access_token,
    handoffUrl: buildLmsHandoffUrl(login.access_token, courseId),
  };
});
