import { lmsFetch } from "../../utils/lmsApi";
import type { CatalogCourseList } from "../../../utils/catalogCourse";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const search = query.search ? String(query.search) : undefined;
  const page = query.page ? String(query.page) : "1";
  const perPage = query.perPage ? String(query.perPage) : "50";

  return lmsFetch<CatalogCourseList>("/lms/catalog/courses", {
    query: { search, page, perPage },
  });
});
