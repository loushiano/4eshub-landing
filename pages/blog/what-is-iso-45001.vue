<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <a
          href="https://app.4eshub.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
        >
          Try free
        </a>
      </div>
    </header>

    <main>
      <article itemscope itemtype="https://schema.org/BlogPosting">
        <meta itemprop="headline" :content="headline" />
        <meta itemprop="description" :content="description" />
        <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <NuxtLink
                to="/blog"
                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
              >
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back to blog
              </NuxtLink>
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <span
                  class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
                >
                  ISO 45001
                </span>
                <span class="text-sm text-gray-500">7 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-07-27">
                  July 27, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                What is ISO 45001? Occupational health and safety management
                explained
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                ISO 45001 is the international standard for OH&amp;S management
                systems. Learn what it requires, how it relates to local safety
                law, and how 4ES Hub handles implementation.
              </p>
            </div>
          </div>
        </section>

        <section class="py-16">
          <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto prose-content">
              <section
                id="key-takeaway"
                class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-10"
              >
                <p
                  class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold mb-4"
                >
                  Key takeaway
                </p>
                <h2 class="mt-0 text-2xl">What is ISO 45001 in one sentence?</h2>
                <p class="mb-0">
                  <strong>ISO 45001</strong> is the international standard for
                  occupational health and safety (OH&amp;S) management systems. It
                  helps organizations prevent work-related injury and ill health
                  through systematic hazard control and continual improvement. It
                  does not replace local safety law;
                  <strong> 4ES Hub handles the implementation</strong> of the
                  OH&amp;S management system in software.
                </p>
              </section>

              <h2>What ISO 45001 is</h2>
              <p>
                ISO 45001:2018 is the international standard for OH&amp;S
                management systems. It replaced OHSAS 18001 as the globally
                recognized reference and applies to organizations of all sizes
                and sectors.
              </p>

              <h2>What the standard requires</h2>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>Leadership commitment and worker participation</li>
                <li>Hazard identification and OH&amp;S risk assessment</li>
                <li>Determination of legal and other requirements</li>
                <li>Operational controls and emergency preparedness</li>
                <li>Training, awareness, and competence</li>
                <li>Monitoring, measurement, and performance evaluation</li>
                <li>Incident investigation and continual improvement</li>
              </ul>

              <h2>ISO 45001 is not a substitute for local law</h2>
              <p>
                Certification is voluntary. National health and safety laws remain
                mandatory. ISO 45001 sits on top of those duties as a way to
                structure and evidence safety management—it does not grant
                enforcement exemptions. Accredited certification bodies—not
                ISO—issue certificates.
              </p>

              <h2>How it fits with ISO 9001 and ISO 14001</h2>
              <p>
                ISO 45001 shares the same high-level structure as ISO 9001 and
                ISO 14001, so organizations can reuse shared leadership,
                planning, support, audit, and improvement processes while adding
                safety-specific controls and worker consultation.
              </p>

              <h2>How 4ES Hub handles implementation</h2>
              <p>
                <strong>4ES Hub handles the implementation</strong> of your
                OH&amp;S management system so hazard registers, training,
                incidents, corrective actions, and audits stay documented, owned,
                and audit-ready.
              </p>

              <h2 id="faq">Frequently asked questions</h2>
              <div class="space-y-8">
                <div v-for="item in faqItems" :key="item.question">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ item.question }}
                  </h3>
                  <p class="mb-0">{{ item.answer }}</p>
                </div>
              </div>

              <aside class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10">
                <p class="text-sm font-semibold text-gray-900 mb-3">Related reading</p>
                <ul class="text-sm space-y-2 list-none pl-0 mb-0">
                  <li>
                    <NuxtLink to="/blog/why-iso-45001" class="text-primary-600 hover:text-primary-700 font-medium">
                      Why ISO 45001?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/should-i-get-iso-45001" class="text-primary-600 hover:text-primary-700 font-medium">
                      Should I get ISO 45001 certification?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/what-is-iso-9001" class="text-primary-600 hover:text-primary-700 font-medium">
                      What is ISO 9001?
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Implement ISO 45001 with a system that sticks</h2>
                <p>
                  See how 4ES Hub turns OH&amp;S requirements into connected
                  workflows your team can sustain between audits.
                </p>
                <a
                  href="https://app.4eshub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 mt-2"
                >
                  Try free — start now
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup>
const headline =
  "What is ISO 45001? Occupational health and safety management explained";
const description =
  "ISO 45001 is the international OH&S management system standard. Get a clear definition, how it differs from local safety law, and how 4ES Hub handles implementation.";

const { faqItems } = useBlogArticleSeo({
  slug: "what-is-iso-45001",
  headline,
  title: "What Is ISO 45001? OH&S Management System Explained",
  description,
  keywords: [
    "what is ISO 45001",
    "ISO 45001 definition",
    "ISO 45001 explained",
    "occupational health and safety management system",
    "OH&S",
    "OHSAS 18001",
    "ISO 45001 certification",
    "4ES Hub",
  ],
  published: "2026-07-27",
  section: "ISO 45001",
  tags: ["ISO 45001", "OH&S", "workplace safety"],
  about: [
    "ISO 45001",
    "occupational health and safety management system",
    "worker participation",
    "hazard identification",
  ],
  breadcrumbLabel: "What is ISO 45001?",
  faqItems: [
    {
      question: "What is ISO 45001?",
      answer:
        "ISO 45001 is the international standard for occupational health and safety (OH&S) management systems. It helps organizations provide safe and healthy workplaces by preventing work-related injury and ill health and continually improving OH&S performance.",
    },
    {
      question: "Does ISO 45001 replace OSHA or other local safety laws?",
      answer:
        "No. Local health and safety laws remain mandatory. ISO 45001 is a voluntary management system framework that helps organize and evidence compliance; it does not replace statutory duties or grant regulatory exemptions.",
    },
    {
      question: "What replaced OHSAS 18001?",
      answer:
        "ISO 45001 replaced OHSAS 18001 as the globally recognized OH&S management system standard. Organizations previously certified to OHSAS 18001 transitioned to ISO 45001.",
    },
    {
      question: "Is ISO 45001 certification mandatory?",
      answer:
        "No. Certification is voluntary. Many clients, tenders, and insurers still require it as independent proof of a structured safety management system.",
    },
    {
      question: "How does 4ES Hub help with ISO 45001?",
      answer:
        "4ES Hub handles OH&S management system implementation in software—hazards, training, incidents, corrective actions, audits, and review—and can connect you with consultants and certification partners.",
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
  color: #111827;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
.prose-content p {
  margin-bottom: 1.5rem;
}
</style>
