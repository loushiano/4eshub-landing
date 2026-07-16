<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50"
    >
      <div
        class="container mx-auto flex items-center justify-between px-6 py-4"
      >
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/logo-color.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            :to="overviewPath"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO {{ content.slug }}
          </NuxtLink>
          <a
            href="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>

    <main>
      <section class="py-12 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-xl mx-auto">
            <p class="text-sm font-medium text-primary-600 mb-3">
              {{ content.shortLabel }} · {{ content.systemName }}
            </p>
            <h1
              class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-8"
            >
              {{ content.h1 }}
            </h1>

            <div
              class="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8"
            >
              <IsoChecklistWizard
                :standard="content.slug"
                :source="`readiness-${content.slug}`"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  getChecklistContent,
  type ChecklistStandardSlug,
} from "~/utils/checklistContent";

const props = defineProps<{
  standard: ChecklistStandardSlug;
}>();

const content = getChecklistContent(props.standard);
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}${content.path}`;
const overviewPath = `/iso-${content.slug}`;

useSeoMeta({
  title: content.metaTitle,
  description: content.metaDescription,
  ogTitle: content.title,
  ogDescription: content.metaDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
  twitterTitle: content.metaTitle,
  twitterDescription: content.metaDescription,
  twitterImage: `${siteUrl}/4es-logo.png`,
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: content.title,
        description: content.metaDescription,
        url: pageUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "4ES Hub",
          url: `${siteUrl}/`,
        },
      }),
    },
  ],
});
</script>
