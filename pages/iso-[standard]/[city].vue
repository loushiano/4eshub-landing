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
          <NuxtLink
            :to="readinessPath"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Readiness check
          </NuxtLink>
          <a
            href="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </a>
        </nav>
        <NuxtLink
          :to="readinessPath"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
        >
          Check if you are ready
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-primary-50 via-white to-white py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <NuxtLink
              :to="overviewPath"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              <i class="fa-solid fa-arrow-left mr-2"></i>
              Back to ISO {{ standard }} overview
            </NuxtLink>
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span
                class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
              >
                {{ content.badge }}
              </span>
              <span class="text-sm text-gray-500">{{ content.systemName }}</span>
              <span class="text-sm text-gray-500">{{ city.region }}, {{ city.country }}</span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              {{ h1 }}
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              {{ heroIntro }}
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink :to="readinessPath" class="btn-primary">
                Take the readiness questionnaire
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </NuxtLink>
              <button
                type="button"
                class="btn-secondary"
                @click="openInquiry('certification_body')"
              >
                Talk to a certification body
              </button>
            </div>
            <p class="mt-6 text-sm text-gray-500">
              Serving organizations in {{ city.name }}. Not sure if you are
              audit-ready? Start with the questionnaire—it takes a few minutes.
            </p>
          </div>
        </div>
      </section>

      <section class="py-14 border-b border-gray-100">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            <a href="#cost" class="quick-link">
              <span class="quick-link-label">Cost</span>
              <span class="quick-link-text">What certification usually costs</span>
            </a>
            <a href="#effort" class="quick-link">
              <span class="quick-link-label">Effort</span>
              <span class="quick-link-text">What it takes to get there</span>
            </a>
            <a href="#next-steps" class="quick-link">
              <span class="quick-link-label">Next steps</span>
              <span class="quick-link-text">Questionnaire → partner intro</span>
            </a>
          </div>
        </div>
      </section>

      <section id="cost" class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="section-title">{{ content.costHeading }}</h2>
            <p class="section-body">{{ content.costIntro }}</p>
            <div class="info-panel mb-8">
              <p class="info-panel-label">{{ content.costRangeLabel }}</p>
              <p class="info-panel-body">{{ content.costRangeBody }}</p>
            </div>
            <div class="space-y-4">
              <div
                v-for="factor in content.costFactors"
                :key="factor.title"
                class="detail-row"
              >
                <h3>{{ factor.title }}</h3>
                <p>{{ factor.description }}</p>
              </div>
            </div>
            <button
              type="button"
              class="btn-secondary mt-8"
              @click="openInquiry('quote')"
            >
              Get a cost estimate for {{ city.name }}
            </button>
          </div>
        </div>
      </section>

      <section id="effort" class="py-16 bg-gray-50 border-y border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="section-title">{{ content.effortHeading }}</h2>
            <p class="section-body">{{ content.effortIntro }}</p>
            <div class="space-y-4">
              <div
                v-for="item in content.effortItems"
                :key="item.title"
                class="detail-card"
              >
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="next-steps" class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="section-title">
              {{ content.nextStepsHeading }} in {{ city.name }}
            </h2>
            <p class="section-body">{{ content.nextStepsIntro }}</p>

            <div
              v-for="step in content.nextSteps"
              :key="step.step"
              class="step-block"
            >
              <div class="step-number">{{ step.step }}</div>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            </div>

            <div class="local-section">
              <h2>{{ content.partnerSectionHeading }} in {{ city.name }}</h2>
              <p>
                We work with vetted, accredited certification bodies and ISO
                {{ standard }} consultants serving {{ city.name }} and
                {{ city.region }}. After your readiness check, we introduce the
                right partner—consultant for implementation, or certification
                body for your audit. Browse our
                <NuxtLink
                  to="/partners"
                  class="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  partner directory
                </NuxtLink>
                for options in {{ city.name }}.
              </p>
            </div>

            <div class="cta-box">
              <h2>{{ content.ctaHeading }}</h2>
              <p>{{ content.ctaBody }}</p>
              <div class="flex flex-wrap justify-center gap-3">
                <NuxtLink :to="readinessPath" class="btn-primary">
                  Start the readiness questionnaire
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </NuxtLink>
                <button
                  type="button"
                  class="btn-secondary"
                  @click="openInquiry('consultant')"
                >
                  Talk to a consultant
                </button>
              </div>
            </div>

            <p class="platform-note">{{ content.platformNote }}</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-6 text-center text-sm">
        <p>© 2024 4ES Hub. All rights reserved.</p>
      </div>
    </footer>

    <CertificationInquiryModal
      v-model="showModal"
      :standard="standard"
      :city="city.name"
      :intent="inquiryIntent"
      :source="`iso-${standard}/${city.slug}`"
    />
  </div>
</template>

<script setup lang="ts">
import {
  getCityBySlug,
  isValidStandardSlug,
  type IsoStandardSlug,
} from "~/utils/isoCities";
import {
  buildCityH1,
  buildCityHeroIntro,
  buildCityPageDescription,
  buildCityPageTitle,
  getStandardContent,
} from "~/utils/isoStandardContent";

type InquiryIntent = "certification_body" | "consultant" | "quote";

const route = useRoute();
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const showModal = ref(false);
const inquiryIntent = ref<InquiryIntent>("certification_body");

const standardParam = route.params.standard as string;
const cityParam = route.params.city as string;

if (!isValidStandardSlug(standardParam)) {
  throw createError({ statusCode: 404, statusMessage: "Standard not found" });
}

const city = getCityBySlug(cityParam);
if (!city) {
  throw createError({ statusCode: 404, statusMessage: "City not found" });
}

const standard = standardParam as IsoStandardSlug;
const content = getStandardContent(standard);
const overviewPath = `/iso-${standard}`;
const readinessPath = `/are-you-ready-for-iso-${standard}-certification`;
const pageUrl = `${siteUrl}/iso-${standard}/${city.slug}`;
const h1 = buildCityH1(standard, city.name);
const heroIntro = buildCityHeroIntro(content, city.name, city.intro);
const pageTitle = buildCityPageTitle(standard, city.name);
const pageDescription = buildCityPageDescription(
  standard,
  city.name,
  content.systemName,
);

function openInquiry(intent: InquiryIntent) {
  inquiryIntent.value = intent;
  showModal.value = true;
}

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: h1,
  ogDescription: pageDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `ISO ${standard} certification in ${city.name}`,
        description: pageDescription,
        provider: {
          "@type": "Organization",
          name: "4ES Hub",
          url: siteUrl,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.region,
          },
        },
        serviceType: `ISO ${standard} Certification`,
      }),
    },
  ],
});
</script>

<style scoped>
.quick-link {
  display: block;
  padding: 1rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: white;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.quick-link:hover {
  border-color: #253fa2;
  background-color: #eef1fb;
}

.quick-link-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #253fa2;
  margin-bottom: 0.25rem;
}

.quick-link-text {
  display: block;
  font-size: 0.95rem;
  color: #374151;
}

.section-title {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
}

.section-body {
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.info-panel {
  padding: 1.25rem 1.5rem;
  background: #eef1fb;
  border: 1px solid #dce2f6;
  border-radius: 0.75rem;
}

.info-panel-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #253fa2;
  margin-bottom: 0.5rem;
}

.info-panel-body {
  color: #374151;
  line-height: 1.7;
  margin: 0;
}

.detail-row,
.detail-card {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
}

.detail-card {
  padding: 1.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.detail-row h3,
.detail-card h3 {
  color: #1f2937;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.detail-row p,
.detail-card p {
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

.step-block {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.step-number {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #253fa2;
  color: white;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.125rem;
}

.step-block h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-block p {
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

.local-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.local-section h2 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}

.local-section p {
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

.cta-box {
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, #eef1fb, #ffffff);
  border: 1px solid #dce2f6;
  border-radius: 1rem;
  text-align: center;
}

.cta-box h2 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
}

.cta-box p {
  color: #4b5563;
  margin: 0 0 1.5rem;
  line-height: 1.7;
}

.platform-note {
  margin-top: 2rem;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
