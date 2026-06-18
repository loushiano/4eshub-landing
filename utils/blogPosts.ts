export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "iso-9001-certification-from-zero-to-certified",
    title:
      "From zero to ISO 9001 certification: expert guidance, a working QMS, and 4ES Hub in one path",
    excerpt:
      "Starting ISO 9001 from scratch can feel overwhelming. Learn how 4ES Hub helps connect organizations with certification and consulting partners while implementing the QMS directly in software, from gap assessment to audit-ready evidence.",
    category: "ISO 9001 Certification",
    readTime: "8 min read",
    published: "2026-06-17",
  },
  {
    slug: "enterprise-risk-management-software",
    title:
      "Why enterprise risk management software matters—and how 4ES Hub turns ISO risk requirements into everyday practice",
    excerpt:
      "Spreadsheets cannot keep up with modern risk landscapes. Learn why ERM software is essential for ISO 9001, 14001, and 45001 teams, what to look for in a platform, and how 4ES Hub connects risk assessments, RPN scoring, and operational controls to your QMS.",
    category: "Risk Management",
    readTime: "12 min read",
    published: "2026-06-17",
  },
  {
    slug: "single-platform-quality-management",
    title:
      "One platform for quality: how managing every ISO standard in one place saves thousands of hours a year",
    excerpt:
      "Scattered spreadsheets and tools cost the average quality team ~3,200 hours a year. Learn why a single source of truth across ISO 9001, 14001, 45001 and 27001 cuts admin time 30–50%, and how 4ES Hub unifies every standard in one audit-ready platform.",
    category: "Unified QMS & efficiency",
    readTime: "12 min read",
    published: "2026-05-29",
  },
  {
    slug: "customer-feedback-quality-management",
    title:
      "Customer feedback in quality management: Voice of the Customer, ISO 9.1.2, and structured surveys in 4ES Hub",
    excerpt:
      "ISO 9001 expects you to monitor customer perceptions—not just collect NPS scores. Learn how VoC governance, review cadence, and closed-loop action fit a QMS, and how the 4ES Hub Survey module turns feedback into audit-ready evidence.",
    category: "Customer feedback & VoC",
    readTime: "11 min read",
    published: "2026-05-26",
  },
  {
    slug: "importance-of-iso-training",
    title:
      "Why ISO training matters for compliance—and how 4ES Hub makes competence part of everyday operations",
    excerpt:
      "ISO training turns standards into behavior. Learn why competence programs reduce audit risk, what types of training organizations need, and how 4ES Hub connects training to documents, audits, and corrective actions.",
    category: "Training & competence",
    readTime: "11 min read",
    published: "2026-05-20",
  },
  {
    slug: "mastering-non-conformity-iso-9001",
    title:
      "Mastering non-conformity: how 4ES Hub empowers your ISO 9001:2015 journey",
    excerpt:
      "ISO 9001:2015 expects containment, root cause analysis, and documented corrective action—not quick fixes. Learn how a structured non-conformity workflow drives continual improvement and how 4ES Hub keeps evidence audit-ready.",
    category: "Non-conformities & corrective action",
    readTime: "8 min read",
    published: "2026-05-15",
  },
  {
    slug: "training-records-qms",
    title:
      "Why training records are the backbone of competence—and audit-ready QMS operations",
    excerpt:
      "ISO frameworks expect competence and proof. Without governed training records, audits get painful and operational risk rises. Here is how to structure enterprise-grade competence management and how 4ES Hub connects training to documents and oversight.",
    category: "Training & competence",
    readTime: "12 min read",
    published: "2026-05-10",
  },
  {
    slug: "documentation-audit-readiness",
    title:
      "Why managing organizational documentation gets so painful before an audit",
    excerpt:
      "Policies live in shared drives, evidence hides in email threads, and every audit request becomes a scramble. Here is why documentation feels so annoying to manage, and how to turn it into a system that is ready before auditors arrive.",
    category: "Document Control",
    readTime: "6 min read",
    published: "2026-05-05",
  },
  {
    slug: "iso-audit-tracking-value",
    title:
      "Why tracking audits in one platform matters for ISO-certified teams",
    excerpt:
      "Certification is a milestone; the audit trail is the job. Here is how a structured audit program reduces surveillance stress, helps first-time certification, and how 4ES Hub connects programs, scheduling, findings, and reporting.",
    category: "Audit Management",
    readTime: "10 min read",
    published: "2026-04-28",
  },
];

export function getRecentBlogPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, limit);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
