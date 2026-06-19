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
            class="text-primary-600 text-sm font-normal tracking-snug"
          >
            ISO 9001
          </NuxtLink>
          <a
            href="/#blog-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Blog
          </a>
          <a
            href="/#pricing-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Pricing
          </a>
          <a
            href="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </a>
        </nav>
        <NuxtLink
          to="/#contact-section"
          class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
        >
          Book a free demo
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
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
                ISO 9001:2015
              </span>
              <span class="text-sm text-gray-500">Quality Management System</span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6"
            >
              ISO 9001 support in 4ES Hub
            </h1>
            <p class="text-xl text-[#6e6e73] tracking-snug leading-relaxed">
              4ES Hub is built around the requirements of ISO 9001:2015. Clauses 4
              through 8 cover how your organization defines its QMS, leads the
              system, plans for risk and objectives, provides support, and runs
              day-to-day operations. Here is how our platform modules map to each
              clause—so you know exactly where compliance lives in the software.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto prose-content">
            <p>
              ISO 9001:2015 is structured around the Plan-Do-Check-Act cycle.
              Clauses 4–8 are the foundation: they define your context, leadership
              commitment, planning, resources, and operational controls. 4ES Hub
              does not replace your QMS—it gives you a connected system to manage
              evidence, workflows, and continual improvement across every clause.
            </p>

            <div
              v-for="clause in clauses"
              :key="clause.number"
              class="clause-block"
            >
              <h2>
                Clause {{ clause.number }} — {{ clause.title }}
              </h2>
              <p>{{ clause.summary }}</p>
              <h3>How 4ES Hub supports this</h3>
              <ul>
                <li v-for="item in clause.support" :key="item">
                  {{ item }}
                </li>
              </ul>
              <div class="module-tags">
                <span
                  v-for="mod in clause.modules"
                  :key="mod"
                  class="module-tag"
                >
                  {{ mod }}
                </span>
              </div>
            </div>

            <div class="cta-box">
              <h2>Ready to build an audit-ready QMS?</h2>
              <p>
                See how 4ES Hub connects documents, training, audits, risks,
                non-conformities, and management review in one platform.
              </p>
              <NuxtLink
                to="/#contact-section"
                class="btn-primary"
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
const pageUrl = `${siteUrl}/iso-9001`;

const clauses = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Define why your QMS exists: understand internal and external issues, interested parties and their requirements, the scope of your system, and the processes that make it work.",
    support: [
      "Define and maintain your QMS scope with version-controlled scope statements linked to organizational units and applicable standards.",
      "Map organizational units, roles, and process ownership so context and accountability are visible—not buried in spreadsheets.",
      "Capture and review risks and external/internal issues that affect your QMS context, with full history and audit trails.",
      "Centralize policies, context documents, and process maps in a controlled document library.",
    ],
    modules: ["Scopes", "Organization Units", "Risk", "Documents", "Dashboard"],
  },
  {
    number: "5",
    title: "Leadership",
    summary:
      "Top management must demonstrate commitment, establish a quality policy, and assign clear roles, responsibilities, and authorities throughout the organization.",
    support: [
      "Publish and control your quality policy and related leadership documents with approval workflows and version history.",
      "Assign roles and authorities through organizational unit structures and permission-based access.",
      "Provide evidence of leadership engagement through management review records, objectives, and action tracking.",
      "Maintain a complete audit trail of policy changes, approvals, and leadership decisions.",
    ],
    modules: [
      "Documents",
      "Organization Units",
      "Management Review",
      "Permissions",
      "History",
    ],
  },
  {
    number: "6",
    title: "Planning",
    summary:
      "Plan actions to address risks and opportunities, set quality objectives with measurable targets, and manage planned changes to the QMS.",
    support: [
      "Identify, assess, and treat risks and opportunities with structured risk registers and review cycles.",
      "Define quality objectives and track performance indicators with targets, trends, and ownership.",
      "Log opportunities for improvement and link them to objectives, audits, and management review inputs.",
      "Track issues and planned changes with tasks, deadlines, and evidence of completion.",
    ],
    modules: [
      "Risk",
      "Performance Indicators",
      "Opportunities for Improvement",
      "Issues",
      "User Tasks",
    ],
  },
  {
    number: "7",
    title: "Support",
    summary:
      "Provide the resources, competence, awareness, communication, and documented information needed for the QMS to function effectively.",
    support: [
      "Manage assets and resources with maintenance records and assignment to processes or units.",
      "Plan, deliver, and record training with competence matrices, expiry alerts, and linked job roles.",
      "Maintain a knowledge base for procedures, work instructions, and awareness materials.",
      "Control all documented information—create, review, approve, distribute, and retain records with full version control.",
      "Schedule events, send notifications, and keep teams informed of QMS updates and requirements.",
    ],
    modules: [
      "Assets",
      "Training",
      "Knowledge",
      "Documents",
      "Calendar",
      "Notifications",
      "Media",
    ],
  },
  {
    number: "8",
    title: "Operation",
    summary:
      "Plan and control operational processes, determine requirements for products and services, manage external providers, and control nonconforming outputs.",
    support: [
      "Document and control operational processes with linked work instructions and controlled forms.",
      "Capture customer requirements and feedback through structured surveys and satisfaction monitoring.",
      "Run internal audit programs with schedules, checklists, findings, and corrective action follow-up.",
      "Record and manage non-conformities with containment, root cause analysis, and corrective actions.",
      "Track operational tasks, issues, and reports with real-time dashboards and exportable evidence.",
    ],
    modules: [
      "Documents",
      "Survey",
      "Audit",
      "Non-conformities",
      "Issues",
      "User Tasks",
      "Reports",
      "Dashboard",
    ],
  },
];

useSeoMeta({
  title: "ISO 9001:2015 Clause Support | 4ES Hub",
  description:
    "See how 4ES Hub supports ISO 9001:2015 clauses 4 through 8 with connected modules for documents, training, audits, risk, non-conformities, and more.",
  ogTitle: "ISO 9001:2015 Support in 4ES Hub",
  ogDescription:
    "Map ISO 9001 clauses 4–8 to 4ES Hub modules—context, leadership, planning, support, and operations in one audit-ready platform.",
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
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
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose-content p {
  margin-bottom: 1.5rem;
}

.prose-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose-content li {
  margin-bottom: 0.5rem;
}

.clause-block {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.module-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #eef1fb;
  color: #253fa2;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.cta-box {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, #eef1fb, #ffffff);
  border: 1px solid #dce2f6;
  border-radius: 1rem;
  text-align: center;
}

.cta-box h2 {
  margin-top: 0;
}

.cta-box p {
  margin-bottom: 1.5rem;
}
</style>
