<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/iso-9001"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 9001
          </NuxtLink>
          <NuxtLink
            to="/partners"
            class="text-primary-600 text-sm font-normal tracking-snug"
          >
            Partners
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </NuxtLink>
        </nav>
        <NuxtLink
          to="/#contact-section"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
        >
          Book a free demo
        </NuxtLink>
      </div>
    </header>

    <main id="main-content">
      <section
        class="bg-gradient-to-br from-primary-50 via-white to-white py-20"
        aria-labelledby="partners-page-title"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
         
            <span
              class="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
            >
              Certification network
            </span>
            <h1
              id="partners-page-title"
              class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              ISO certification partners: consultants, certification bodies, and
              training providers
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed">
              4ES Hub connects organizations with vetted ISO 9001 consultants,
              accredited certification bodies, and training partners. Browse by
              standard, language, city, and partner type to find the right
              support for your QMS implementation and audit readiness journey.
            </p>
          </div>
        </div>
      </section>

      <section
        id="partners-directory"
        class="py-16 md:py-20"
        aria-labelledby="partners-directory-title"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="partners-directory-title"
                class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4"
              >
                Partner directory
              </h2>
              <p class="text-lg text-[#6e6e73] tracking-snug">
                Each partner profile includes supported ISO standards, service
                languages, office locations, and whether they act as a
                consultant, certification body, or training provider.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article
                v-for="partner in partners"
                :key="partner.id"
                :id="partner.slug"
                class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                itemscope
                itemtype="https://schema.org/ProfessionalService"
              >
                <meta itemprop="name" :content="partner.name" />
                <meta itemprop="description" :content="partner.description" />

                <div class="p-8 md:p-10 flex flex-col flex-1">
                  <div class="flex items-start gap-5 mb-6">
                    <div
                      class="w-20 h-20 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 overflow-hidden"
                    >
                      <img
                        :src="partner.image"
                        :alt="partner.imageAlt"
                        class="w-full h-full object-contain p-2"
                        itemprop="image"
                        loading="lazy"
                        width="80"
                        height="80"
                      />
                    </div>
                    <div class="min-w-0">
                      <h3
                        class="text-2xl font-bold text-gray-900 mb-2"
                        itemprop="name"
                      >
                        {{ partner.name }}
                      </h3>
                      <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border"
                        :class="getPartnerJobTypeClass(partner.jobType)"
                      >
                        {{ partner.jobType }}
                      </span>
                    </div>
                  </div>

                  <p
                    class="text-gray-600 leading-relaxed mb-6"
                    itemprop="description"
                  >
                    {{ partner.description }}
                  </p>

                  <div class="space-y-5 mt-auto">
                    <details class="group">
                      <summary
                        class="flex items-center justify-between gap-3 cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden"
                      >
                        <span class="text-sm font-semibold text-gray-900">
                          Standards
                          <span class="text-gray-500 font-normal">
                            ({{ partner.standards.length }})
                          </span>
                        </span>
                        <span
                          class="inline-flex items-center text-xs font-semibold text-primary-600 hover:text-primary-700 shrink-0"
                        >
                          <span class="group-open:hidden">
                            Show all
                            <i
                              class="fa-solid fa-chevron-down ml-1 text-[10px]"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span class="hidden group-open:inline-flex items-center">
                            Show less
                            <i
                              class="fa-solid fa-chevron-up ml-1 text-[10px]"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </summary>
                      <ul
                        class="flex flex-wrap gap-2 mt-3"
                        :aria-label="`Supported ISO standards for ${partner.name}`"
                      >
                        <li
                          v-for="standard in partner.standards"
                          :key="`${partner.id}-standard-${standard}`"
                        >
                          <span
                            class="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-100"
                          >
                            {{ standard }}
                          </span>
                        </li>
                      </ul>
                    </details>

                    <div>
                      <h4 class="text-sm font-semibold text-gray-900 mb-2">
                        Languages
                      </h4>
                      <ul
                        class="flex flex-wrap gap-2"
                        :aria-label="`Languages offered by ${partner.name}`"
                      >
                        <li
                          v-for="language in partner.languages"
                          :key="`${partner.id}-language-${language}`"
                        >
                          <span
                            class="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                            itemprop="availableLanguage"
                          >
                            {{ language }}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 class="text-sm font-semibold text-gray-900 mb-2">
                        Locations
                      </h4>
                      <ul
                        class="flex flex-wrap gap-2"
                        :aria-label="`Office locations for ${partner.name}`"
                      >
                        <li
                          v-for="location in partner.locations"
                          :key="`${partner.id}-location-${location}`"
                        >
                          <span
                            class="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-300"
                            itemprop="areaServed"
                          >
                            <i
                              class="fa-solid fa-location-dot text-primary-600 text-[10px]"
                            ></i>
                            {{ location }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    v-if="
                      partner.website ||
                      partner.linkedin ||
                      partner.portfolio ||
                      partner.email
                    "
                    class="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-3"
                  >
                    <a
                      v-if="partner.website"
                      :href="partner.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-link text-sm"
                      itemprop="url"
                    >
                      Visit partner website
                      <i
                        class="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"
                      ></i>
                    </a>
                    <a
                      v-if="partner.linkedin"
                      :href="partner.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-link text-sm"
                    >
                      LinkedIn
                      <i
                        class="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"
                      ></i>
                    </a>
                    <a
                      v-if="partner.portfolio"
                      :href="partner.portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-link text-sm"
                    >
                      Credly portfolio
                      <i
                        class="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"
                      ></i>
                    </a>
                    <a
                      v-if="partner.email"
                      :href="`mailto:${partner.email}`"
                      class="inline-flex items-center text-link text-sm"
                    >
                      Email
                      <i class="fa-solid fa-envelope ml-2 text-xs"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="partners-faq"
        class="py-16 md:py-20 bg-gray-50"
        aria-labelledby="partners-faq-title"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2
              id="partners-faq-title"
              class="text-3xl font-bold text-gray-900 mb-4 text-center"
            >
              Frequently asked questions about 4ES Hub partners
            </h2>
            <p class="text-gray-600 text-center mb-10">
              Clear answers for teams searching ISO 9001 consultant, certification
              body, or QMS implementation support.
            </p>
            <dl class="space-y-6">
              <div
                v-for="item in faqItems"
                :key="item.question"
                class="bg-white rounded-xl border border-gray-200 p-6"
              >
                <dt class="text-lg font-semibold text-gray-900 mb-2">
                  {{ item.question }}
                </dt>
                <dd class="text-gray-600 leading-relaxed">
                  {{ item.answer }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section class="py-16 bg-primary-600">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-white mb-4">
            Need help choosing the right partner?
          </h2>
          <p class="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us your target standard, timeline, and location. We will match
            you with consultant or certification partners and help implement
            your QMS in 4ES Hub.
          </p>
          <NuxtLink
            to="/#contact-section"
            class="btn-primary !bg-white !text-primary-600 hover:!bg-gray-50"
          >
            Request a partner introduction
            <i class="fa-solid fa-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  partners,
  getPartnerJobTypeClass,
} from "~/utils/partners";

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}/partners`;
const shareImage = `${siteUrl}/4es-logo.png`;
const title =
  "ISO Certification Partners: Consultants, Certification Bodies & Training";
const description =
  "Browse 4ES Hub ISO certification partners by standard, language, and city. Find ISO 9001 consultants, accredited certification bodies, and training providers for QMS implementation and audit readiness.";
const keywords =
  "ISO certification partners, ISO 9001 consultant, ISO 9001 certification body, QMS implementation partner, ISO training provider, quality management consultant, certification body directory, 4ES Hub partners";

const faqItems = [
  {
    question: "What types of partners does 4ES Hub work with?",
    answer:
      "4ES Hub introduces organizations to ISO consultants who help design and implement quality management systems, accredited certification bodies that perform independent audits, and training providers that deliver ISO awareness and auditor competence programs.",
  },
  {
    question: "How do I choose between a consultant and a certification body?",
    answer:
      "An ISO consultant helps you build, document, and improve your QMS before certification. A certification body performs the independent audit and issues ISO certificates when requirements are met. Most organizations use both at different stages of the journey.",
  },
  {
    question: "Can 4ES Hub match partners by standard, language, or city?",
    answer:
      "Yes. Each partner profile lists supported ISO standards, service languages, and office locations so you can filter by ISO 9001, ISO 14001, ISO 45001, Arabic or English support, and cities across North America and the Middle East.",
  },
  {
    question: "Does 4ES Hub guarantee ISO certification through these partners?",
    answer:
      "No. 4ES Hub provides QMS software and partner introductions. Certification decisions are made independently by the accredited certification body after they audit your management system.",
  },
];

const partnerSchemaType = (jobType: string) => {
  if (jobType === "Certification Body") {
    return "ProfessionalService";
  }
  if (jobType === "Training Provider") {
    return "EducationalOrganization";
  }
  return "ProfessionalService";
};

useSeoMeta({
  title,
  description,
  robots: "index, follow, max-image-preview:large",
  ogTitle: `${title} | 4ES Hub`,
  ogDescription: description,
  ogUrl: pageUrl,
  ogType: "website",
  ogImage: shareImage,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: shareImage,
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
  meta: [{ name: "keywords", content: keywords }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: pageUrl,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "4ES Hub",
          url: siteUrl,
        },
        about: [
          { "@type": "Thing", name: "ISO 9001 consultant" },
          { "@type": "Thing", name: "ISO certification body" },
          { "@type": "Thing", name: "QMS implementation" },
          { "@type": "Thing", name: "ISO training provider" },
        ],
        mainEntity: {
          "@type": "ItemList",
          name: "4ES Hub certification partners",
          numberOfItems: partners.length,
          itemListElement: partners.map((partner, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: partner.name,
            url: `${pageUrl}#${partner.slug}`,
            item: {
              "@type": partnerSchemaType(partner.jobType),
              name: partner.name,
              description: partner.description,
              image: `${siteUrl}${partner.image}`,
              url:
                partner.website ||
                partner.linkedin ||
                partner.portfolio ||
                `${pageUrl}#${partner.slug}`,
              ...(partner.linkedin
                ? { sameAs: [partner.linkedin, partner.portfolio].filter(Boolean) }
                : {}),
              ...(partner.email
                ? {
                    email: partner.email,
                    contactPoint: {
                      "@type": "ContactPoint",
                      email: partner.email,
                      contactType: "customer service",
                      availableLanguage: partner.languages,
                    },
                  }
                : {}),
              areaServed: partner.locations.map((city) => ({
                "@type": "City",
                name: city,
              })),
              availableLanguage: partner.languages,
              knowsAbout: partner.standards,
              serviceType: partner.jobType,
            },
          })),
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
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
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Partners",
            item: pageUrl,
          },
        ],
      }),
    },
  ],
});
</script>
