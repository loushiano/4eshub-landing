import { blogPosts } from "../../utils/blogPosts";

const PRODUCT_PAGES = [
  {
    path: "/",
    title: "4ES Hub",
    summary:
      "AI-native QMS software to implement ISO 9001, 14001, and 45001 and stay audit-ready from $399/month.",
  },
  {
    path: "/iso-9001",
    title: "ISO 9001 certification",
    summary: "Cost, timeline, and next steps for ISO 9001 with a readiness check.",
  },
  {
    path: "/iso-14001",
    title: "ISO 14001 certification",
    summary: "EMS certification path, cost drivers, and readiness check.",
  },
  {
    path: "/iso-45001",
    title: "ISO 45001 certification",
    summary: "OH&S certification path, cost drivers, and readiness check.",
  },
  {
    path: "/iso-9001-explained",
    title: "ISO 9001 explained",
    summary: "Plain-language guide to the QMS standard and how 4ES Hub runs it.",
  },
  {
    path: "/iso-45001-explained",
    title: "ISO 45001 explained",
    summary: "Plain-language guide to occupational health and safety management.",
  },
  {
    path: "/training-tracking",
    title: "Competency-based training tracking",
    summary:
      "Track employee training by competency and competency level for ISO 7.2.",
  },
  {
    path: "/partners",
    title: "Certification partners",
    summary: "Connect with accredited certification bodies and consultants.",
  },
];

const PROBLEM_GUIDES = [
  {
    slug: "why-iso-9001-implementation-is-hard",
    summary:
      "Why ISO 9001 implementation is hard, and how 4ES Hub makes it easier.",
  },
  {
    slug: "ai-iso-implementation-and-audit",
    summary:
      "ISO-trained AI to implement requirements and check audit readiness.",
  },
  {
    slug: "iso-document-control-software",
    summary: "Clause 7.5 document control without shared-drive version chaos.",
  },
  {
    slug: "competency-based-training-iso",
    summary: "Training tracking based on competence and competency levels.",
  },
  {
    slug: "ai-risk-management-iso",
    summary: "AI-assisted ISO risk register for Clause 6.1.",
  },
  {
    slug: "iso-internal-audit-ai",
    summary: "Internal audit software that samples a live QMS.",
  },
  {
    slug: "ai-native-qms-software",
    summary:
      "One AI-native app for implementation, documents, training, risk, and audit.",
  },
];

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = config.public.siteUrl.replace(/\/$/, "");

  const productBlock = PRODUCT_PAGES.map(
    (page) => `- [${page.title}](${siteUrl}${page.path}): ${page.summary}`,
  ).join("\n");

  const problemBlock = PROBLEM_GUIDES.map((guide) => {
    const post = blogPosts.find((entry) => entry.slug === guide.slug);
    const title = post?.title || guide.slug;
    return `- [${title}](${siteUrl}/blog/${guide.slug}): ${guide.summary}`;
  }).join("\n");

  const blogBlock = blogPosts
    .map(
      (post) =>
        `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`,
    )
    .join("\n");

  setHeader(event, "content-type", "text/plain; charset=utf-8");

  return `# 4ES Hub

> AI-native quality management software for ISO 9001, ISO 14001, and ISO 45001. 4ES Hub makes ISO implementation easier with ISO-trained AI, then keeps document control, competency-based training, risk management, and internal audits in one app from $399/month.

4ES Hub does not issue ISO certificates. Accredited certification bodies do. 4ES Hub is the system you implement and operate in.

## Problems we solve

- ISO 9001 implementation is hard when it is a writing project. We make it a live QMS.
- Special-knowledge AI helps you implement and audit ISO requirements inside the product, not a generic chatbot.
- Document control (ISO 9001 Clause 7.5): current approved version, retrieval, training links.
- Training tracking based on competency and competency level (Clause 7.2), not attendance sheets.
- Risk management with AI: a live Clause 6.1 register linked to processes and actions.
- Overall: one AI-native app for all of the above.

## Product

${productBlock}

## Core guides (start here)

${problemBlock}

## All articles

${blogBlock}

## Optional

- Full text index: ${siteUrl}/llms-full.txt
- Sitemap: ${siteUrl}/sitemap.xml
`;
});
