<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            :to="overviewPath"
            class="text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO {{ standard }}
          </NuxtLink>
          <a
            href="/#blog-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Blog
          </a>
          <a
            href="/#pricing-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Pricing
          </a>
          <a
            href="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </a>
        </nav>
        <NuxtLink
          to="/#contact-section"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
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
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span
                class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
              >
                {{ content.badge }}
              </span>
              <span class="text-sm text-gray-500">{{ content.systemName }}</span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              ISO {{ standard }} support in 4ES Hub
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed">
              {{ content.overviewIntro }} Here is how our platform modules map to
              each clause—so you know exactly where compliance lives in the
              software.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto prose-content">
            <p>
              ISO {{ standard }} is structured around the Plan-Do-Check-Act cycle.
              Clauses 4–8 are the foundation: they define your context, leadership
              commitment, planning, resources, and operational controls. 4ES Hub
              does not replace your {{ content.shortName }}—it gives you a connected
              system to manage evidence, workflows, and continual improvement across
              every clause.
            </p>

            <div
              v-for="clause in content.clauses"
              :key="clause.number"
              class="clause-block"
            >
              <h2>Clause {{ clause.number }} — {{ clause.title }}</h2>
              <p>{{ clause.summary }}</p>
              <h3>How 4ES Hub supports this</h3>
              <ul>
                <li v-for="item in clause.support" :key="item">
                  {{ item }}
                </li>
              </ul>
              <div class="module-tags">
                <span
                  v-for="mod in clause.modules"
                  :key="mod"
                  class="module-tag"
                >
                  {{ mod }}
                </span>
              </div>
            </div>

            <div class="cta-box">
              <h2>{{ content.ctaHeading }}</h2>
              <p>{{ content.ctaBody }}</p>
              <NuxtLink to="/#contact-section" class="btn-primary">
                Book a free demo
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50 border-t border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">
              ISO {{ standard }} by city
            </h2>
            <p class="text-gray-600 mb-8">
              Find ISO {{ standard }} support for organizations in major North
              American cities across Canada and the United States.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <NuxtLink
                v-for="city in cities"
                :key="city.slug"
                :to="`/iso-${standard}/${city.slug}`"
                class="city-link"
              >
                {{ city.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-6 text-center text-sm">
        <p>© 2024 4ES Hub. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ISO_CITIES, type IsoStandardSlug } from "~/utils/isoCities";
import { getStandardContent } from "~/utils/isoStandardContent";

const props = defineProps<{
  standard: IsoStandardSlug;
}>();

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const content = getStandardContent(props.standard);
const overviewPath = `/iso-${props.standard}`;
const pageUrl = `${siteUrl}${overviewPath}`;
const cities = ISO_CITIES;

const seoTitle = `ISO ${props.standard} Clause Support | 4ES Hub`;
const seoDescription = `See how 4ES Hub supports ISO ${props.standard} clauses 4 through 8 with connected modules for documents, training, audits, risk, and corrective actions.`;

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: `ISO ${props.standard} Support in 4ES Hub`,
  ogDescription: seoDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
});
</script>

<style scoped>
.prose-content {
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.8;
}

.prose-content h2 {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose-content p {
  margin-bottom: 1.5rem;
}

.prose-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose-content li {
  margin-bottom: 0.5rem;
}

.clause-block {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.module-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #eef1fb;
  color: #253fa2;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.cta-box {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, #eef1fb, #ffffff);
  border: 1px solid #dce2f6;
  border-radius: 1rem;
  text-align: center;
}

.cta-box h2 {
  margin-top: 0;
}

.cta-box p {
  margin-bottom: 1.5rem;
}

.city-link {
  display: block;
  padding: 0.625rem 0.75rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #253fa2;
  text-align: center;
  transition: all 0.15s ease;
}

.city-link:hover {
  border-color: #253fa2;
  background-color: #eef1fb;
}
</style>
