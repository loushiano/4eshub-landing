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
              {{ seo.h1 }}
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              {{ seo.heroIntro }}
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink :to="readinessPath" class="btn-primary">
                Take the readiness questionnaire
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </NuxtLink>
              <NuxtLink :to="checklistPath" class="btn-secondary">
                View clause checklist
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
              Not sure if you are audit-ready? Start with the questionnaire—it
              takes a few minutes.
            </p>
            <div
              v-if="variant === 'cheap' || variant === 'low-cost'"
              class="mt-8 bg-white border border-primary-100 rounded-2xl p-6 text-left"
            >
              <p class="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
                Cheaper than a consultant
              </p>
              <p class="text-gray-700 leading-relaxed mb-0">
                Implementation is what makes ISO expensive. 4ES Hub AI drafts
                your ISO {{ standard }} system from
                <strong>$399/month</strong> so small teams across Canada and
                the US can get certified and stay compliant without a
                $15,000 writing project. The certification body still charges
                for the audit—you just stop paying someone to type the QMS.
              </p>
            </div>
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
              Get a cost estimate for your organization
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
            <h2 class="section-title">{{ content.nextStepsHeading }}</h2>
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

      <section class="py-16 bg-gray-50 border-t border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-2xl font-semibold text-gray-900 mb-2">
              ISO {{ standard }} certification by city
            </h2>
            <p class="text-gray-600 mb-8">
              Find ISO {{ standard }} certification support for organizations
              in major North American cities across Canada and the United
              States.
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

    <CertificationInquiryModal
      v-model="showModal"
      :standard="standard"
      :intent="inquiryIntent"
      :source="inquirySource"
    />
  </div>
</template>

<script setup lang="ts">
import { ISO_CITIES, type IsoStandardSlug } from "~/utils/isoCities";
import { getStandardContent } from "~/utils/isoStandardContent";
import {
  getOverviewSeo,
  type OverviewVariant,
} from "~/utils/isoSeoPages";

type InquiryIntent = "certification_body" | "consultant" | "quote";

const props = withDefaults(
  defineProps<{
    standard: IsoStandardSlug;
    variant?: OverviewVariant;
  }>(),
  {
    variant: "default",
  },
);

const showModal = ref(false);
const inquiryIntent = ref<InquiryIntent>("certification_body");
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const content = getStandardContent(props.standard);
const seo = getOverviewSeo(props.standard, props.variant);
const overviewPath = `/iso-${props.standard}`;
const readinessPath = `/are-you-ready-for-iso-${props.standard}-certification`;
const checklistPath = `/iso-${props.standard}-checklist`;
const pageUrl = `${siteUrl}${seo.path}`;
const cities = ISO_CITIES;
const inquirySource = computed(() =>
  props.variant === "default"
    ? `iso-${props.standard}`
    : `${props.variant}-iso-${props.standard}`,
);

function openInquiry(intent: InquiryIntent) {
  inquiryIntent.value = intent;
  showModal.value = true;
}

useSeoMeta({
  title: seo.metaTitle,
  description: seo.metaDescription,
  ogTitle: seo.h1,
  ogDescription: seo.metaDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
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
