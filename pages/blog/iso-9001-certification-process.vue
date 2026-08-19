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
                  ISO 9001 Certification
                </span>
                <span class="text-sm text-gray-500">9 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-08-19">
                  August 19, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                ISO 9001 certification process: Stage 1, Stage 2, and what
                happens after
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                The ISO 9001 certification process is not a single audit. It is
                gap analysis, a working QMS, internal audit, management review,
                then two registrar stages. Here is the sequence auditors in
                Canada and the US actually follow.
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
                <h2 class="mt-0 text-2xl">What is the ISO 9001 certification process?</h2>
                <p class="mb-0">
                  <strong>Stage 1</strong> is a readiness and documentation
                  review. <strong>Stage 2</strong> is the implementation audit:
                  interviews, records, and process sampling. Certification is
                  issued only after Stage 2 (and any major nonconformities are
                  closed). Surveillance audits then keep the certificate alive
                  for three years.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li><a href="#steps" class="text-primary-600 hover:text-primary-700">Steps before the registrar</a></li>
                  <li><a href="#stage1" class="text-primary-600 hover:text-primary-700">Stage 1 audit</a></li>
                  <li><a href="#stage2" class="text-primary-600 hover:text-primary-700">Stage 2 audit</a></li>
                  <li><a href="#after" class="text-primary-600 hover:text-primary-700">Surveillance and recertification</a></li>
                  <li><a href="#faq" class="text-primary-600 hover:text-primary-700">Frequently asked questions</a></li>
                </ul>
              </nav>

              <h2 id="steps">What happens before Stage 1?</h2>
              <p>
                You choose scope, run a
                <NuxtLink to="/blog/iso-gap-analysis" class="text-primary-600 hover:text-primary-700 font-medium">gap analysis</NuxtLink>,
                document the QMS, train people, run at least one internal audit
                cycle, and hold management review. Skipping internal audit is
                one of the fastest ways to collect Stage 1 findings.
              </p>
              <p>
                ISO does not require a consultant. It does require evidence the
                system is used. That is why software beats a binder: the trail
                already exists when the auditor asks. 4ES Hub AI can draft the
                documented information; your team still operates it. See
                <NuxtLink to="/blog/iso-9001-certification-from-zero-to-certified" class="text-primary-600 hover:text-primary-700 font-medium">from zero to certified</NuxtLink>.
              </p>

              <h2 id="stage1">What is a Stage 1 ISO audit?</h2>
              <p>
                Stage 1 checks whether the documented system addresses ISO 9001
                and whether you appear ready for Stage 2. Auditors look at
                scope, quality policy, objectives, key procedures, internal
                audit and management review evidence, and site logistics. Stage
                1 does not grant a certificate.
              </p>
              <p>
                Findings here are a gift if you treat them that way: cheaper to
                fix before Stage 2. Remote Stage 1 is common for smaller
                organizations; your certification body decides.
              </p>

              <h2 id="stage2">What is a Stage 2 ISO audit?</h2>
              <p>
                Stage 2 is the certification audit. The auditor samples
                processes end to end, interviews staff who actually do the work,
                and tests whether records match the documented information.
                Minor nonconformities are common and usually require a
                corrective action plan. Major nonconformities—core clause not
                functioning—delay the certificate until they are closed and
                often re-audited.
              </p>
              <p>
                After a successful Stage 2, the body completes technical review
                and issues the certificate, typically within a few weeks. Choose
                an accredited body; see
                <NuxtLink to="/blog/iso-9001-certification-companies" class="text-primary-600 hover:text-primary-700 font-medium">how to choose ISO 9001 certification companies</NuxtLink>.
              </p>

              <h2 id="after">What happens after you are certified?</h2>
              <p>
                Surveillance audits (usually annual) sample the system so it has
                not quietly died. Recertification happens at the end of the
                three-year cycle. The cheap mistake is celebrating the
                certificate and returning to shared drives. Keep documents,
                training, CAPA, and audits in one platform—4ES Hub is built as
                that system of record from $399/month.
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
                    <NuxtLink to="/blog/how-long-does-iso-certification-take" class="text-primary-600 hover:text-primary-700 font-medium">
                      How long does ISO certification take?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/iso-9001-mandatory-documents" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO 9001 mandatory documents
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
                <h2 class="mt-0">Run the process in software, not email</h2>
                <p>
                  Try 4ES Hub free. Arrive at Stage 1 with linked documents,
                  training, internal audits, and management review already in
                  one place.
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
  "ISO 9001 certification process: Stage 1, Stage 2, and what happens after";
const description =
  "Learn the ISO 9001 certification process: gap analysis, implementation, internal audit, Stage 1, Stage 2, surveillance. Practical steps for Canada and US organizations.";

const { faqItems } = useBlogArticleSeo({
  slug: "iso-9001-certification-process",
  headline,
  title:
    "ISO 9001 Certification Process: Stage 1 vs Stage 2 Explained | 4ES Hub",
  description,
  keywords: [
    "ISO 9001 certification process",
    "ISO Stage 1 vs Stage 2",
    "ISO 9001 audit process",
    "how to get ISO 9001 certified",
    "ISO certification steps",
    "4ES Hub",
  ],
  published: "2026-08-19",
  section: "ISO 9001 Certification",
  tags: ["ISO 9001 process", "Stage 1", "Stage 2", "surveillance audit"],
  about: [
    "ISO 9001 certification process",
    "Stage 1 audit",
    "Stage 2 audit",
    "surveillance audit",
  ],
  breadcrumbLabel: "ISO 9001 certification process",
  faqItems: [
    {
      question: "What is the difference between Stage 1 and Stage 2 ISO audits?",
      answer:
        "Stage 1 reviews documentation and readiness. Stage 2 verifies the QMS is implemented and effective through interviews, observation, and record sampling. Only Stage 2 can lead to a certificate.",
    },
    {
      question: "Do I need an internal audit before Stage 1?",
      answer:
        "In practice, yes. Certification bodies expect you to have audited your own system and held management review. Showing up with a manual and no internal audit is a common Stage 1 finding.",
    },
    {
      question: "What happens if we fail Stage 2?",
      answer:
        "Major nonconformities must be corrected and usually re-audited. Minors typically need a plan and evidence of implementation. The certificate is withheld until the body accepts closure of majors.",
    },
    {
      question: "How does 4ES Hub support the certification process?",
      answer:
        "4ES Hub holds the documented information, training records, internal audits, nonconformities, and management review in one system so Stage 1 and Stage 2 sampling is straightforward. AI can draft starting records; your team operates them.",
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
