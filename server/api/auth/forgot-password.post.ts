import { authApiFetch } from "../../utils/lmsApi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = String(body?.email || "")
    .trim()
    .toLowerCase();

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  await authApiFetch("/users/request-client-user-password-reset", {
    method: "POST",
    body: { email },
  });

  return { email };
});
