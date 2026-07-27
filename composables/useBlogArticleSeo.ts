type BlogFaqItem = {
  question: string;
  answer: string;
};

type BlogArticleSeoOptions = {
  slug: string;
  headline: string;
  title: string;
  description: string;
  keywords: string[];
  published: string;
  modified?: string;
  section: string;
  tags?: string[];
  about: string[];
  faqItems: BlogFaqItem[];
  breadcrumbLabel?: string;
};

/**
 * Shared SEO + structured data for blog articles.
 * Optimizes for classic search (BlogPosting, FAQ, breadcrumbs)
 * and generative engines (direct answers, FAQ schema, topical about entities).
 */
export function useBlogArticleSeo(options: BlogArticleSeoOptions) {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  const articleUrl = `${siteUrl}/blog/${options.slug}`;
  const shareImage = `${siteUrl}/4es-logo.png`;
  const published = options.published;
  const modified = options.modified || options.published;
  const keywords = options.keywords.join(", ");
  const breadcrumbLabel = options.breadcrumbLabel || options.headline;

  useSeoMeta({
    title: options.title,
    description: options.description,
    keywords,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ogTitle: `${options.title} | 4ES Hub`,
    ogDescription: options.description,
    ogUrl: articleUrl,
    ogType: "article",
    ogImage: shareImage,
    ogSiteName: "4ES Hub",
    articlePublishedTime: published,
    articleModifiedTime: modified,
    articleSection: options.section,
    articleTag: options.tags ? options.tags.map((tag) => tag) : [options.section],
    twitterCard: "summary_large_image",
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: shareImage,
  });

  useHead({
    link: [{ rel: "canonical", href: articleUrl }],
    meta: [
      { name: "author", content: "4ES Hub" },
      { name: "publisher", content: "4ES Hub" },
      ...(options.tags || []).map((tag) => ({
        property: "article:tag",
        content: tag,
      })),
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": articleUrl,
          headline: options.headline,
          name: options.headline,
          description: options.description,
          url: articleUrl,
          image: [shareImage],
          datePublished: published,
          dateModified: modified,
          inLanguage: "en-US",
          keywords: options.keywords,
          articleSection: options.section,
          author: {
            "@type": "Organization",
            name: "4ES Hub",
            url: siteUrl,
          },
          publisher: {
            "@type": "Organization",
            name: "4ES Hub",
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: shareImage,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
          },
          isPartOf: {
            "@type": "Blog",
            name: "4ES Hub Blog",
            url: `${siteUrl}/blog`,
          },
          about: options.about.map((name) => ({
            "@type": "Thing",
            name,
          })),
          mentions: [
            {
              "@type": "Organization",
              name: "4ES Hub",
              url: siteUrl,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${articleUrl}#faq`,
          mainEntity: options.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${siteUrl}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: breadcrumbLabel,
              item: articleUrl,
            },
          ],
        }),
      },
    ],
  });

  return {
    siteUrl,
    articleUrl,
    shareImage,
    faqItems: options.faqItems,
    published,
    modified,
  };
}
