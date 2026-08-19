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
                  ISO 9001
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
                ISO 9001 for small business: can a 10-person company get
                certified?
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Yes. ISO 9001 is written to scale. A 10-person shop in Winnipeg
                or a 15-person contractor in Austin does not need a corporate
                quality department—it needs a QMS that matches how work is
                already done.
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
                <h2 class="mt-0 text-2xl">Is ISO 9001 worth it for a small business?</h2>
                <p class="mb-0">
                  If customers, tenders, or supply chains ask for it,
                  <strong>ISO 9001 for small business</strong> is usually yes.
                  Implementation should stay lean: document what you do, collect
                  real records, and avoid a 200-page manual. AI software like
                  4ES Hub ($399/month full platform) replaces much of the
                  coordinator labor that used to make ISO feel “only for big
                  companies.”
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li><a href="#fits" class="text-primary-600 hover:text-primary-700">Does ISO 9001 fit a small company?</a></li>
                  <li><a href="#needs" class="text-primary-600 hover:text-primary-700">What a small QMS actually needs</a></li>
                  <li><a href="#cost-time" class="text-primary-600 hover:text-primary-700">Cost and time for SMEs</a></li>
                  <li><a href="#faq" class="text-primary-600 hover:text-primary-700">Frequently asked questions</a></li>
                </ul>
              </nav>

              <h2 id="fits">Can a small business get ISO 9001 certified?</h2>
              <p>
                The standard does not set a minimum headcount. Certification
                bodies audit effectiveness against your scope. A five-person
                professional firm can hold a certificate if processes,
                complaints, competence, and improvement are controlled and
                evidenced.
              </p>
              <p>
                The myth that ISO 9001 is “for factories only” is wrong. Service
                companies, software teams, and contractors certify when buyers
                require it. Decide with
                <NuxtLink to="/blog/should-i-get-iso-9001" class="text-primary-600 hover:text-primary-700 font-medium">should I get ISO 9001?</NuxtLink>
                rather than copying a manufacturer’s binder.
              </p>

              <h2 id="needs">What a 10–50 person QMS should include</h2>
              <p>
                Scope, policy, a handful of process descriptions (sales to
                delivery to complaint), a simple risk view, training records,
                a way to log nonconformities, an internal audit (even if one
                trained person audits with a checklist), and a management review
                the owner actually attends. That is the job. Not 40 unused SOPs.
              </p>
              <p>
                Documented information should match
                <NuxtLink to="/blog/iso-9001-mandatory-documents" class="text-primary-600 hover:text-primary-700 font-medium">what ISO 9001 actually requires</NuxtLink>.
                City pages such as
                <NuxtLink to="/iso-9001/calgary" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 in Calgary</NuxtLink>
                or
                <NuxtLink to="/iso-9001/houston" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 in Houston</NuxtLink>
                are the same clauses with local customers and registrars.
              </p>

              <h2 id="cost-time">What it costs and how long it takes for SMEs</h2>
              <p>
                Small-company first-year totals with a consultant often sit
                between $8,000 and $20,000. Timeline is commonly 4–8 months
                because of the operating-record period. The cheaper path is
                internal ownership plus software: 4ES Hub AI drafts, you
                approve, you keep using the same system after the certificate.
                Numbers:
                <NuxtLink to="/blog/how-much-does-iso-9001-certification-cost" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 cost</NuxtLink>
                and
                <NuxtLink to="/blog/how-long-does-iso-certification-take" class="text-primary-600 hover:text-primary-700 font-medium">ISO certification timeline</NuxtLink>.
              </p>
              <p>
                You do not need a full-time quality manager. You need a named
                management representative (often the owner or operations lead)
                and a tool that does not live in someone’s laptop. That is the
                SME version of “stay compliant.”
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
                    <NuxtLink to="/blog/iso-9001-without-a-consultant" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO 9001 without a consultant
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/cheap-iso-9001-certification" class="text-primary-600 hover:text-primary-700 font-medium">
                      Cheap ISO 9001 certification
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/implement-iso-with-ai" class="text-primary-600 hover:text-primary-700 font-medium">
                      Implement ISO with AI
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">ISO 9001 sized for a small team</h2>
                <p>
                  Try 4ES Hub free. AI helps a 10-person company implement a
                  QMS that auditors can sample—without hiring a quality
                  department.
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
  "ISO 9001 for small business: can a 10-person company get certified?";
const description =
  "Yes—ISO 9001 scales to small businesses. See what a 5–50 person QMS needs, typical cost and timeline, and how 4ES Hub AI replaces a full-time quality coordinator.";

const { faqItems } = useBlogArticleSeo({
  slug: "iso-9001-for-small-business",
  headline,
  title: "ISO 9001 for Small Business: Cost, Requirements & How to Certify",
  description,
  keywords: [
    "ISO 9001 for small business",
    "ISO 9001 small company",
    "ISO 9001 SME",
    "can a small business get ISO 9001",
    "ISO 9001 for startups",
    "4ES Hub",
  ],
  published: "2026-08-19",
  section: "ISO 9001",
  tags: ["ISO 9001 small business", "SME", "QMS"],
  about: ["ISO 9001 for SMEs", "small business certification", "lean QMS"],
  breadcrumbLabel: "ISO 9001 for small business",
  faqItems: [
    {
      question: "Is there a minimum company size for ISO 9001?",
      answer:
        "No. ISO 9001 applies to any organization. Very small companies use simpler documented information. Certification bodies still expect a working system and records, not a corporate quality department.",
    },
    {
      question: "How much does ISO 9001 cost for a small business?",
      answer:
        "All-in first year with a consultant is often $8,000–$20,000 for a small single site. Audit-only fees are lower. 4ES Hub full platform at $399/month is designed as the software alternative to that writing labor.",
    },
    {
      question: "Do small businesses need a quality manager?",
      answer:
        "You need a named person who owns the QMS. That can be the owner or operations lead with part-time time and software. A dedicated quality manager is optional until complexity or customer audits demand it.",
    },
    {
      question: "Can a small business implement ISO 9001 with AI?",
      answer:
        "Yes. AI can draft procedures and context from a description of the business. Owners must review and staff must be able to explain the process. 4ES Hub is built for that review-and-run model.",
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
