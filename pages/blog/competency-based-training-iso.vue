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
        <meta itemprop="datePublished" content="2026-08-30" />
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
                  Training &amp; competence
                </span>
                <span class="text-sm text-gray-500">8 min read</span>
                <time class="text-sm text-gray-500" datetime="2026-08-30">
                  August 30, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                Competency-based training tracking for ISO: attendance is not
                competence
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                ISO 9001 Clause 7.2 asks whether people can do the work—not
                whether they sat through a slide deck. If your tracker only
                stores sign-in sheets, you will fail the interview even if
                every box is checked.
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
                <h2 class="mt-0 text-2xl">What is competency-based training tracking?</h2>
                <p class="mb-0">
                  It maps <strong>roles to required competence</strong>, then
                  tracks training, levels, and evidence against those
                  requirements—not just attendance. When a procedure changes,
                  you know who must be retrained. 4ES Hub training tracking is
                  built this way, inside the same AI-native QMS as document
                  control and audits, from $399/month.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li><a href="#clause" class="text-primary-600 hover:text-primary-700">What ISO 7.2 actually asks</a></li>
                  <li><a href="#attendance" class="text-primary-600 hover:text-primary-700">Attendance vs competence</a></li>
                  <li><a href="#track" class="text-primary-600 hover:text-primary-700">How 4ES Hub tracks it</a></li>
                  <li><a href="#faq" class="text-primary-600 hover:text-primary-700">Frequently asked questions</a></li>
                </ul>
              </nav>

              <h2 id="clause">What ISO means by competence</h2>
              <p>
                Determine the competence people need for work that affects
                quality (and, for 14001 and 45001, environment and safety).
                Ensure they have it—education, training, or experience. Take
                action when they do not. Evaluate effectiveness. Retain
                evidence. Awareness (Clause 7.3) is separate: people must
                know the policy, their contribution, and the implications of
                not conforming.
              </p>
              <p>
                That is why a spreadsheet of “trained on 12 March” is weak
                evidence. The auditor will ask the operator how they do the
                job and whether they have seen the current work instruction.
                Competence is demonstrated; attendance is a proxy. More
                context:
                <NuxtLink to="/blog/importance-of-iso-training" class="text-primary-600 hover:text-primary-700 font-medium">why ISO training matters</NuxtLink>
                and
                <NuxtLink to="/blog/training-records-qms" class="text-primary-600 hover:text-primary-700 font-medium">why training records are the backbone</NuxtLink>.
              </p>

              <h2 id="attendance">Why attendance-only trackers fail audits</h2>
              <p>
                They cannot answer: who is allowed to do this task, at what
                competency level, against which document revision? They do
                not flag expired licenses or missing role requirements when
                someone changes jobs. They do not connect a document update
                to a retraining list. Implementation feels hard because
                someone is rebuilding that matrix in Excel the week before
                Stage 2.
              </p>
              <p>
                Competency-based tracking flips the model. Start from the
                role. Attach required trainings and levels. Record
                completion and evaluation. When document control issues a
                new revision, the people who need that competence show up
                as a gap—not as a surprise in the audit interview.
              </p>

              <h2 id="track">Training tracking in an AI-native QMS</h2>
              <p>
                4ES Hub tracks employee training by competency and competency
                level—who is qualified, who needs retraining, and what
                evidence the auditor will ask for. It sits next to controlled
                documents so competence is not a sidecar spreadsheet. See the
                product page:
                <NuxtLink to="/training-tracking" class="text-primary-600 hover:text-primary-700 font-medium">employee training tracking by competency</NuxtLink>.
              </p>
              <p>
                AI does not “mark someone competent.” It helps you implement
                the matrix faster and keep it aligned with the processes and
                documents you already run. That is the same special-knowledge
                assistant used for implementation and audit readiness.
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
                    <NuxtLink to="/training-tracking" class="text-primary-600 hover:text-primary-700 font-medium">
                      Training tracking product page
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/iso-document-control-software" class="text-primary-600 hover:text-primary-700 font-medium">
                      ISO document control software
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog/ai-iso-implementation-and-audit" class="text-primary-600 hover:text-primary-700 font-medium">
                      AI for ISO implementation and audit
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Track competence, not just sign-in sheets</h2>
                <p>
                  Try 4ES Hub free. Map roles to competency levels and keep
                  training evidence next to the documents auditors will sample.
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
  "Competency-based training tracking for ISO: attendance is not competence";
const description =
  "ISO 9001 Clause 7.2 is about competence, not attendance sheets. Learn how competency-based training tracking works and how 4ES Hub ties roles, levels, and documents in one QMS.";

const { faqItems } = useBlogArticleSeo({
  slug: "competency-based-training-iso",
  headline,
  title:
    "Competency-Based Training Tracking for ISO 9001 | 4ES Hub",
  description,
  keywords: [
    "competency-based training ISO",
    "ISO 9001 competence",
    "Clause 7.2 training",
    "training tracking software",
    "competency levels QMS",
    "4ES Hub",
  ],
  published: "2026-08-30",
  section: "Training & competence",
  tags: ["competency training", "ISO 7.2", "training tracking"],
  about: [
    "ISO competence",
    "competency-based training",
    "training records",
  ],
  breadcrumbLabel: "Competency-based training tracking",
  faqItems: [
    {
      question: "What is the difference between training and competence in ISO 9001?",
      answer:
        "Training is one way to build competence. Competence is the ability to apply knowledge and skill to the work. Auditors want evidence of both the activity and that it was effective—not only a sign-in sheet.",
    },
    {
      question: "Does ISO 9001 require a training matrix?",
      answer:
        "Not by that name. You must determine required competence and retain evidence. A role-based matrix is the practical way most SMEs do it. Software keeps it current when people and documents change.",
    },
    {
      question: "How do competency levels work?",
      answer:
        "Levels describe how far someone is toward a role requirement—for example trained, supervised, or independently qualified. 4ES Hub tracks training against competency and competency level so you can see who is actually qualified.",
    },
    {
      question: "How does 4ES Hub track training for ISO?",
      answer:
        "Training lives in the same AI-native QMS as document control and audits. You see who is qualified, who needs retraining, and what evidence to show. That is how competence stays audit-ready between surveillance visits.",
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
