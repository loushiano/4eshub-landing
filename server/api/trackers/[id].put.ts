import { backendFetch } from "../../utils/backendApi";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Tracker id is required",
    });
  }

  return backendFetch(`/clients/trackers/${id}`, {
    method: "PUT",
    body,
  });
});
