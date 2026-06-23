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
        <button
          type="button"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
          @click="showModal = true"
        >
          Talk to a certification body
        </button>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
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
            <button
              type="button"
              class="btn-primary"
              @click="showModal = true"
            >
              Talk to a certification body
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto prose-content">
            <p>{{ content.certificationIntro }}</p>

            <h2>Your certification journey</h2>
            <p>
              Our partner certification bodies guide {{ city.name }} organizations
              through a structured path from initial assessment to holding a valid
              ISO {{ standard }} certificate.
            </p>

            <div
              v-for="step in content.certificationSteps"
              :key="step.step"
              class="step-block"
            >
              <div class="step-number">{{ step.step }}</div>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <ul>
                  <li v-for="detail in step.details" :key="detail">
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>

            <h2>{{ content.auditAreasHeading }}</h2>
            <p>{{ content.auditAreasIntro }}</p>

            <div
              v-for="area in content.auditAreas"
              :key="area.number"
              class="audit-area-block"
            >
              <h3>Clause {{ area.number }} — {{ area.title }}</h3>
              <p>{{ area.summary }}</p>
            </div>

            <div class="platform-note">
              <p>{{ content.platformNote }}</p>
            </div>

            <div class="local-section">
              <h2>{{ content.partnerSectionHeading }} in {{ city.name }}</h2>
              <p>
                We work with vetted, accredited certification bodies and ISO
                {{ standard }} consultants serving {{ city.name }} and
                {{ city.region }}. Leave your email and we will connect you
                with the right partner for your industry and location. Browse our
                <NuxtLink to="/partners" class="text-primary-600 hover:text-primary-700 font-semibold">
                  partner directory
                </NuxtLink>
                for certification bodies and consultants in {{ city.name }}.
              </p>
              <button
                type="button"
                class="btn-primary mt-4"
                @click="showModal = true"
              >
                Talk to a certification body
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>

            <div class="cta-box">
              <h2>{{ content.ctaHeading }}</h2>
              <p>{{ content.ctaBody }}</p>
              <button
                type="button"
                class="btn-primary"
                @click="showModal = true"
              >
                Talk to a certification body
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </button>
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
      :city="city.name"
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

const route = useRoute();
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const showModal = ref(false);

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
const pageUrl = `${siteUrl}/iso-${standard}/${city.slug}`;
const h1 = buildCityH1(standard, city.name);
const heroIntro = buildCityHeroIntro(content, city.name, city.intro);
const pageTitle = buildCityPageTitle(standard, city.name);
const pageDescription = buildCityPageDescription(
  standard,
  city.name,
  content.systemName,
);

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
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.prose-content p {
  margin-bottom: 1.5rem;
}

.prose-content ul {
  margin-bottom: 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose-content li {
  margin-bottom: 0.5rem;
}

.step-block {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
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

.audit-area-block {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.audit-area-block h3 {
  margin-top: 0;
}

.platform-note {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.platform-note p {
  margin-bottom: 0;
}

.local-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.local-section h2 {
  margin-top: 0;
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
</style>
