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
                <span class="text-sm text-gray-500">8 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-07-27">
                  July 27, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                Should I get ISO 45001 certification? Who needs it and who can
                wait
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                ISO 45001 is voluntary—but often required by clients and tenders.
                Use this decision guide, then let 4ES Hub handle implementation
                if certification is the right move.
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
                  Direct answer
                </p>
                <h2 class="mt-0 text-2xl">Should you get ISO 45001?</h2>
                <p class="mb-0">
                  <strong>Yes</strong>, if you work in higher-risk operations,
                  face client or tender requirements, or need a durable safety
                  system for transient or multi-site workforces.
                  <strong>Wait</strong> if you are a low-risk office business
                  with no external demand and already meet legal basics
                  informally. When you proceed,
                  <strong>4ES Hub handles the implementation</strong>.
                </p>
              </section>

              <p>
                No country makes ISO 45001 certification itself a legal
                requirement. Local safety law sets duties; ISO 45001 is a
                strategic choice about how you organize and prove safety
                management.
              </p>

              <h2>When ISO 45001 is usually worth it</h2>
              <ul class="list-disc pl-6 space-y-3 mb-6 text-gray-600">
                <li>
                  <strong>Clients, tenders, or insurers require it</strong> —
                  common in construction, manufacturing, oil and gas, mining,
                  utilities, logistics, and facilities management.
                </li>
                <li>
                  <strong>Hazards are severe or complex</strong> — heavy plant,
                  working at height, confined spaces, hazardous substances, or
                  high staff turnover.
                </li>
                <li>
                  <strong>Informal safety knowledge is fragile</strong> —
                  contractors, shutdowns, and rotating teams lose tribal
                  knowledge quickly.
                </li>
                <li>
                  <strong>You already run ISO 9001 or ISO 14001</strong> —
                  shared structure makes adding OH&amp;S a smaller step.
                </li>
              </ul>

              <h2>When it may not be necessary yet</h2>
              <p>
                A very small, low-physical-risk office with no client demand may
                get little return from certification initially. Strengthen
                statutory basics first. Do not chase a certificate without
                leadership commitment—paper systems that nobody owns do not make
                workplaces safer.
              </p>

              <h2>Readiness signs before you set an audit date</h2>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>Management will participate—not fully delegate safety downward</li>
                <li>Risk assessments or safe systems of work already exist in some form</li>
                <li>Incidents and near misses can be recorded and investigated</li>
                <li>Workers can be consulted on hazards and controls</li>
                <li>Someone can own the system and coordinate certification</li>
                <li>A clear commercial or risk trigger gives the project direction</li>
              </ul>

              <h2>If the answer is yes, 4ES Hub handles implementation</h2>
              <p>
                <strong>4ES Hub handles the implementation</strong> of ISO 45001
                so hazard registers, competence records, operational controls,
                incidents, corrective actions, internal audits, and management
                review stay connected and audit-ready.
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
                    <NuxtLink to="/blog/what-is-iso-45001" class="text-primary-600 hover:text-primary-700 font-medium">
                      What is ISO 45001?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/why-iso-45001" class="text-primary-600 hover:text-primary-700 font-medium">
                      Why ISO 45001?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/should-i-get-iso-9001" class="text-primary-600 hover:text-primary-700 font-medium">
                      Should I get ISO 9001?
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Unsure whether you need ISO 45001?</h2>
                <p>
                  Tell us about your industry, clients, and current safety
                  practices. We will help you decide timing—and show how 4ES Hub
                  would handle implementation if you move ahead.
                </p>
                <NuxtLink
                  to="/#contact-section"
                  class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 mt-2"
                >
                  Book a free demo
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </NuxtLink>
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
  "Should I get ISO 45001 certification? Who needs it and who can wait";
const description =
  "Should you get ISO 45001 certification? Learn who needs it, who can wait, readiness signs, and how 4ES Hub handles OH&S management system implementation.";

const { faqItems } = useBlogArticleSeo({
  slug: "should-i-get-iso-45001",
  headline,
  title: "Should I Get ISO 45001 Certification? Who Needs It",
  description,
  keywords: [
    "should I get ISO 45001",
    "is ISO 45001 worth it",
    "who needs ISO 45001",
    "ISO 45001 certification decision",
    "do I need ISO 45001",
    "OH&S certification",
    "4ES Hub",
  ],
  published: "2026-07-27",
  section: "ISO 45001",
  tags: ["ISO 45001", "certification decision", "OH&S"],
  about: [
    "ISO 45001 certification",
    "occupational health and safety",
    "high-risk industries",
    "safety prequalification",
  ],
  breadcrumbLabel: "Should I get ISO 45001?",
  faqItems: [
    {
      question: "Should I get ISO 45001 certification?",
      answer:
        "Get ISO 45001 if you operate in higher-risk environments, face client or tender requirements, or need a durable safety system for multi-site or contractor workforces. Wait if you are low-risk, have no external demand, and still need to strengthen basic legal safety arrangements.",
    },
    {
      question: "Is ISO 45001 legally required?",
      answer:
        "No. ISO 45001 certification is not a legal requirement. Local occupational health and safety laws set mandatory duties. Certification is a voluntary way to structure and prove your OH&S management system.",
    },
    {
      question: "Which industries need ISO 45001 most often?",
      answer:
        "Construction, manufacturing, oil and gas, mining, agriculture, utilities, waste, logistics, and facilities management see ISO 45001 requested most often because of physical risk and supply-chain prequalification.",
    },
    {
      question: "Can a small low-risk business skip ISO 45001?",
      answer:
        "Often yes, at least initially. Small office-based businesses with low physical risk and no client requirement usually get more value from solid risk assessments, training, and consultation before pursuing certification.",
    },
    {
      question: "How does 4ES Hub help after we decide to certify?",
      answer:
        "4ES Hub handles ISO 45001 implementation in software and can connect you with OH&S consultants and certification bodies while your team operates hazards, incidents, training, audits, and review in one system.",
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
