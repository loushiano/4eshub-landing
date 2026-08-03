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
            to="/iso-9001-checklist"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Clause checklist
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
          class="hidden md:inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
        >
          Book a free demo
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
                ISO 9001
              </span>
              <span class="text-sm text-gray-500">Quality Management System</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
              ISO 9001 Explained
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              A plain-language guide to the world’s most used quality management
              standard—and how 4ES Hub turns the requirements into a QMS your
              team can actually run every day.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/#contact-section"
                class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                See 4ES Hub in action
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </NuxtLink>
              <NuxtLink
                to="/iso-9001-checklist"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                View clause checklist
              </NuxtLink>
            </div>
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
              <h2 class="mt-0 text-2xl">ISO 9001 in one sentence</h2>
              <p class="mb-0">
                <strong>ISO 9001</strong> sets the requirements for a quality
                management system (QMS) so you can consistently meet customer
                and regulatory expectations and improve over time.
                <strong> 4ES Hub</strong> makes implementation practical by
                putting documents, training, audits, risks, nonconformities, and
                management-review evidence in one audit-ready platform.
              </p>
            </section>

            <nav
              aria-label="Page contents"
              class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
            >
              <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
              <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                <li>
                  <a href="#what-is" class="text-primary-600 hover:text-primary-700"
                    >What ISO 9001 is</a
                  >
                </li>
                <li>
                  <a href="#structure" class="text-primary-600 hover:text-primary-700"
                    >How the standard is structured</a
                  >
                </li>
                <li>
                  <a href="#hard-part" class="text-primary-600 hover:text-primary-700"
                    >Where implementation gets hard</a
                  >
                </li>
                <li>
                  <a href="#4es-hub" class="text-primary-600 hover:text-primary-700"
                    >How 4ES Hub makes it easy</a
                  >
                </li>
                <li>
                  <a href="#path" class="text-primary-600 hover:text-primary-700"
                    >A practical path to certification</a
                  >
                </li>
                <li>
                  <a href="#faq" class="text-primary-600 hover:text-primary-700"
                    >Frequently asked questions</a
                  >
                </li>
              </ul>
            </nav>

            <h2 id="what-is">What ISO 9001 is</h2>
            <p>
              ISO 9001 is an international standard published by the
              International Organization for Standardization. It does not tell
              you what product or service to sell. It tells you how to run the
              processes that deliver that product or service reliably—so quality
              is planned, controlled, measured, and improved instead of left to
              chance.
            </p>
            <p>
              Organizations of any size or industry can use it. Many buyers,
              tenders, and supply chains ask for ISO 9001 certification as
              independent proof that your QMS meets those requirements.
            </p>

            <h2 id="structure">How the standard is structured</h2>
            <p>
              ISO 9001:2015 is built around a process approach and the
              Plan-Do-Check-Act cycle, with risk-based thinking throughout.
              Auditable requirements typically cover:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>
                <strong>Context of the organization</strong> — issues, interested
                parties, and QMS scope
              </li>
              <li>
                <strong>Leadership</strong> — commitment, quality policy, and
                roles
              </li>
              <li>
                <strong>Planning</strong> — risks, opportunities, and quality
                objectives
              </li>
              <li>
                <strong>Support</strong> — resources, competence, communication,
                and documented information
              </li>
              <li>
                <strong>Operation</strong> — planning and control of products and
                services
              </li>
              <li>
                <strong>Performance evaluation</strong> — monitoring, internal
                audit, and management review
              </li>
              <li>
                <strong>Improvement</strong> — nonconformity, corrective action,
                and continual improvement
              </li>
            </ul>
            <p>
              Certification is voluntary. An accredited third-party body audits
              your QMS and issues a certificate when requirements are met. ISO
              publishes the standard; it does not certify organizations.
            </p>

            <h2 id="hard-part">Where implementation gets hard</h2>
            <p>
              Understanding the clauses is rarely the blocker. Keeping the system
              alive is. Teams often struggle with:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>Documents scattered across drives with unclear versions</li>
              <li>Training records that do not match current procedures</li>
              <li>Internal audits planned in spreadsheets, findings lost in email</li>
              <li>Nonconformities opened but never closed with evidence</li>
              <li>Management review built from last-minute screenshots</li>
            </ul>
            <p>
              That is the gap 4ES Hub is built to close—turning ISO 9001 from a
              project binder into daily software workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="4es-hub" class="py-16 bg-gray-50 border-y border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              How 4ES Hub makes ISO 9001 easy to implement
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-10">
              Instead of stitching together folders, email, and spreadsheets,
              you run the QMS in one place. Each module maps to the work
              auditors expect to see.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="item in hubModules"
                :key="item.title"
                class="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    :class="item.iconBg"
                  >
                    <i class="fa-solid text-lg" :class="[item.icon, item.iconColor]"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">
                      {{ item.title }}
                    </h3>
                    <p class="text-sm text-primary-700 font-medium mb-2">
                      {{ item.clause }}
                    </p>
                    <p class="text-gray-600 text-[15px] leading-relaxed mb-0">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="path" class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              A practical path with 4ES Hub
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-10">
              Whether you are starting from scratch or cleaning up an existing
              system, the sequence stays simple.
            </p>
            <div class="space-y-6">
              <div
                v-for="step in pathSteps"
                :key="step.step"
                class="flex gap-5"
              >
                <div
                  class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold shrink-0"
                >
                  {{ step.step }}
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-0">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 mt-10">
              <NuxtLink
                to="/are-you-ready-for-iso-9001-certification"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                Take the readiness check
              </NuxtLink>
              <NuxtLink
                to="/iso-9001-checklist"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                Browse the clause checklist
              </NuxtLink>
              <NuxtLink
                to="/iso-9001"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                ISO 9001 certification overview
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="py-16 bg-gray-50 border-t border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-8">
              Frequently asked questions
            </h2>
            <div class="space-y-8">
              <div v-for="item in faqItems" :key="item.question">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  {{ item.question }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-0">{{ item.answer }}</p>
              </div>
            </div>

            <aside class="bg-white border border-gray-200 rounded-2xl p-6 mt-10">
              <p class="text-sm font-semibold text-gray-900 mb-3">Related reading</p>
              <ul class="text-sm space-y-2 list-none pl-0 mb-0">
                <li>
                  <NuxtLink
                    to="/blog/what-is-iso-9001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    What is ISO 9001?
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/why-iso-9001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Why ISO 9001?
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/should-i-get-iso-9001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Should I get ISO 9001 certification?
                  </NuxtLink>
                </li>
              </ul>
            </aside>

            <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10 text-center">
              <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                Ready to implement ISO 9001 without the chaos?
              </h2>
              <p class="text-gray-600 mb-6 max-w-xl mx-auto">
                Book a free demo and see how 4ES Hub turns ISO 9001 clauses into
                owned workflows, evidence, and continuous improvement—not a
                binder that gathers dust after the audit.
              </p>
              <NuxtLink
                to="/#contact-section"
                class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Book a free demo
                <i class="fa-solid fa-arrow-right ml-2"></i>
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

<script setup>
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const pageUrl = `${siteUrl}/iso-9001-explained`;
const shareImage = `${siteUrl}/4es-logo.png`;

const headline = "ISO 9001 Explained";
const description =
  "ISO 9001 explained in plain language: what the quality management standard requires, where implementation gets hard, and how 4ES Hub makes your QMS easy to run and audit-ready.";

const hubModules = [
  {
    title: "Documents",
    clause: "Supports documented information (Clause 7.5)",
    icon: "fa-file-lines",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Controlled policies and procedures with owners, versions, approvals, and review schedules—so auditors always see the current controlled copy.",
  },
  {
    title: "Training",
    clause: "Supports competence (Clause 7.2)",
    icon: "fa-graduation-cap",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "Role-based competence, training assignments, and completion records—with retraining when controlled documents change.",
  },
  {
    title: "Risks",
    clause: "Supports risk-based thinking (Clause 6)",
    icon: "fa-triangle-exclamation",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Identify, assess, and treat risks with clear owners and residual levels, linked to actions and related QMS records.",
  },
  {
    title: "Audits",
    clause: "Supports internal audit (Clause 9.2)",
    icon: "fa-clipboard-check",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Plan programs, run checklists, capture findings, and close follow-ups without rebuilding evidence before every visit.",
  },
  {
    title: "Nonconformities",
    clause: "Supports improvement (Clause 10)",
    icon: "fa-circle-xmark",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "Structured workflows from identification through root cause, corrective action, and effectiveness checks.",
  },
  {
    title: "Performance & feedback",
    clause: "Supports evaluation & customer focus (Clauses 8–9)",
    icon: "fa-chart-line",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Track KPIs and customer feedback so management review is fed by live data—not a last-minute scramble.",
  },
];

const pathSteps = [
  {
    step: 1,
    title: "Understand your gap",
    description:
      "Use the readiness questionnaire and clause checklist to see what you already do well and what still needs structure.",
  },
  {
    step: 2,
    title: "Build the QMS in 4ES Hub",
    description:
      "Set up documents, owners, training, risks, audits, and actions as living workflows instead of disconnected files.",
  },
  {
    step: 3,
    title: "Connect partners when you need them",
    description:
      "If you need implementation help or an accredited certification body, 4ES Hub can introduce the right partners at the right time.",
  },
  {
    step: 4,
    title: "Stay audit-ready after the certificate",
    description:
      "Keep running the system for surveillance and continual improvement—so certification is a milestone, not a one-time project.",
  },
];

const faqItems = [
  {
    question: "What does ISO 9001 actually require?",
    answer:
      "It requires a documented, operated, and improved quality management system: defined processes, competent people, controlled documents, monitored performance, internal audits, management review, and corrective action when things go wrong.",
  },
  {
    question: "Is ISO 9001 only for manufacturers?",
    answer:
      "No. ISO 9001 applies to any organization that provides products or services—manufacturing, software, professional services, logistics, healthcare support, and more.",
  },
  {
    question: "Do I need a consultant to implement ISO 9001?",
    answer:
      "Not always. Many teams implement with software and internal ownership. If you need expert help, 4ES Hub can connect you with consultants while you still run the day-to-day QMS in the platform.",
  },
  {
    question: "How does 4ES Hub make ISO 9001 easier?",
    answer:
      "4ES Hub centralizes the workflows auditors look for—document control, competence, risk, internal audits, nonconformities, KPIs, and feedback—so evidence stays organized as work happens, not rebuilt before the audit.",
  },
  {
    question: "Does 4ES Hub issue ISO 9001 certificates?",
    answer:
      "No. Certificates are issued by accredited independent certification bodies. 4ES Hub provides the software to implement and maintain your QMS, and can introduce certification partners when you are ready.",
  },
];

useSeoMeta({
  title: "ISO 9001 Explained | How 4ES Hub Makes QMS Implementation Easy",
  description,
  keywords:
    "ISO 9001 explained, what is ISO 9001, ISO 9001:2015, quality management system, QMS software, ISO 9001 implementation, 4ES Hub",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogTitle: "ISO 9001 Explained | 4ES Hub",
  ogDescription: description,
  ogUrl: pageUrl,
  ogType: "website",
  ogImage: shareImage,
  ogSiteName: "4ES Hub",
  twitterCard: "summary_large_image",
  twitterTitle: "ISO 9001 Explained | 4ES Hub",
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
        "@graph": [
          {
            "@type": "WebPage",
            "@id": pageUrl,
            url: pageUrl,
            name: headline,
            description,
            isPartOf: {
              "@type": "WebSite",
              name: "4ES Hub",
              url: siteUrl,
            },
            about: ["ISO 9001", "quality management system", "QMS software"],
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "ISO 9001 Explained",
                item: pageUrl,
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ],
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
.prose-content p {
  margin-bottom: 1.5rem;
}
.prose-content nav a {
  text-decoration: none;
}
.prose-content nav a:hover {
  text-decoration: underline;
}
</style>
