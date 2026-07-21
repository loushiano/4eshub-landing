import { backendFetch } from "../../utils/backendApi";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const name = String(query.name || "");

  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Standard name is required",
    });
  }

  return backendFetch(`/standards/api`, {
    query: { name },
  });
});
