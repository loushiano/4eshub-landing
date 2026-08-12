import { authApiFetch } from "../../utils/lmsApi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const fname = String(body?.fname || "").trim();
  const lname = String(body?.lname || "").trim();
  const email = String(body?.email || "")
    .trim()
    .toLowerCase();
  const password = String(body?.password || "");

  if (!fname || !lname || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "First name, last name, email, and password are required",
    });
  }

  const result = await authApiFetch<{ id: string; email: string }>(
    "/users/register-client-user",
    {
      method: "POST",
      body: {
        fname,
        lname,
        email,
        password,
      },
    },
  );

  return {
    requiresVerification: true,
    email: result?.email || email,
  };
});
