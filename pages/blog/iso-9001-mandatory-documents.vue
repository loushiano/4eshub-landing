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
                <span class="text-sm text-gray-500">9 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-08-19">
                  August 19, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                ISO 9001 mandatory documents: what you actually need in 2026
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Search “ISO 9001 mandatory documents” and you will still find
                lists of six procedures from ISO 9001:2008. The 2015 standard
                does not work that way. Here is what auditors still expect to
                see.
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
                <h2 class="mt-0 text-2xl">Does ISO 9001 require mandatory procedures?</h2>
                <p class="mb-0">
                  ISO 9001:2015 requires <strong>documented information</strong>
                  to the extent needed for an effective QMS—not a fixed list of
                  six procedures. In practice you still need a quality policy,
                  quality objectives, scope, and retained records of audits,
                  nonconformities, competence, and management review. Write what
                  you do. Do not buy a 90-SOP pack for a 12-person company.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li><a href="#must" class="text-primary-600 hover:text-primary-700">What you must maintain and retain</a></li>
                  <li><a href="#myth" class="text-primary-600 hover:text-primary-700">The six-procedure myth</a></li>
                  <li><a href="#small" class="text-primary-600 hover:text-primary-700">How small businesses stay lean</a></li>
                  <li><a href="#faq" class="text-primary-600 hover:text-primary-700">Frequently asked questions</a></li>
                </ul>
              </nav>

              <h2 id="must">What documented information do ISO 9001 auditors expect?</h2>
              <p>
                Maintain (keep current): the scope of the QMS, the quality
                policy, quality objectives, and whatever process documentation
                you need so people can work consistently. Retain (keep as
                evidence): monitoring results, internal audit reports,
                management review records, competence/training evidence,
                nonconformity and corrective action records, and calibration or
                process-control records where they apply.
              </p>
              <p>
                Clause 7.5 is the rule: documented information shall be
                controlled. Version, owner, approval, and retrieval matter more
                than a pretty template. Shared-drive chaos is why
                <NuxtLink to="/blog/documentation-audit-readiness" class="text-primary-600 hover:text-primary-700 font-medium">documentation becomes painful before an audit</NuxtLink>.
              </p>

              <h2 id="myth">Why “six mandatory procedures” is outdated</h2>
              <p>
                ISO 9001:2008 named specific documented procedures. ISO
                9001:2015 replaced that with documented information scaled to
                the organization. Consultants who still sell a mandatory
                document-control procedure, record-control procedure, internal
                audit procedure, and so on are selling 2008 muscle memory.
              </p>
              <p>
                You may still write those procedures if they help. A small shop
                can cover document control in one short work instruction. A
                400-person plant may need more. The auditor tests effectiveness,
                not page count.
              </p>

              <h2 id="small">Keep documents cheap: draft with AI, control in software</h2>
              <p>
                The expensive mistake is paying someone to invent processes you
                do not run. Describe how orders are taken, how work is checked,
                and how complaints are closed. 4ES Hub AI drafts candidate
                documents; you edit until they match the floor. Then version
                control, training links, and audit trails live in the same
                system—$399/month instead of a documentation project.
              </p>
              <p>
                Use the
                <NuxtLink to="/iso-9001-checklist" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 checklist</NuxtLink>
                to see clauses, then store only what supports those clauses.
                More on lean implementation:
                <NuxtLink to="/blog/iso-9001-for-small-business" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 for small business</NuxtLink>.
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
                    <NuxtLink to="/blog/what-is-iso-9001" class="text-primary-600 hover:text-primary-700 font-medium">
                      What is ISO 9001?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/iso-gap-analysis" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO gap analysis
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
                <h2 class="mt-0">Draft the documents you will actually use</h2>
                <p>
                  Try 4ES Hub free. Let AI propose documented information, then
                  control versions, training, and audit evidence in one place.
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
  "ISO 9001 mandatory documents: what you actually need in 2026";
const description =
  "ISO 9001:2015 does not require six named procedures. See which documented information you must maintain and retain, what small businesses can skip, and how 4ES Hub AI drafts it.";

const { faqItems } = useBlogArticleSeo({
  slug: "iso-9001-mandatory-documents",
  headline,
  title:
    "ISO 9001 Mandatory Documents (2015): What You Need in 2026 | 4ES Hub",
  description,
  keywords: [
    "ISO 9001 mandatory documents",
    "ISO 9001 documented information",
    "ISO 9001 required procedures",
    "ISO 9001:2015 documents",
    "quality policy ISO 9001",
    "4ES Hub",
  ],
  published: "2026-08-19",
  section: "ISO 9001",
  tags: ["ISO 9001 documents", "documented information", "Clause 7.5"],
  about: [
    "ISO 9001 documented information",
    "quality policy",
    "document control",
  ],
  breadcrumbLabel: "ISO 9001 mandatory documents",
  faqItems: [
    {
      question: "How many documents does ISO 9001 require?",
      answer:
        "There is no fixed number. ISO 9001:2015 requires documented information necessary for the QMS to operate and to show results. A small company may run on a short set of policies, process maps, and records. A complex plant will need more.",
    },
    {
      question: "Is a quality manual mandatory in ISO 9001:2015?",
      answer:
        "No. A quality manual is optional. Many organizations still keep a short one because it helps new staff and auditors navigate scope, processes, and interactions.",
    },
    {
      question: "Do we need a documented internal audit procedure?",
      answer:
        "Not by name. You must plan and conduct internal audits and retain evidence. A short procedure helps consistency; it is not a 2008-style mandatory document.",
    },
    {
      question: "How does 4ES Hub help with ISO 9001 documents?",
      answer:
        "4ES Hub stores controlled documents with version history, approvals, and training links. AI can draft first versions from a description of your business so you are not starting from a generic 90-SOP pack.",
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
