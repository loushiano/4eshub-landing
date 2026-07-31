import { lmsFetch } from "../../utils/lmsApi";
import type { CatalogCourse } from "../../../utils/catalogCourse";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Course slug is required",
    });
  }

  return lmsFetch<CatalogCourse>(
    `/lms/catalog/courses/${encodeURIComponent(slug)}`,
  );
});
