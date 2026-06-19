<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <NuxtLink
          to="/#contact-section"
          class="hidden md:inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
        >
          Book a free demo
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <NuxtLink
              to="/"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              <i class="fa-solid fa-arrow-left mr-2"></i>
              Back to home
            </NuxtLink>
            <span
              class="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
            >
              Blog
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Practical compliance advice for audit-ready teams
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              Field notes on simplifying documentation, quality workflows, risk
              management, and certification readiness.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto space-y-8">
            <article
              v-for="post in sortedPosts"
              :key="post.slug"
              class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div class="p-8 md:p-10">
                <div class="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    class="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold"
                  >
                    {{ post.category }}
                  </span>
                  <span class="text-sm text-gray-500">{{ post.readTime }}</span>
                  <time class="text-sm text-gray-500" :datetime="post.published">
                    {{ formatBlogDate(post.published) }}
                  </time>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 leading-relaxed mb-6">
                  {{ post.excerpt }}
                </p>
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Read article
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  blogPosts,
  formatBlogDate,
  type BlogPost,
} from "~/utils/blogPosts";

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}/blog`;
const title = "Blog | Practical compliance advice for audit-ready teams";
const description =
  "Articles on ISO quality management, risk management, audit readiness, training, and how 4ES Hub helps teams stay compliant without the complexity.";

const sortedPosts: BlogPost[] = [...blogPosts].sort((a, b) =>
  b.published.localeCompare(a.published),
);

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
});
</script>
