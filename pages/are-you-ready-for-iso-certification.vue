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
            to="/iso-9001"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 9001
          </NuxtLink>
          <NuxtLink
            to="/iso-14001"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 14001
          </NuxtLink>
          <NuxtLink
            to="/iso-45001"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 45001
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
      <section class="py-16 md:py-24">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-12">
            <h1
              class="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              {{ hub.h1 }}
            </h1>
            <p
              class="text-lg md:text-xl text-[#6e6e73] tracking-snug leading-relaxed"
            >
              {{ hub.intro }}
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <NuxtLink
              v-for="item in pages"
              :key="item.slug"
              :to="item.path"
              class="group block rounded-2xl border border-gray-200 bg-white p-8 hover:border-primary-300 hover:shadow-lg transition-all text-left"
            >
              <p class="text-sm font-medium text-primary-600 mb-3">
                {{ item.shortLabel }}
              </p>
              <h2
                class="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-primary-700"
              >
                {{ item.h1 }}
              </h2>
              <p class="text-[#6e6e73] leading-relaxed mb-4">
                {{ item.systemName }}
              </p>
              <span class="text-primary-600 font-medium text-sm">
                Continue
                <i class="fa-solid fa-arrow-right ml-1"></i>
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { CHECKLIST_HUB, CHECKLIST_PAGES } from "~/utils/checklistContent";

const hub = CHECKLIST_HUB;
const pages = Object.values(CHECKLIST_PAGES);
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}${hub.path}`;

useSeoMeta({
  title: hub.metaTitle,
  description: hub.metaDescription,
  ogTitle: hub.h1,
  ogDescription: hub.metaDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
  twitterTitle: hub.metaTitle,
  twitterDescription: hub.metaDescription,
  twitterImage: `${siteUrl}/4es-logo.png`,
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
});
</script>
