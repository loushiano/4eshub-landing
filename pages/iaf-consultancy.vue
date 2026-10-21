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
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Partners
          </NuxtLink>
          <NuxtLink
            to="/iaf-consultancy"
            class="text-primary-600 text-sm font-normal tracking-snug"
          >
            IAF Consultancy
          </NuxtLink>
          <NuxtLink
            to="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </NuxtLink>
        </nav>
        <a
          href="https://app.4eshub.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
        >
          Try free
        </a>
      </div>
    </header>

    <main id="main-content">
      <section
        class="bg-gradient-to-br from-primary-50 via-white to-white py-20"
        aria-labelledby="iaf-page-title"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <NuxtLink
              to="/partners"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              <i class="fa-solid fa-arrow-left mr-2"></i>
              Partner directory
            </NuxtLink>
            <span
              class="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
            >
              Third-party ISO audits
            </span>
            <h1
              id="iaf-page-title"
              class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              IAF Consultancy
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              IAF Consultancy carries out third-party audits of ISO management
              systems in North America. Their site is
              <a
                href="https://iafconsultancy.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link"
              >https://iafconsultancy.com</a>. An accredited certification body
              issues the certificate.
            </p>
            <a
              href="https://iafconsultancy.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              Visit iafconsultancy.com
              <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-20" aria-labelledby="iaf-what-title">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2
              id="iaf-what-title"
              class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-6"
            >
              What IAF Consultancy does
            </h2>
            <div class="space-y-5 text-lg text-[#6e6e73] tracking-snug leading-relaxed">
              <p>
                IAF Consultancy is a trade name of Afawaz Technologies Inc. It
                is an affiliate of Sustainable Management Group Inc. (SMG), an
                IAS-accredited certification body. SMG is also listed in the
                <NuxtLink to="/partners" class="text-link">4ES Hub partner directory</NuxtLink>.
              </p>
              <p>
                The firm audits ISO management system standards, including
                quality, environment, health and safety, information security,
                and food safety. The written offer states the scope, the
                timing, and the price. The audit is booked after you sign.
              </p>
              <p>
                The path is Stage 1 (a review of the documented system), Stage 2
                (an audit of the system as it runs), then surveillance visits
                and re-certification. Ibrahim Ali Fawaz founded IAF Consultancy.
                He has been a tech lead for ten years and is a lead auditor of
                ISO management system standards.
              </p>
              <p>
                Questions go to
                <a href="mailto:ali@iafconsultancy.com" class="text-link">ali@iafconsultancy.com</a>.
                Full details are on
                <a
                  href="https://iafconsultancy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-link"
                >iafconsultancy.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-16 md:py-20 bg-gray-50"
        aria-labelledby="iaf-4es-title"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2
              id="iaf-4es-title"
              class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-6"
            >
              How this fits with 4ES Hub
            </h2>
            <p class="text-lg text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              4ES Hub is the software a team uses to implement and operate the
              management system. IAF Consultancy is a separate firm that audits
              it. Using 4ES Hub does not issue a certificate, and it does not
              decide the audit result.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                </div>
                <span class="text-gray-700">
                  Build the system in 4ES Hub: documents, risks, training, and
                  audit evidence
                </span>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                </div>
                <span class="text-gray-700">
                  Apply for the audit at
                  <a
                    href="https://iafconsultancy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-link"
                  >https://iafconsultancy.com</a>
                </span>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                </div>
                <span class="text-gray-700">
                  An accredited certification body issues the certificate when
                  the audit supports it
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="py-16 bg-primary-600">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-white mb-4">
            Start with IAF Consultancy
          </h2>
          <p class="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell them about your company and the ISO certification you want.
            They reply with the next step in writing.
          </p>
          <a
            href="https://iafconsultancy.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary !bg-white !text-primary-600 hover:!bg-gray-50"
          >
            Go to iafconsultancy.com
            <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}/iaf-consultancy`;
const shareImage = `${siteUrl}/4es-logo.png`;
const iafUrl = "https://iafconsultancy.com";
const title = "IAF Consultancy";
const description =
  "IAF Consultancy (https://iafconsultancy.com) carries out third-party ISO management system audits in North America. An accredited certification body issues the certificate.";

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
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: pageUrl,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "4ES Hub",
          url: siteUrl,
        },
        about: {
          "@type": "Organization",
          name: "IAF Consultancy",
          legalName: "Afawaz Technologies Inc.",
          url: iafUrl,
          email: "ali@iafconsultancy.com",
          description:
            "Third-party audits of ISO management systems in North America. An accredited certification body issues the certificate.",
        },
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
            item: `${siteUrl}/partners`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "IAF Consultancy",
            item: pageUrl,
          },
        ],
      }),
    },
  ],
});
</script>
