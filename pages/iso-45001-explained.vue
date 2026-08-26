<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/iso-45001"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 45001
          </NuxtLink>
          <NuxtLink
            to="/iso-45001-checklist"
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
                ISO 45001
              </span>
              <span class="text-sm text-gray-500">Occupational Health &amp; Safety Management</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
              Health and Safety Management with ISO 45001
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              A plain-language guide to occupational health and safety
              management—and how 4ES Hub turns ISO 45001 into a live system that
              saves safety teams time and helps stop incidents before they happen.
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
                to="/iso-45001-checklist"
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
              <h2 class="mt-0 text-2xl">ISO 45001 in one sentence</h2>
              <p class="mb-0">
                <strong>ISO 45001</strong> is the international standard for an
                occupational health and safety (OH&amp;S) management system: a
                way to prevent work-related injury and ill health, involve
                workers, and keep improving. <strong>4ES Hub</strong> makes that
                practical by putting hazards, incidents, training, audits, and
                corrective actions in one audit-ready platform—so safety work
                happens in hours, not in a binder scramble before the assessor
                arrives.
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
                    >What health and safety management is</a
                  >
                </li>
                <li>
                  <a href="#structure" class="text-primary-600 hover:text-primary-700"
                    >How ISO 45001 is structured</a
                  >
                </li>
                <li>
                  <a href="#hard-part" class="text-primary-600 hover:text-primary-700"
                    >Where OH&amp;S systems stall</a
                  >
                </li>
                <li>
                  <a href="#outcomes" class="text-primary-600 hover:text-primary-700"
                    >Less admin time, fewer incidents</a
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

            <h2 id="what-is">What health and safety management is</h2>
            <p>
              Health and safety management is not a policy on the wall. It is
              the day-to-day system that identifies hazards, controls risk,
              trains people for the work they actually do, investigates what
              went wrong, and proves leadership is paying attention.
            </p>
            <p>
              <strong>ISO 45001:2018</strong> is the globally recognized
              framework for that system. The International Organization for
              Standardization publishes it so organizations of any size or
              sector can provide safer workplaces, prevent injury and ill
              health, and improve OH&amp;S performance over time. It replaced
              OHSAS 18001 as the common reference.
            </p>
            <p>
              Certification is voluntary. Local occupational health and safety
              law still applies. ISO 45001 does not replace OSHA, CCOHS, or
              other statutory duties—it helps you organize, operate, and
              evidence the management system around them. ISO does not certify
              organizations; accredited certification bodies do.
            </p>

            <h2 id="structure">How ISO 45001 is structured</h2>
            <p>
              Like ISO 9001 and ISO 14001, ISO 45001 uses the Plan-Do-Check-Act
              cycle and a shared high-level structure. That is why many teams
              run quality, environment, and safety as an integrated system.
              Auditable requirements typically cover:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>
                <strong>Context of the organization</strong> — OH&amp;S issues,
                workers and other interested parties, and system scope
              </li>
              <li>
                <strong>Leadership and worker participation</strong> — commitment,
                OH&amp;S policy, roles, and genuine consultation (not a
                suggestion box nobody reads)
              </li>
              <li>
                <strong>Planning</strong> — hazard identification, risk and
                opportunity assessment, legal requirements, and OH&amp;S
                objectives
              </li>
              <li>
                <strong>Support</strong> — resources, competence, awareness,
                communication, and documented information
              </li>
              <li>
                <strong>Operation</strong> — operational controls, management of
                change, contractors, procurement, and emergency preparedness
              </li>
              <li>
                <strong>Performance evaluation</strong> — monitoring, incident
                investigation, internal audit, and management review
              </li>
              <li>
                <strong>Improvement</strong> — nonconformity, corrective action,
                and continual improvement
              </li>
            </ul>
            <p>
              The clause that most sets ISO 45001 apart is
              <strong>worker participation</strong>. Auditors look for evidence
              that people doing the work helped identify hazards, review
              controls, and investigate incidents—and that barriers to speaking
              up (fear of blame, language, time pressure) were removed.
            </p>

            <h2 id="hard-part">Where OH&amp;S systems stall</h2>
            <p>
              Understanding the clauses is rarely the blocker. Keeping safety
              alive between audits is. Teams often struggle with:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>Hazard registers that live in a spreadsheet nobody updates after a process change</li>
              <li>Incidents and near misses reported late, on paper, or only after someone is hurt</li>
              <li>Training records that do not match current procedures or high-risk tasks</li>
              <li>Corrective actions opened in email and never closed with evidence</li>
              <li>Worker consultation that exists as a meeting title, not as input that changed a control</li>
              <li>Management review built from last-minute screenshots the week before Stage 2</li>
            </ul>
            <p>
              That is the gap 4ES Hub is built to close—turning health and
              safety management from an annual project into daily software
              workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="outcomes" class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              Less admin time. Fewer incidents.
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-10">
              ISO 45001 is worth doing when it changes how work is controlled—not
              when it adds another folder. Customers use 4ES Hub so safety
              managers stop reconstructing evidence, and so hazards get treated
              before they become injuries.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="item in outcomeItems"
                :key="item.title"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    :class="item.iconBg"
                  >
                    <i class="fa-solid text-lg" :class="[item.icon, item.iconColor]"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                      {{ item.title }}
                    </h3>
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

      <section id="4es-hub" class="py-16 bg-gray-50 border-y border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              How 4ES Hub makes ISO 45001 easy to implement
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-10">
              Instead of stitching together shared drives, paper forms, and
              email, you run the OH&amp;S management system in one place. Each
              module maps to the work auditors expect to see.
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
              Whether you are starting from informal toolbox talks or cleaning
              up an existing OH&amp;S system, the sequence stays simple.
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
                to="/are-you-ready-for-iso-45001-certification"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                Take the readiness check
              </NuxtLink>
              <NuxtLink
                to="/iso-45001-checklist"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                Browse the clause checklist
              </NuxtLink>
              <NuxtLink
                to="/iso-45001"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-5 py-3 transition-all duration-200"
              >
                ISO 45001 certification overview
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
                    to="/training-tracking"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Employee training tracking by competency
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/what-is-iso-45001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    What is ISO 45001?
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/why-iso-45001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Why ISO 45001?
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/should-i-get-iso-45001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Should I get ISO 45001 certification?
                  </NuxtLink>
                </li>
              </ul>
            </aside>

            <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10 text-center">
              <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                Ready to run health and safety without the chaos?
              </h2>
              <p class="text-gray-600 mb-6 max-w-xl mx-auto">
                Try 4ES Hub free and see how it turns ISO 45001 clauses into
                owned workflows, evidence, and fewer last-minute surprises—not a
                binder that gathers dust after the audit. Start right away—no
                appointment needed.
              </p>
              <a
                href="https://app.4eshub.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Try free — start now
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
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
const pageUrl = `${siteUrl}/iso-45001-explained`;
const shareImage = `${siteUrl}/4es-logo.png`;

const headline = "Health and Safety Management with ISO 45001";
const description =
  "ISO 45001 explained in plain language: what occupational health and safety management requires, where systems stall, and how 4ES Hub saves time and helps reduce workplace incidents.";

const outcomeItems = [
  {
    title: "Hours back every month",
    icon: "fa-clock",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Stop rebuilding training matrices, incident packs, and audit folders from email. Evidence is captured as work happens, so surveillance prep is a review—not a week of overtime.",
  },
  {
    title: "Hazards treated before injuries",
    icon: "fa-shield-halved",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Near misses and worker reports become owned actions instead of hallway comments. Closing those loops is how ISO 45001 actually reduces incidents—not by writing a better safety policy.",
  },
  {
    title: "Competence that matches the risk",
    icon: "fa-user-check",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "When a procedure or control changes, the people who need retraining are already in the system. Auditors see current competence, not last year’s sign-off sheet.",
  },
  {
    title: "Leadership that can see the system",
    icon: "fa-chart-line",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Management review is fed by live hazards, incidents, audits, and overdue actions. Leaders spend meeting time deciding—not hunting for numbers.",
  },
];

const hubModules = [
  {
    title: "Documents",
    clause: "Supports documented information (Clause 7.5)",
    icon: "fa-file-lines",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Controlled OH&S policies and procedures with owners, versions, approvals, and review schedules—so the floor always uses the current controlled copy.",
  },
  {
    title: "Training",
    clause: "Supports competence (Clause 7.2)",
    icon: "fa-graduation-cap",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "Role-based competence for high-risk tasks, training assignments, and completion records—with retraining when controlled documents change.",
  },
  {
    title: "Hazards & risks",
    clause: "Supports planning (Clause 6)",
    icon: "fa-triangle-exclamation",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Identify hazards, assess OH&S risk, and track treatments with owners—linked to legal requirements, changes, and related records.",
  },
  {
    title: "Incidents & near misses",
    clause: "Supports incident investigation (Clause 10.2)",
    icon: "fa-kit-medical",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "Capture events when they happen, investigate root cause, and close corrective actions with evidence—so the same hazard is less likely to injure someone next time.",
  },
  {
    title: "Audits",
    clause: "Supports internal audit (Clause 9.2)",
    icon: "fa-clipboard-check",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Plan the OH&S audit programme, run checklists, capture findings, and close follow-ups without rebuilding evidence before every visit.",
  },
  {
    title: "Worker participation",
    clause: "Supports consultation (Clause 5.4)",
    icon: "fa-people-group",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Keep a trail of how workers were consulted on hazards, controls, and investigations—the evidence ISO 45001 auditors look for beyond a signed policy.",
  },
];

const pathSteps = [
  {
    step: 1,
    title: "Understand your gap",
    description:
      "Use the readiness questionnaire and clause checklist to see whether hazards, legal requirements, training, and worker participation are already evidenced—or still informal.",
  },
  {
    step: 2,
    title: "Build the OH&S system in 4ES Hub",
    description:
      "Set up documents, owners, training, hazards, incidents, audits, and actions as living workflows instead of disconnected files.",
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
    question: "What does ISO 45001 actually require?",
    answer:
      "It requires a documented, operated, and improved occupational health and safety management system: identified hazards, controlled risks, competent people, worker consultation, legal requirements, incident investigation, internal audits, management review, and corrective action when things go wrong.",
  },
  {
    question: "Does ISO 45001 replace OSHA or other safety law?",
    answer:
      "No. National and local occupational health and safety laws remain mandatory. ISO 45001 is a voluntary management-system framework that helps you structure and evidence how you meet those duties. It does not grant enforcement exemptions.",
  },
  {
    question: "Is ISO 45001 only for high-hazard industries?",
    answer:
      "No. It applies to any organization that wants a structured OH&S management system. Construction, manufacturing, and energy often need it for tenders, but offices, logistics, healthcare support, and services use it too.",
  },
  {
    question: "How does 4ES Hub save time and help reduce incidents?",
    answer:
      "4ES Hub centralizes hazards, incidents, training, audits, and corrective actions so teams spend less time hunting records and more time closing risks. Near misses and worker reports become owned actions, which is how organizations typically prevent the next injury.",
  },
  {
    question: "Does 4ES Hub issue ISO 45001 certificates?",
    answer:
      "No. Certificates are issued by accredited independent certification bodies. 4ES Hub provides the software to implement and maintain your OH&S management system, and can introduce certification partners when you are ready.",
  },
];

useSeoMeta({
  title: "ISO 45001 Explained | Health and Safety Management",
  description,
  keywords:
    "ISO 45001 explained, health and safety management, occupational health and safety management system, OH&S, ISO 45001:2018, workplace safety software, incident management, 4ES Hub",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogTitle: "ISO 45001 Explained | Health and Safety Management | 4ES Hub",
  ogDescription: description,
  ogUrl: pageUrl,
  ogType: "website",
  ogImage: shareImage,
  ogSiteName: "4ES Hub",
  twitterCard: "summary_large_image",
  twitterTitle: "ISO 45001 Explained | 4ES Hub",
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
            about: [
              "ISO 45001",
              "occupational health and safety management system",
              "health and safety management",
            ],
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
                name: "ISO 45001 Explained",
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
