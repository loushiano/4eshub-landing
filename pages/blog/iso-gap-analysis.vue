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
        <meta itemprop="datePublished" content="2026-08-19" />
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
                  QMS Implementation
                </span>
                <span class="text-sm text-gray-500">8 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-08-19">
                  August 19, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                ISO gap analysis: how to find what is missing before the
                auditor does
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                An ISO gap analysis is the cheapest audit you will ever run:
                clause by clause, what you already do versus what ISO 9001,
                14001, or 45001 requires. Skip it and you implement blind.
              </p>
            </div>
          </div>
        </section>

        <section class="py-16">
          <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto prose-content" itemprop="articleBody">
              <section
                id="key-takeaway"
                class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-10"
              >
                <p
                  class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold mb-4"
                >
                  Quick answer
                </p>
                <h2 class="mt-0 text-2xl">What is an ISO gap analysis?</h2>
                <p class="mb-0">
                  An <strong>ISO gap analysis</strong> compares current
                  practices to each applicable clause and scores them as met,
                  partial, or missing. The output is a prioritized action list—not
                  a binder. Most small organizations already do 60–70% of ISO
                  9001; they have not named it or kept evidence. 4ES Hub
                  checklists plus AI help turn those gaps into an implementation
                  plan.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li><a href="#how" class="text-primary-600 hover:text-primary-700">How to run a gap analysis</a></li>
                  <li><a href="#score" class="text-primary-600 hover:text-primary-700">What to score</a></li>
                  <li><a href="#after" class="text-primary-600 hover:text-primary-700">What to do with the gaps</a></li>
                  <li><a href="#faq" class="text-primary-600 hover:text-primary-700">Frequently asked questions</a></li>
                </ul>
              </nav>

              <h2 id="how">How to run an ISO 9001 gap analysis</h2>
              <p>
                Assign someone who knows the operation. Walk clauses 4 through
                10 with a checklist. Interview people who do the work, do not
                only read old procedures. Score each requirement, write a
                one-line note, and capture evidence if it exists. A focused
                small-site review often takes two to five days—not a six-week
                theatre.
              </p>
              <p>
                Use
                <NuxtLink to="/iso-9001-checklist" class="text-primary-600 hover:text-primary-700 font-medium">the ISO 9001 checklist</NuxtLink>,
                plus
                <NuxtLink to="/iso-14001-checklist" class="text-primary-600 hover:text-primary-700 font-medium">ISO 14001</NuxtLink>
                or
                <NuxtLink to="/iso-45001-checklist" class="text-primary-600 hover:text-primary-700 font-medium">ISO 45001</NuxtLink>
                if you are integrating. A free readiness questionnaire is at
                <NuxtLink to="/are-you-ready-for-iso-certification" class="text-primary-600 hover:text-primary-700 font-medium">are you ready for ISO certification</NuxtLink>.
              </p>

              <h2 id="score">What does “partially compliant” mean?</h2>
              <p>
                Partial usually means the process exists but records do not, or
                one site follows it and another does not, or the procedure is
                outdated. Missing means there is no process. Met means people
                can show it. Be harsh. Optimistic scoring is how Stage 1
                surprises happen.
              </p>
              <p>
                Prioritize by audit risk and customer impact: uncontrolled
                nonconforming output and missing internal audits outrank a
                prettier org chart. Then give each gap an owner and a date.
              </p>

              <h2 id="after">Turn gaps into a cheap implementation plan</h2>
              <p>
                You do not need a consultant to type the action list. You need
                the list in a system that becomes the QMS. 4ES Hub AI can draft
                missing documented information from a description of the
                business; you close the high-risk gaps first, then operate long
                enough for Stage 2 records. That is how gap analysis stays a
                planning tool instead of a PDF that dies in email.
              </p>
              <p>
                Next steps in the journey:
                <NuxtLink to="/blog/iso-9001-certification-process" class="text-primary-600 hover:text-primary-700 font-medium">certification process</NuxtLink>
                and
                <NuxtLink to="/blog/implement-iso-with-ai" class="text-primary-600 hover:text-primary-700 font-medium">implement ISO with AI</NuxtLink>.
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
                    <NuxtLink to="/blog/qms-implementation-challenges" class="text-primary-600 hover:text-primary-700 font-medium">
                      QMS implementation challenges
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/iso-9001-without-a-consultant" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO 9001 without a consultant
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/iso-9001-explained" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO 9001 explained
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Start with gaps, not a generic manual</h2>
                <p>
                  Try 4ES Hub free. Run the checklist, let AI draft what is
                  missing, and keep the action list as your live QMS.
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
  "ISO gap analysis: how to find what is missing before the auditor does";
const description =
  "An ISO gap analysis compares your current practices to ISO 9001, 14001, or 45001 clause by clause. Learn how to run one, how to score gaps, and how 4ES Hub AI turns them into a plan.";

const { faqItems } = useBlogArticleSeo({
  slug: "iso-gap-analysis",
  headline,
  title: "ISO Gap Analysis: How to Run One Before Certification | 4ES Hub",
  description,
  keywords: [
    "ISO gap analysis",
    "ISO 9001 gap analysis",
    "ISO 14001 gap analysis",
    "ISO 45001 gap analysis",
    "QMS gap assessment",
    "ISO readiness assessment",
    "4ES Hub",
  ],
  published: "2026-08-19",
  section: "QMS Implementation",
  tags: ["ISO gap analysis", "ISO 9001", "implementation"],
  about: ["ISO gap analysis", "QMS implementation", "audit readiness"],
  breadcrumbLabel: "ISO gap analysis",
  faqItems: [
    {
      question: "What is an ISO gap analysis?",
      answer:
        "It is a structured comparison of your current processes and records against each requirement of an ISO management system standard. The result is a list of what is compliant, partial, or missing, with owners and dates.",
    },
    {
      question: "How long does an ISO 9001 gap analysis take?",
      answer:
        "A small single-site organization can often complete a thorough gap analysis in two to five days of focused work. Larger or multi-site organizations take longer because more processes and locations must be sampled.",
    },
    {
      question: "Can we do a gap analysis without a consultant?",
      answer:
        "Yes. Use a clause checklist, interview process owners, and score honestly. Consultants add speed and interpretation experience. Software and AI can turn findings into draft documents and actions.",
    },
    {
      question: "How does 4ES Hub help after a gap analysis?",
      answer:
        "Checklist pages and the readiness questionnaire show where you stand. Inside 4ES Hub, AI can draft missing documented information and you track audits, training, and CAPA so gaps close in the same system the auditor will sample.",
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
.prose-content nav a {
  text-decoration: none;
}
.prose-content nav a:hover {
  text-decoration: underline;
}
</style>
