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
            to="/blog/importance-of-iso-training"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO training
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
                Training tracking software
              </span>
              <span class="text-sm text-gray-500">Competence &amp; competency levels</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
              Employee Training Tracking by Competency and Competency Level
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-8">
              Track worker training, role competence, and competency levels in
              one place—so you always know who is qualified, who needs
              retraining, and what evidence auditors will ask for. Try 4ES Hub
              free and start building audit-ready training records today.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="https://app.4eshub.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Try training tracking free
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <NuxtLink
                to="/#contact-section"
                class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Book a free demo
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
              <h2 class="mt-0 text-2xl">Training tracking that proves competence</h2>
              <p class="mb-0">
                <strong>Employee training tracking</strong> is more than
                attendance sheets. With
                <strong>4ES Hub</strong>, you define competencies and competency
                levels for each role, assign required training, record
                completion and evaluation, and keep a living matrix of who can
                perform which work—aligned with ISO 9001 competence
                requirements (Clause 7.2) and everyday workforce development.
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
                    >What is training tracking?</a
                  >
                </li>
                <li>
                  <a href="#competency" class="text-primary-600 hover:text-primary-700"
                    >Competency and competency levels</a
                  >
                </li>
                <li>
                  <a href="#iso" class="text-primary-600 hover:text-primary-700"
                    >ISO 9001 competence requirements</a
                  >
                </li>
                <li>
                  <a href="#features" class="text-primary-600 hover:text-primary-700"
                    >How 4ES Hub tracks training</a
                  >
                </li>
                <li>
                  <a href="#who" class="text-primary-600 hover:text-primary-700"
                    >Who needs training tracking software</a
                  >
                </li>
                <li>
                  <a href="#try-free" class="text-primary-600 hover:text-primary-700"
                    >Try it free</a
                  >
                </li>
                <li>
                  <a href="#faq" class="text-primary-600 hover:text-primary-700"
                    >Frequently asked questions</a
                  >
                </li>
              </ul>
            </nav>

            <h2 id="what-is">What is employee training tracking?</h2>
            <p>
              <strong>Training tracking</strong> (also called training records
              management, learning compliance tracking, or workforce competence
              tracking) is the process of defining what people must know,
              assigning the right courses or sessions, recording completion,
              verifying effectiveness, and retaining evidence for audits and
              operational decisions.
            </p>
            <p>
              Strong training tracking software helps quality, HR, EHS, and
              operations teams answer questions like:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>Which workers are trained for this role or process?</li>
              <li>What competency level has each person achieved?</li>
              <li>Whose certifications or refreshers are expiring?</li>
              <li>Who needs retraining after a procedure change?</li>
              <li>Can we prove competence during an ISO or customer audit?</li>
            </ul>
            <p>
              Spreadsheets and shared drives break down as soon as you have
              multiple sites, shifting roles, or frequent document updates.
              Centralized
              <strong>employee training management</strong> keeps competence
              visible and current.
            </p>

            <h2 id="competency">
              Competency-based training and competency levels
            </h2>
            <p>
              Competency-based training starts with the job—not the course
              catalog. You define the
              <strong>competencies</strong> required for a role (skills,
              knowledge, and behaviors), then map training, on-the-job
              evaluation, and authorization to those competencies.
            </p>
            <p>
              <strong>Competency levels</strong> add nuance. Instead of a binary
              “trained / not trained,” you can track progression such as
              awareness, capable under supervision, independently competent, or
              able to train others. That matters when:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>Operators must reach a minimum level before working alone</li>
              <li>Auditors ask how you verify effectiveness of training</li>
              <li>
                Managers need a skills matrix for scheduling and succession
              </li>
              <li>
                Retraining targets the gap—not a blanket re-run of every course
              </li>
            </ul>
            <p>
              4ES Hub helps companies track worker training against defined
              competencies and competency levels, so completion records connect
              to real role readiness—not just attendance.
            </p>

            <h2 id="iso">How training tracking supports ISO 9001 Clause 7.2</h2>
            <p>
              ISO 9001:2015 Clause 7.2 (Competence) requires organizations to:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>
                Determine the necessary competence of persons doing work under
                the organization’s control that affects quality performance
              </li>
              <li>
                Ensure those persons are competent on the basis of appropriate
                education, training, or experience
              </li>
              <li>Take actions to acquire and maintain necessary competence</li>
              <li>
                Evaluate the effectiveness of actions taken
              </li>
              <li>
                Retain appropriate documented information as evidence of
                competence
              </li>
            </ul>
            <p>
              Training tracking software is how many teams operationalize that
              clause: competence requirements by role, assigned learning,
              evaluations, and retained records. For a deeper dive on training
              evidence in a QMS, see
              <NuxtLink
                to="/blog/training-records-qms"
                class="text-primary-600 hover:text-primary-700 font-semibold"
              >
                training records management for QMS operations
              </NuxtLink>
              and
              <NuxtLink
                to="/blog/importance-of-iso-training"
                class="text-primary-600 hover:text-primary-700 font-semibold"
              >
                why ISO training matters for compliance
              </NuxtLink>.
            </p>
          </div>
        </div>
      </section>

      <section id="features" class="py-16 bg-gray-50 border-y border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
              How 4ES Hub tracks worker training
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-10">
              Replace scattered training logs with a competence-first system
              built for ISO and everyday operations.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="item in features"
                :key="item.title"
                class="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    :class="item.iconBg"
                  >
                    <i
                      class="fa-solid text-lg"
                      :class="[item.icon, item.iconColor]"
                    ></i>
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

      <section id="who" class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto prose-content">
            <h2>Who needs training tracking software?</h2>
            <p>
              Any organization that must prove people are qualified before they
              perform critical work benefits from structured
              <strong>workforce training tracking</strong>:
            </p>
            <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
              <li>
                <strong>Manufacturing &amp; operations</strong> — process
                qualification, safety training, and multi-skill matrices
              </li>
              <li>
                <strong>ISO-certified companies</strong> — ISO 9001, ISO 14001,
                and ISO 45001 competence evidence
              </li>
              <li>
                <strong>Regulated industries</strong> — documented training
                history for quality, safety, and customer audits
              </li>
              <li>
                <strong>Multi-site teams</strong> — consistent competency
                standards across locations
              </li>
              <li>
                <strong>Growing businesses</strong> — onboarding and role
                readiness without spreadsheet chaos
              </li>
            </ul>
            <p>
              Whether you call it LMS compliance tracking, training matrix
              software, competence management, or employee certification
              tracking, the outcome is the same: visible skills, closed gaps,
              and audit-ready records.
            </p>

            <h2 id="try-free">Try competency-based training tracking free</h2>
            <p>
              You do not need another binder or a patchwork of spreadsheets to
              start. Open
              <a
                href="https://app.4eshub.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 hover:text-primary-700 font-semibold"
              >
                the 4ES Hub app
              </a>
              and try training tracking free—define competencies, set competency
              levels, assign worker training, and keep completion evidence in one
              platform.
            </p>
            <p>
              Prefer a guided walkthrough? Book a free demo and we will show how
              training connects to documents, audits, and the rest of your
              management system.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" class="py-16 bg-gray-50 border-t border-gray-200">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-8">
              Frequently asked questions about training tracking
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
                    to="/blog/training-records-qms"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Training records management in a QMS
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/importance-of-iso-training"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Why ISO training matters
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/iso-9001-explained"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    ISO 9001 explained
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/what-is-iso-9001"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    What is ISO 9001?
                  </NuxtLink>
                </li>
              </ul>
            </aside>

            <div
              class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10 text-center"
            >
              <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                Ready to track training by competency?
              </h2>
              <p class="text-gray-600 mb-6 max-w-xl mx-auto">
                Start free in the 4ES Hub app—competencies, competency levels,
                worker training assignments, and audit-ready records in one
                place.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a
                  href="https://app.4eshub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
                >
                  Open the app — try free
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
                <NuxtLink
                  to="/#contact-section"
                  class="inline-flex items-center border border-gray-300 hover:border-primary-600 text-gray-800 hover:text-primary-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200 bg-white"
                >
                  Book a free demo
                </NuxtLink>
              </div>
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
const pageUrl = `${siteUrl}/training-tracking`;
const shareImage = `${siteUrl}/4es-logo.png`;
const appUrl = "https://app.4eshub.com";

const headline =
  "Employee Training Tracking by Competency and Competency Level";
const description =
  "Track employee training by competency and competency level with 4ES Hub. Role-based competence, training records, skills matrices, and ISO 9001 Clause 7.2 evidence—try it free in the app.";

const features = [
  {
    title: "Competency definitions by role",
    icon: "fa-user-check",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "Define the competencies each role needs, then assign required training and evaluations so competence requirements stay explicit.",
  },
  {
    title: "Competency level tracking",
    icon: "fa-layer-group",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Move beyond pass/fail. Track competency levels so managers know who is ready, who needs supervision, and who can coach others.",
  },
  {
    title: "Worker training assignments",
    icon: "fa-graduation-cap",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Assign courses and sessions to people and teams, track completion, and keep roster-level visibility across sites.",
  },
  {
    title: "Training records & evidence",
    icon: "fa-folder-open",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Retain documented information auditors expect—completion dates, evaluations, and authorization history in one controlled place.",
  },
  {
    title: "Retraining when work changes",
    icon: "fa-arrows-rotate",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    description:
      "When controlled procedures revise, prompt retraining so competence stays aligned with the current way of working.",
  },
  {
    title: "Audit-ready competence matrix",
    icon: "fa-table-cells",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "See gaps before the auditor does. Use training and competency status to staff work and close skill gaps early.",
  },
];

const faqItems = [
  {
    question: "What is the difference between training tracking and an LMS?",
    answer:
      "An LMS focuses on delivering courses. Training tracking focuses on proving competence: who needs which skills, which competency level they reached, and whether records are audit-ready. 4ES Hub combines assignment, completion, and competence evidence inside your management system.",
  },
  {
    question: "How does competency-level tracking help quality teams?",
    answer:
      "Competency levels show progression—not just course attendance. Quality and operations leaders can authorize work based on verified readiness, target coaching where levels are low, and demonstrate to auditors that effectiveness of training is evaluated.",
  },
  {
    question: "Does training tracking help with ISO 9001 certification?",
    answer:
      "Yes. ISO 9001 Clause 7.2 requires determining competence needs, ensuring people are competent, evaluating effectiveness, and retaining evidence. Structured employee training tracking is one of the clearest ways to satisfy those requirements day to day.",
  },
  {
    question: "Can we try 4ES Hub training tracking for free?",
    answer:
      "Yes. You can try training tracking free in the 4ES Hub app at app.4eshub.com—set up competencies, competency levels, and worker training records without waiting on a long implementation project. You can also book a free demo for a guided walkthrough.",
  },
  {
    question: "What training records should we keep for audits?",
    answer:
      "Keep role competence requirements, assigned training, completion dates, evaluation or authorization outcomes, refresher due dates, and links to the procedures people were trained against. Centralizing those records is what makes audits faster and less stressful.",
  },
  {
    question:
      "Is this useful for ISO 14001 and ISO 45001 as well as ISO 9001?",
    answer:
      "Yes. Environmental and OH&S systems also expect competence for roles that affect performance and safety. The same competency-based training tracking approach supports multi-standard programs in one platform.",
  },
];

useSeoMeta({
  title:
    "Training Tracking Software | Competency & Competency Level Tracking",
  description,
  keywords:
    "training tracking, employee training tracking, training tracking software, competency tracking, competency level tracking, competence management, training matrix, workforce training tracking, ISO 9001 training, ISO 9001 clause 7.2, training records management, skills matrix software, employee competence tracking, LMS compliance, worker training records, competency-based training, audit-ready training records, 4ES Hub",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogTitle: "Employee Training Tracking by Competency | 4ES Hub",
  ogDescription: description,
  ogUrl: pageUrl,
  ogType: "website",
  ogImage: shareImage,
  ogSiteName: "4ES Hub",
  twitterCard: "summary_large_image",
  twitterTitle: "Training Tracking by Competency Level | 4ES Hub",
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
              "training tracking",
              "competency tracking",
              "employee training management",
              "ISO 9001 competence",
            ],
          },
          {
            "@type": "SoftwareApplication",
            name: "4ES Hub Training Tracking",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: appUrl,
            description:
              "Competency-based employee training tracking software for role competence, competency levels, training records, and ISO audit readiness.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Try training tracking free in the 4ES Hub app",
              url: appUrl,
            },
            provider: {
              "@type": "Organization",
              name: "4ES Hub",
              url: siteUrl,
            },
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
                name: "Training Tracking",
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
