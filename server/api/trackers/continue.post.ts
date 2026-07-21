import { backendFetch } from "../../utils/backendApi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return backendFetch("/clients/trackers/continue", {
    method: "POST",
    body,
  });
});
