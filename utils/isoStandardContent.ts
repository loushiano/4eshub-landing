import type { IsoStandardSlug } from "./isoCities";

export type CertificationStep = {
  step: string;
  title: string;
  description: string;
  details: string[];
};

export type AuditArea = {
  number: string;
  title: string;
  summary: string;
};

export type CostFactor = {
  title: string;
  description: string;
};

export type EffortItem = {
  title: string;
  description: string;
};

export type NextStep = {
  step: string;
  title: string;
  description: string;
};

export type IsoStandardContent = {
  slug: IsoStandardSlug;
  badge: string;
  systemName: string;
  shortName: string;
  overviewIntro: string;
  cityIntroSuffix: string;
  certificationIntro: string;
  certificationSteps: CertificationStep[];
  auditAreasHeading: string;
  auditAreasIntro: string;
  auditAreas: AuditArea[];
  platformNote: string;
  partnerSectionHeading: string;
  partnerSectionBody: string;
  ctaHeading: string;
  ctaBody: string;
  costHeading: string;
  costIntro: string;
  costRangeLabel: string;
  costRangeBody: string;
  costFactors: CostFactor[];
  effortHeading: string;
  effortIntro: string;
  effortItems: EffortItem[];
  nextStepsHeading: string;
  nextStepsIntro: string;
  nextSteps: NextStep[];
};

const iso9001Steps: CertificationStep[] = [
  {
    step: "1",
    title: "Free consultation",
    description:
      "Tell us about your organization, current quality practices, and certification goals. We match you with an accredited certification body that understands your industry.",
    details: [
      "No-obligation scoping call to define your QMS boundaries",
      "Timeline and cost estimate for your certification journey",
      "Introduction to a vetted ISO 9001 certification partner",
    ],
  },
  {
    step: "2",
    title: "Gap analysis & implementation",
    description:
      "Your certification partner assesses your current state against ISO 9001:2015 and guides you through building or strengthening your Quality Management System.",
    details: [
      "Structured gap analysis against clauses 4 through 10",
      "Implementation roadmap with clear milestones and ownership",
      "Document templates, process guidance, and expert support",
    ],
  },
  {
    step: "3",
    title: "Internal audit & readiness review",
    description:
      "Before the official certification audit, your partner runs an internal audit to confirm your QMS is functioning and evidence is in place.",
    details: [
      "Mock audit against the same criteria certification auditors use",
      "Corrective actions closed before Stage 1",
      "Management review and leadership evidence verified",
    ],
  },
  {
    step: "4",
    title: "Certification audit (Stage 1 & Stage 2)",
    description:
      "An accredited certification body conducts the official audit. Stage 1 reviews your documentation; Stage 2 verifies your QMS is implemented and effective.",
    details: [
      "Stage 1: documentation and readiness review",
      "Stage 2: on-site audit of processes, records, and effectiveness",
      "Non-conformities addressed with partner support",
    ],
  },
  {
    step: "5",
    title: "Certification & ongoing compliance",
    description:
      "Receive your ISO 9001 certificate and maintain compliance with surveillance audits. Certified clients use 4ES Hub to manage documents, training, audits, and continual improvement day to day.",
    details: [
      "Certificate issued by an accredited certification body",
      "Surveillance audit schedule planned in advance",
      "4ES Hub platform for ongoing QMS management and audit readiness",
    ],
  },
];

const iso9001AuditAreas: AuditArea[] = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Auditors verify that you understand internal and external issues, interested parties, QMS scope, and the processes that make your system work.",
  },
  {
    number: "5",
    title: "Leadership",
    summary:
      "Top management must demonstrate commitment through a quality policy, assigned roles, and evidence of engagement with the QMS.",
  },
  {
    number: "6",
    title: "Planning",
    summary:
      "Your certification body will assess how you address risks and opportunities, set quality objectives, and manage planned changes.",
  },
  {
    number: "7",
    title: "Support",
    summary:
      "Auditors check that resources, competence, awareness, communication, and documented information are in place and controlled.",
  },
  {
    number: "8",
    title: "Operation",
    summary:
      "Operational planning, customer requirements, supplier control, and nonconforming output management are reviewed during the audit.",
  },
];

const iso14001Steps: CertificationStep[] = [
  {
    step: "1",
    title: "Free consultation",
    description:
      "Share your environmental goals, sites, and regulatory context. We connect you with an accredited certification body experienced in ISO 14001.",
    details: [
      "Scoping call to define EMS boundaries and significant aspects",
      "Timeline and cost estimate for environmental certification",
      "Introduction to a vetted ISO 14001 certification partner",
    ],
  },
  {
    step: "2",
    title: "Gap analysis & implementation",
    description:
      "Your partner evaluates your environmental practices against ISO 14001:2015 and guides implementation of your Environmental Management System.",
    details: [
      "Aspect and impact assessment with significance ratings",
      "Compliance obligation register and control measures",
      "Implementation roadmap with environmental objectives",
    ],
  },
  {
    step: "3",
    title: "Internal audit & readiness review",
    description:
      "An internal environmental audit confirms your EMS is operational and evidence is ready before the certification audit.",
    details: [
      "Mock audit covering significant aspects and legal compliance",
      "Emergency preparedness and response plans verified",
      "Corrective actions closed before Stage 1",
    ],
  },
  {
    step: "4",
    title: "Certification audit (Stage 1 & Stage 2)",
    description:
      "An accredited body audits your EMS. Stage 1 reviews documentation; Stage 2 verifies environmental controls are implemented and effective.",
    details: [
      "Stage 1: EMS documentation and readiness review",
      "Stage 2: on-site verification of aspects, controls, and records",
      "Non-conformities addressed with partner support",
    ],
  },
  {
    step: "5",
    title: "Certification & ongoing compliance",
    description:
      "Receive your ISO 14001 certificate and plan surveillance audits. Certified clients use 4ES Hub to manage aspects, compliance, incidents, and environmental records.",
    details: [
      "Certificate issued by an accredited certification body",
      "Surveillance audit schedule planned in advance",
      "4ES Hub platform for ongoing EMS management and audit readiness",
    ],
  },
];

const iso14001AuditAreas: AuditArea[] = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Auditors verify understanding of environmental issues, interested parties, EMS scope, and processes for environmental management.",
  },
  {
    number: "5",
    title: "Leadership",
    summary:
      "Top management must demonstrate environmental commitment through policy, roles, and evidence of engagement with the EMS.",
  },
  {
    number: "6",
    title: "Planning",
    summary:
      "Environmental aspects, compliance obligations, risks, opportunities, and objectives are assessed during certification.",
  },
  {
    number: "7",
    title: "Support",
    summary:
      "Resources, competence, awareness, communication, and documented information for the EMS are reviewed by auditors.",
  },
  {
    number: "8",
    title: "Operation",
    summary:
      "Operational controls for significant aspects, change management, emergency preparedness, and contractor oversight are verified.",
  },
];

const iso45001Steps: CertificationStep[] = [
  {
    step: "1",
    title: "Free consultation",
    description:
      "Tell us about your workplace, hazards, and safety goals. We match you with an accredited certification body experienced in ISO 45001.",
    details: [
      "Scoping call to define OH&S boundaries and work activities",
      "Timeline and cost estimate for health and safety certification",
      "Introduction to a vetted ISO 45001 certification partner",
    ],
  },
  {
    step: "2",
    title: "Gap analysis & implementation",
    description:
      "Your partner assesses your OH&S practices against ISO 45001:2018 and guides implementation of your health and safety management system.",
    details: [
      "Hazard identification and risk assessment with control hierarchy",
      "Legal and regulatory requirement register",
      "Implementation roadmap with OH&S objectives and worker participation",
    ],
  },
  {
    step: "3",
    title: "Internal audit & readiness review",
    description:
      "An internal OH&S audit confirms your system is functioning and evidence is ready before the certification audit.",
    details: [
      "Mock audit covering hazards, controls, and worker consultation",
      "Emergency preparedness plans and drill records verified",
      "Corrective actions closed before Stage 1",
    ],
  },
  {
    step: "4",
    title: "Certification audit (Stage 1 & Stage 2)",
    description:
      "An accredited body audits your OH&S MS. Stage 1 reviews documentation; Stage 2 verifies safety controls are implemented and effective.",
    details: [
      "Stage 1: OH&S documentation and readiness review",
      "Stage 2: on-site verification of hazards, controls, and records",
      "Non-conformities addressed with partner support",
    ],
  },
  {
    step: "5",
    title: "Certification & ongoing compliance",
    description:
      "Receive your ISO 45001 certificate and plan surveillance audits. Certified clients use 4ES Hub to manage hazards, training, incidents, and safety records.",
    details: [
      "Certificate issued by an accredited certification body",
      "Surveillance audit schedule planned in advance",
      "4ES Hub platform for ongoing OH&S management and audit readiness",
    ],
  },
];

const iso45001AuditAreas: AuditArea[] = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Auditors verify understanding of OH&S issues, workers and interested parties, system scope, and workplace processes.",
  },
  {
    number: "5",
    title: "Leadership and worker participation",
    summary:
      "Top management commitment, OH&S policy, roles, and evidence of worker consultation and participation are assessed.",
  },
  {
    number: "6",
    title: "Planning",
    summary:
      "Hazard identification, risk assessment, legal requirements, and OH&S objectives are reviewed during certification.",
  },
  {
    number: "7",
    title: "Support",
    summary:
      "Resources, competence, awareness, communication, and documented information for the OH&S MS are verified by auditors.",
  },
  {
    number: "8",
    title: "Operation",
    summary:
      "Operational controls, change management, contractor safety, incident investigation, and emergency preparedness are audited on site.",
  },
];

export const ISO_STANDARD_CONTENT: Record<IsoStandardSlug, IsoStandardContent> = {
  "9001": {
    slug: "9001",
    badge: "ISO 9001:2015",
    systemName: "Quality Management System",
    shortName: "QMS",
    overviewIntro:
      "Want ISO 9001 certification? Here is what it costs, what it takes, and exactly what to do next—starting with a short readiness check.",
    cityIntroSuffix:
      "Our certification partners work with organizations across North America to achieve ISO 9001 certification—handling gap analysis, implementation support, internal audits, and the official certification audit.",
    certificationIntro:
      "ISO 9001 is the world's most recognized quality management standard. Certification demonstrates that your organization consistently meets customer requirements and drives continual improvement. Our partner certification bodies guide you through every step—from your first consultation to holding a valid certificate.",
    certificationSteps: iso9001Steps,
    auditAreasHeading: "What certification auditors assess",
    auditAreasIntro:
      "During your certification audit, auditors evaluate how your QMS addresses the core requirements of ISO 9001. Your certification partner prepares you for each of these areas:",
    auditAreas: iso9001AuditAreas,
    platformNote:
      "After certification, many teams use 4ES Hub to keep the QMS audit-ready—documents, training, internal audits, and non-conformities in one place.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 9001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Start with readiness—then we connect you",
    ctaBody:
      "Take the free questionnaire. If you are audit-ready, we introduce a certification body. If not, we introduce a consultant to help you implement, then get you to the certification body.",
    costHeading: "How much does ISO 9001 certification cost?",
    costIntro:
      "There is no single price—cost depends on company size, sites, and whether you need help building the QMS first. Most budgets have two parts: implementation (if needed) and the certification body audit.",
    costRangeLabel: "Typical ranges (North America, SMB)",
    costRangeBody:
      "Certification body audits often land in the low-to-mid thousands for a small single-site organization and scale up with headcount and locations. Consultant-led implementation, if you need it, is usually a separate line item and can exceed the audit fee when you are starting from scratch.",
    costFactors: [
      {
        title: "Organization size & sites",
        description:
          "More employees and locations mean more audit days—and a higher certification body fee.",
      },
      {
        title: "How ready you already are",
        description:
          "If processes and records exist, you may go straight to audit. If not, budget for implementation support first.",
      },
      {
        title: "Scope of the QMS",
        description:
          "A focused scope (one product line or site) usually costs less than certifying the whole enterprise at once.",
      },
    ],
    effortHeading: "What it takes to get certified",
    effortIntro:
      "ISO 9001 certification is a project, not a paperwork form. Plan for leadership time, process owners, and evidence—not just a binder of procedures.",
    effortItems: [
      {
        title: "A working Quality Management System",
        description:
          "Documented processes, controlled records, competence, and proof that you follow what you say you do.",
      },
      {
        title: "Internal audit & management review",
        description:
          "You need evidence the system runs—internal audits completed and leadership reviewing performance before Stage 2.",
      },
      {
        title: "Stage 1 & Stage 2 certification audits",
        description:
          "An independent certification body reviews documentation (Stage 1), then verifies implementation on site (Stage 2).",
      },
      {
        title: "Typical timeline",
        description:
          "Ready organizations can move quickly; teams starting from zero often need a few months of implementation before the audit.",
      },
    ],
    nextStepsHeading: "Your next steps",
    nextStepsIntro: "Skip the long articles. Follow this path to certification:",
    nextSteps: [
      {
        step: "1",
        title: "Check if you are ready for an audit",
        description:
          "Take our short ISO 9001 readiness questionnaire. It tells you whether you are closer to an external audit or still need implementation help.",
      },
      {
        step: "2",
        title: "If you are ready → certification body",
        description:
          "We introduce you to an accredited third-party certification body to plan and run your certification audit.",
      },
      {
        step: "3",
        title: "If you are not ready → consultant, then the body",
        description:
          "We connect you with a consultant to help implement your QMS. When you are ready, we introduce the certification body for the official audit.",
      },
    ],
  },
  "14001": {
    slug: "14001",
    badge: "ISO 14001:2015",
    systemName: "Environmental Management System",
    shortName: "EMS",
    overviewIntro:
      "Want ISO 14001 certification? Here is what it costs, what it takes, and exactly what to do next—starting with a short readiness check.",
    cityIntroSuffix:
      "Our certification partners work with organizations across North America to achieve ISO 14001 certification—handling aspect assessment, implementation support, internal audits, and the official certification audit.",
    certificationIntro:
      "ISO 14001 is the leading environmental management standard. Certification demonstrates that your organization manages environmental aspects, meets compliance obligations, and commits to continual environmental improvement. Our partner certification bodies guide you through every step of the journey.",
    certificationSteps: iso14001Steps,
    auditAreasHeading: "What certification auditors assess",
    auditAreasIntro:
      "During your certification audit, auditors evaluate how your EMS addresses the core requirements of ISO 14001. Your certification partner prepares you for each of these areas:",
    auditAreas: iso14001AuditAreas,
    platformNote:
      "After certification, many teams use 4ES Hub to keep the EMS audit-ready—aspects, compliance obligations, incidents, and audits in one place.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 14001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Start with readiness—then we connect you",
    ctaBody:
      "Take the free questionnaire. If you are audit-ready, we introduce a certification body. If not, we introduce a consultant to help you implement, then get you to the certification body.",
    costHeading: "How much does ISO 14001 certification cost?",
    costIntro:
      "EMS certification cost depends on sites, environmental complexity, and whether you need help building the system first. Budget separately for implementation (if needed) and the certification body audit.",
    costRangeLabel: "Typical ranges (North America, SMB)",
    costRangeBody:
      "Certification body audits for a small single-site EMS often start in the low-to-mid thousands and rise with sites, shift patterns, and environmental significance. Consultant support for aspects, legal registers, and controls is a separate cost if you are not audit-ready yet.",
    costFactors: [
      {
        title: "Sites & environmental complexity",
        description:
          "Manufacturing, waste streams, and multi-site operations usually require more audit time than a simple office scope.",
      },
      {
        title: "Compliance obligations",
        description:
          "If legal and other requirements are unclear, expect implementation work before a certification body can audit effectively.",
      },
      {
        title: "Readiness vs. starting from zero",
        description:
          "An existing EMS with records can go toward audit faster—and often at lower total cost—than building one from scratch.",
      },
    ],
    effortHeading: "What it takes to get certified",
    effortIntro:
      "ISO 14001 is about running an Environmental Management System—not only writing an environmental policy.",
    effortItems: [
      {
        title: "Aspects, impacts & compliance",
        description:
          "You need significant environmental aspects identified, compliance obligations tracked, and controls that actually work.",
      },
      {
        title: "Objectives, training & emergency readiness",
        description:
          "Auditors look for environmental objectives, competent people, and emergency preparedness with evidence.",
      },
      {
        title: "Internal audit & management review",
        description:
          "Prove the EMS is monitored and leadership is engaged before Stage 1 and Stage 2.",
      },
      {
        title: "Typical timeline",
        description:
          "Audit-ready teams move faster; organizations building an EMS often need several months before certification.",
      },
    ],
    nextStepsHeading: "Your next steps",
    nextStepsIntro: "A clear path to ISO 14001 certification:",
    nextSteps: [
      {
        step: "1",
        title: "Check if you are ready for an audit",
        description:
          "Take our short ISO 14001 readiness questionnaire to see if you should talk to a certification body now—or get implementation help first.",
      },
      {
        step: "2",
        title: "If you are ready → certification body",
        description:
          "We introduce you to an accredited third-party certification body for your EMS certification audit.",
      },
      {
        step: "3",
        title: "If you are not ready → consultant, then the body",
        description:
          "We connect you with a consultant to help implement your EMS, then introduce the certification body when you are ready to certify.",
      },
    ],
  },
  "45001": {
    slug: "45001",
    badge: "ISO 45001:2018",
    systemName: "Occupational Health & Safety Management System",
    shortName: "OH&S",
    overviewIntro:
      "Want ISO 45001 certification? Here is what it costs, what it takes, and exactly what to do next—starting with a short readiness check.",
    cityIntroSuffix:
      "Our certification partners work with organizations across North America to achieve ISO 45001 certification—handling hazard identification, implementation support, internal audits, and the official certification audit.",
    certificationIntro:
      "ISO 45001 is the international standard for occupational health and safety management. Certification demonstrates that your organization proactively manages workplace hazards, protects workers, and drives continual safety improvement. Our partner certification bodies guide you through every step.",
    certificationSteps: iso45001Steps,
    auditAreasHeading: "What certification auditors assess",
    auditAreasIntro:
      "During your certification audit, auditors evaluate how your OH&S management system addresses the core requirements of ISO 45001. Your certification partner prepares you for each of these areas:",
    auditAreas: iso45001AuditAreas,
    platformNote:
      "After certification, many teams use 4ES Hub to keep OH&S audit-ready—hazards, training, incidents, and audits in one place.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 45001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Start with readiness—then we connect you",
    ctaBody:
      "Take the free questionnaire. If you are audit-ready, we introduce a certification body. If not, we introduce a consultant to help you implement, then get you to the certification body.",
    costHeading: "How much does ISO 45001 certification cost?",
    costIntro:
      "OH&S certification cost depends on workforce size, hazard profile, and whether you need help implementing the system. Plan for implementation support (if needed) plus the certification body audit.",
    costRangeLabel: "Typical ranges (North America, SMB)",
    costRangeBody:
      "Certification body audits for a small single-site OH&S system often start in the low-to-mid thousands and increase with headcount, shift work, and higher-risk activities. Consultant support for hazards, legal requirements, and worker participation is separate if you are not ready for audit.",
    costFactors: [
      {
        title: "Workforce & risk profile",
        description:
          "Higher-hazard operations and larger workforces typically need more audit days than low-risk office environments.",
      },
      {
        title: "Existing safety practices",
        description:
          "Strong hazard controls and records can reduce implementation spend; starting from informal practices usually costs more.",
      },
      {
        title: "Sites & contractors",
        description:
          "Multi-site scopes and contractor-heavy work can expand both implementation effort and certification audit duration.",
      },
    ],
    effortHeading: "What it takes to get certified",
    effortIntro:
      "ISO 45001 certification means your health and safety management system is implemented and evidenced—not just a safety manual on a shelf.",
    effortItems: [
      {
        title: "Hazards, risks & worker participation",
        description:
          "Hazard identification, risk assessment, controls, and genuine worker consultation are core to the audit.",
      },
      {
        title: "Legal requirements & competence",
        description:
          "You need OH&S legal requirements tracked and people trained for the risks in their roles.",
      },
      {
        title: "Internal audit & management review",
        description:
          "Show the system is checked and leadership is accountable before Stage 1 and Stage 2.",
      },
      {
        title: "Typical timeline",
        description:
          "Audit-ready organizations can move quickly; teams building an OH&S MS often need several months of implementation first.",
      },
    ],
    nextStepsHeading: "Your next steps",
    nextStepsIntro: "A clear path to ISO 45001 certification:",
    nextSteps: [
      {
        step: "1",
        title: "Check if you are ready for an audit",
        description:
          "Take our short ISO 45001 readiness questionnaire to see if you should talk to a certification body now—or get implementation help first.",
      },
      {
        step: "2",
        title: "If you are ready → certification body",
        description:
          "We introduce you to an accredited third-party certification body for your OH&S certification audit.",
      },
      {
        step: "3",
        title: "If you are not ready → consultant, then the body",
        description:
          "We connect you with a consultant to help implement your OH&S system, then introduce the certification body when you are ready to certify.",
      },
    ],
  },
};

export function getStandardContent(standard: IsoStandardSlug): IsoStandardContent {
  return ISO_STANDARD_CONTENT[standard];
}

export function buildCityPageTitle(
  standard: IsoStandardSlug,
  cityName: string,
): string {
  return `ISO ${standard} Certification in ${cityName} — Cost, Timeline & Next Steps | 4ES Hub`;
}

export function buildCityPageDescription(
  standard: IsoStandardSlug,
  cityName: string,
  systemName: string,
): string {
  return `ISO ${standard} certification in ${cityName}: see cost drivers, what it takes, and next steps for your ${systemName}. Check readiness, then connect with a consultant or certification body.`;
}

export function buildCityH1(standard: IsoStandardSlug, cityName: string): string {
  return `ISO ${standard} certification in ${cityName}`;
}

export function buildCityHeroIntro(
  content: IsoStandardContent,
  cityName: string,
  cityIntro: string,
): string {
  return `${cityIntro} Here is what ISO ${content.slug} certification costs, what it takes for ${cityName} organizations, and your next steps—starting with a short readiness check.`;
}
