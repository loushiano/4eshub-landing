import { getAllIsoCityPagePaths } from "../../utils/isoCities";
import { getAllSeoPagePaths } from "../../utils/isoSeoPages";
import { lmsFetch } from "../utils/lmsApi";
import type { CatalogCourseList } from "../../utils/catalogCourse";

const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/iso-9001",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/iso-9001-explained",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/training-tracking",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/iso-14001",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/iso-45001",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/iso-9001-checklist",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/iso-14001-checklist",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/iso-45001-checklist",
    priority: "0.85",
    changefreq: "monthly",
  },
  ...getAllSeoPagePaths().map((path) => ({
    path,
    priority: "0.85",
    changefreq: "monthly",
  })),
  {
    path: "/are-you-ready-for-iso-certification",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/are-you-ready-for-iso-9001-certification",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/are-you-ready-for-iso-14001-certification",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/are-you-ready-for-iso-45001-certification",
    priority: "0.9",
    changefreq: "monthly",
  },
  ...getAllIsoCityPagePaths().map((path) => ({
    path,
    priority: "0.7",
    changefreq: "monthly",
  })),
  {
    path: "/blog",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/blog/iso-9001-certification-companies",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/eqms-software-ai-compliance",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/what-is-eqms",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/why-eqms-software",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/how-to-choose-eqms-software",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/partners",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/blog/qms-implementation-challenges",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/what-is-iso-9001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/why-iso-9001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/should-i-get-iso-9001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/what-is-iso-14001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/why-iso-14001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/should-i-get-iso-14001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/what-is-iso-45001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/why-iso-45001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/should-i-get-iso-45001",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/iso-9001-14001-still-matter-age-of-ai",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/iso-9001-certification-from-zero-to-certified",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/enterprise-risk-management-software",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/single-platform-quality-management",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/customer-feedback-quality-management",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/documentation-audit-readiness",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/iso-audit-tracking-value",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/training-records-qms",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/importance-of-iso-training",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/blog/mastering-non-conformity-iso-9001",
    priority: "0.8",
    changefreq: "monthly",
  },
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = config.public.siteUrl.replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];

  const dynamicRoutes = [...routes];

  try {
    const catalog = await lmsFetch<CatalogCourseList>("/lms/catalog/courses", {
      query: { page: 1, perPage: 200 },
    });
    dynamicRoutes.push({
      path: "/courses",
      priority: "0.85",
      changefreq: "weekly",
    });
    for (const course of catalog?.data || []) {
      if (course.slug) {
        dynamicRoutes.push({
          path: `/courses/${course.slug}`,
          priority: "0.8",
          changefreq: "weekly",
        });
      }
    }
  } catch {
    dynamicRoutes.push({
      path: "/courses",
      priority: "0.85",
      changefreq: "weekly",
    });
  }

  const urls = dynamicRoutes
    .map(
      (route) => `
  <url>
    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("");

  setHeader(event, "content-type", "application/xml; charset=utf-8");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
});
