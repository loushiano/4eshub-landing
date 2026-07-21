import { backendFetch } from "../../../utils/backendApi";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const form = await readMultipartFormData(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Tracker id is required",
    });
  }

  if (!form?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: "Multipart form data is required",
    });
  }

  const outbound = new FormData();
  for (const part of form) {
    if (part.name === "file" && part.data) {
      const blob = new Blob([part.data], {
        type: part.type || "application/octet-stream",
      });
      outbound.append("file", blob, part.filename || "upload.bin");
    } else if (part.name && part.data) {
      outbound.append(part.name, part.data.toString("utf8"));
    }
  }

  return backendFetch(`/clients/trackers/${id}/files`, {
    method: "POST",
    formData: outbound,
  });
});
