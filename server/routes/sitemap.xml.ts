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
    path: "/blog",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/partners",
    priority: "0.9",
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

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = config.public.siteUrl.replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];

  const urls = routes
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
