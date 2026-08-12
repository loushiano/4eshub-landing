import type { CatalogCourse } from "~/utils/catalogCourse";

export function useCourseSeo(course: CatalogCourse) {
  const config = useRuntimeConfig();
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, "");
  const pageUrl = `${siteUrl}/courses/${course.slug}`;
  const shareImage = course.thumbnailUrl || `${siteUrl}/4es-logo.png`;
  const description =
    course.description?.trim().slice(0, 160) ||
    `Learn ${course.title} with 4ES Hub training.`;
  const durationLabel =
    course.estimatedDurationMinutes != null
      ? `${course.estimatedDurationMinutes} minutes`
      : undefined;

  useSeoMeta({
    title: course.title,
    description,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ogTitle: `${course.title} | 4ES Hub`,
    ogDescription: description,
    ogUrl: pageUrl,
    ogType: "website",
    ogImage: shareImage,
    ogSiteName: "4ES Hub",
    twitterCard: "summary_large_image",
    twitterTitle: course.title,
    twitterDescription: description,
    twitterImage: shareImage,
  });

  const courseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description,
    url: pageUrl,
    image: shareImage,
    provider: {
      "@type": "Organization",
      name: "4ES Hub",
      sameAs: siteUrl,
    },
    numberOfCredits: course.lessonCount || undefined,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      ...(durationLabel
        ? { courseWorkload: `PT${course.estimatedDurationMinutes}M` }
        : {}),
    },
  };

  useHead({
    link: [{ rel: "canonical", href: pageUrl }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(courseSchema),
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
              item: siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Courses",
              item: `${siteUrl}/courses`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: course.title,
              item: pageUrl,
            },
          ],
        }),
      },
    ],
  });
}
