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
        <meta itemprop="datePublished" content="2026-08-12" />
        <meta itemprop="dateModified" content="2026-08-12" />
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
                <span class="text-sm text-gray-500">8 min read</span>
                <time
                  class="text-sm text-gray-500"
                  datetime="2026-08-12"
                  itemprop="datePublished"
                >
                  August 12, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                ISO 9001 certification companies: how to choose a certification
                body
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Searching for ISO 9001 certification companies usually means you
                need an accredited certification body—not a consultant and not
                software. Here is how the roles differ, what to check, and how
                4ES Hub connects you with our partner SMG.
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
                  Key takeaway
                </p>
                <h2 class="mt-0 text-2xl">
                  ISO does not certify you. A certification company does.
                </h2>
                <p class="mb-0">
                  <strong>ISO 9001 certification companies</strong> are
                  independent certification bodies that audit your QMS and
                  issue the certificate. 4ES Hub implements the system in
                  software. Our certification-body partner
                  <strong>SMG (Sustainable Management Group)</strong> is who
                  we introduce you to when you are ready for the audit. Leave
                  your email below and we will make the introduction.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li>
                    <a href="#what-they-are" class="text-primary-600 hover:text-primary-700"
                      >What ISO 9001 certification companies are</a
                    >
                  </li>
                  <li>
                    <a href="#vs-consultant" class="text-primary-600 hover:text-primary-700"
                      >Certification body vs consultant vs software</a
                    >
                  </li>
                  <li>
                    <a href="#how-to-choose" class="text-primary-600 hover:text-primary-700"
                      >How to choose a certification company</a
                    >
                  </li>
                  <li>
                    <a href="#smg" class="text-primary-600 hover:text-primary-700"
                      >Our partner SMG</a
                    >
                  </li>
                  <li>
                    <a href="#connect" class="text-primary-600 hover:text-primary-700"
                      >Get introduced to SMG</a
                    >
                  </li>
                  <li>
                    <a href="#faq" class="text-primary-600 hover:text-primary-700"
                      >Frequently asked questions</a
                    >
                  </li>
                </ul>
              </nav>

              <h2 id="what-they-are">What ISO 9001 certification companies are</h2>
              <p>
                When people search <strong>ISO 9001 certification
                companies</strong>, they are looking for the organization that
                will audit their quality management system and, if it meets
                ISO 9001, issue a certificate. Those companies are called
                certification bodies (sometimes registrars). ISO itself
                publishes the standard. It does not certify organizations.
              </p>
              <p>
                A credible certification company is independent. Under
                ISO/IEC 17021, the body that audits you cannot also consult on
                building your QMS. That separation is the point of
                certification: a third party confirms the system, not the
                people who designed it.
              </p>
              <p>
                That is why 4ES Hub and SMG are different partners. 4ES Hub is
                the eQMS where you implement documents, audits, training,
                risks, and corrective actions. SMG is the certification body
                we work with when you need the independent assessment.
              </p>

              <h2 id="vs-consultant">
                Certification body vs consultant vs software
              </h2>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>
                  <strong>Certification company / certification body</strong>
                  — audits and issues the ISO 9001 certificate. Cannot
                  implement your QMS for you.
                </li>
                <li>
                  <strong>ISO consultant</strong> — helps you design and
                  implement the system. Cannot issue the certificate.
                </li>
                <li>
                  <strong>eQMS software (4ES Hub)</strong> — the system of
                  record your team runs every day, and the evidence the
                  auditor will review.
                </li>
              </ul>
              <p>
                You usually need all three over the life of a certificate:
                software to operate the QMS, optional consulting if you have
                no internal quality lead, and a certification company for the
                Stage 1 / Stage 2 audit and annual surveillance.
              </p>

              <h2 id="how-to-choose">How to choose a certification company</h2>
              <p>
                Not every company that sells “ISO certificates” is a
                certification body your customers will accept. Use this
                filter:
              </p>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>
                  <strong>Independence</strong> — they audit; they do not
                  write your procedures
                </li>
                <li>
                  <strong>Scope</strong> — they certify ISO 9001 (and 14001 /
                  45001 if you need an integrated system)
                </li>
                <li>
                  <strong>Fit</strong> — they can work in your language and
                  region, and schedule audits you can actually attend
                </li>
                <li>
                  <strong>Transparency</strong> — clear pricing for the
                  initial audit, surveillance years, and recertification
                </li>
              </ul>
              <p>
                If a vendor offers to “write the QMS and certify you in the
                same engagement,” walk away. That is not how accredited
                certification works.
              </p>

              <h2 id="smg">Our partner: SMG</h2>
              <div
                class="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 not-prose"
              >
                <div class="flex items-start gap-5 mb-4">
                  <div
                    class="w-20 h-20 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src="/partners/smg.svg"
                      alt="SMG - Sustainable Management Group logo"
                      class="w-full h-full object-contain p-2"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-primary-700 mb-1">
                      Certification body partner
                    </p>
                    <h3 class="text-xl font-bold text-gray-900 mt-0 mb-2">
                      SMG — Sustainable Management Group
                    </h3>
                    <p class="text-gray-600 mb-0">
                      Canadian-based independent assessment provider. SMG
                      offers certification and assessment services across
                      quality (ISO 9001), environment (ISO 14001), health and
                      safety (ISO 45001), and a wide range of other management
                      system standards.
                    </p>
                  </div>
                </div>
                <p class="text-gray-600 mb-0">
                  SMG works in English, Arabic, and French, with coverage in
                  North America and the Middle East.
                  <NuxtLink
                    to="/partners"
                    class="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    See SMG on our partners page
                  </NuxtLink>
                  or visit
                  <a
                    href="http://www.smg-aw.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary-600 hover:text-primary-700 font-semibold"
                  >smg-aw.com</a>.
                </p>
              </div>
              <p>
                4ES Hub does not issue ISO certificates. When you are ready
                for an independent audit, we introduce you to SMG so you can
                talk about scope, timing, and next steps—while your QMS stays
                in 4ES Hub, audit-ready.
              </p>

              <h2 id="connect">Get introduced to SMG</h2>
              <p>
                Leave your email. We will connect you with SMG for ISO 9001
                certification. No sales deck required—just a way for their
                team (and ours) to reach you.
              </p>

              <form
                class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-10"
                @submit.prevent="handleSubmit"
              >
                <p class="text-sm font-semibold text-primary-800 mb-1">
                  Connect me with SMG
                </p>
                <h3 class="mt-0 text-2xl text-gray-900">
                  Request an introduction to our ISO 9001 certification partner
                </h3>
                <p class="text-gray-600 mb-6">
                  We will use this email only to get you in touch with SMG
                  about ISO 9001 certification.
                </p>
                <label
                  for="smg-intro-email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <div class="flex flex-col sm:flex-row gap-3">
                  <input
                    id="smg-intro-email"
                    v-model="email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="you@company.com"
                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    :disabled="isSubmitting || status.success"
                  />
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 whitespace-nowrap"
                    :disabled="isSubmitting || status.success"
                  >
                    {{
                      isSubmitting
                        ? "Sending..."
                        : status.success
                          ? "Sent"
                          : "Connect me with SMG"
                    }}
                  </button>
                </div>
                <p
                  v-if="status.message"
                  class="mt-4 mb-0 rounded-lg p-3 text-sm"
                  :class="
                    status.success
                      ? 'text-primary-800 bg-white'
                      : 'text-red-700 bg-red-50'
                  "
                  role="status"
                >
                  {{ status.message }}
                </p>
              </form>

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
                <p class="text-sm font-semibold text-gray-900 mb-3">
                  Related reading
                </p>
                <ul class="text-sm space-y-2 list-none pl-0 mb-0">
                  <li>
                    <NuxtLink
                      to="/blog/iso-9001-certification-help-consultant-qms-software"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      ISO 9001 certification help: consultants, bodies, and software
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
                  <li>
                    <NuxtLink
                      to="/partners"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      4ES Hub certification partners
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Implement the QMS. Let SMG certify it.</h2>
                <p>
                  Run ISO 9001 in 4ES Hub so the audit is a retrieval of
                  evidence—not a scramble. When you are ready, we introduce you
                  to SMG.
                </p>
                <div class="flex flex-wrap gap-3 mt-2">
                  <a
                    href="#connect"
                    class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
                  >
                    Get introduced to SMG
                    <i class="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                  <a
                    href="https://app.4eshub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center bg-white border border-primary-200 hover:border-primary-400 text-primary-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200"
                  >
                    Try 4ES Hub free
                  </a>
                </div>
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
  "ISO 9001 certification companies: how to choose a certification body";
const description =
  "Looking for ISO 9001 certification companies? Learn how certification bodies differ from consultants, how to choose one, and leave your email so 4ES Hub can introduce you to our partner SMG.";

const email = ref("");
const isSubmitting = ref(false);
const status = ref({ success: false, message: "" });

async function handleSubmit() {
  if (!email.value) return;

  try {
    isSubmitting.value = true;
    status.value = { success: false, message: "" };

    const response = await $fetch("/api/certification-inquiry", {
      method: "POST",
      body: {
        email: email.value,
        standard: "9001",
        intent: "certification_body",
        partner: "SMG",
        source: "blog/iso-9001-certification-companies",
      },
    });

    if (response.status === 200) {
      status.value = {
        success: true,
        message:
          "Thank you. We will introduce you to SMG and follow up at this email shortly.",
      };
      email.value = "";
    } else {
      throw new Error(response.message || "Something went wrong");
    }
  } catch (error) {
    status.value = {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
}

const { faqItems } = useBlogArticleSeo({
  slug: "iso-9001-certification-companies",
  headline,
  title: "ISO 9001 Certification Companies | Get Connected With SMG",
  description,
  keywords: [
    "ISO 9001 certification companies",
    "ISO 9001 certification company",
    "ISO 9001 certification body",
    "ISO 9001 registrar",
    "ISO certification companies",
    "SMG certification",
    "Sustainable Management Group",
    "4ES Hub",
  ],
  published: "2026-08-12",
  section: "ISO 9001 Certification",
  tags: [
    "ISO 9001",
    "certification companies",
    "certification body",
    "SMG",
  ],
  about: [
    "ISO 9001 certification companies",
    "ISO 9001 certification body",
    "SMG Sustainable Management Group",
  ],
  breadcrumbLabel: "ISO 9001 certification companies",
  faqItems: [
    {
      question: "What are ISO 9001 certification companies?",
      answer:
        "ISO 9001 certification companies are independent certification bodies that audit your quality management system and issue an ISO 9001 certificate if it meets the standard. ISO itself does not certify organizations.",
    },
    {
      question: "Is a certification company the same as an ISO consultant?",
      answer:
        "No. A consultant helps you implement the QMS. A certification company audits it independently. Under ISO/IEC 17021, the same body should not consult and certify the same client.",
    },
    {
      question: "Who is SMG?",
      answer:
        "SMG (Sustainable Management Group) is 4ES Hub’s certification-body partner. They provide independent assessment services for ISO 9001, ISO 14001, ISO 45001, and many other management system standards.",
    },
    {
      question: "How do I get in touch with SMG through 4ES Hub?",
      answer:
        "Leave your email on this page. 4ES Hub will introduce you to SMG so you can discuss ISO 9001 certification scope, timing, and next steps.",
    },
    {
      question: "Does 4ES Hub issue ISO 9001 certificates?",
      answer:
        "No. 4ES Hub is the eQMS software where you implement and run the QMS. SMG is the independent certification body that audits and issues the certificate.",
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
