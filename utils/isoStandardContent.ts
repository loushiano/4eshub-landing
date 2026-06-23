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
      "Achieve ISO 9001 certification with support from our accredited certification partners. From gap analysis through Stage 1 and Stage 2 audits, we connect you with experts who guide your organization to a recognized quality certificate.",
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
      "Once certified, organizations use 4ES Hub to maintain their QMS—managing documents, training, internal audits, risks, non-conformities, and management review in one audit-ready platform.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 9001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Ready to get ISO 9001 certified?",
    ctaBody:
      "Talk to an accredited certification body today. We will match you with a partner who can assess your readiness, guide implementation, and conduct your certification audit.",
  },
  "14001": {
    slug: "14001",
    badge: "ISO 14001:2015",
    systemName: "Environmental Management System",
    shortName: "EMS",
    overviewIntro:
      "Achieve ISO 14001 certification with support from our accredited certification partners. From environmental gap analysis through Stage 1 and Stage 2 audits, we connect you with experts who guide your organization to a recognized environmental certificate.",
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
      "Once certified, organizations use 4ES Hub to maintain their EMS—managing aspects, compliance obligations, incidents, training, audits, and management review in one audit-ready platform.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 14001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Ready to get ISO 14001 certified?",
    ctaBody:
      "Talk to an accredited certification body today. We will match you with a partner who can assess your environmental readiness, guide implementation, and conduct your certification audit.",
  },
  "45001": {
    slug: "45001",
    badge: "ISO 45001:2018",
    systemName: "Occupational Health & Safety Management System",
    shortName: "OH&S MS",
    overviewIntro:
      "Achieve ISO 45001 certification with support from our accredited certification partners. From hazard assessment through Stage 1 and Stage 2 audits, we connect you with experts who guide your organization to a recognized health and safety certificate.",
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
      "Once certified, organizations use 4ES Hub to maintain their OH&S MS—managing hazards, safety training, incidents, audits, and management review in one audit-ready platform.",
    partnerSectionHeading: "Accredited certification partners",
    partnerSectionBody:
      "We work with vetted, accredited certification bodies and ISO 45001 consultants who guide organizations from initial assessment through certification. Leave your email and we will connect you with the right partner for your industry and location.",
    ctaHeading: "Ready to get ISO 45001 certified?",
    ctaBody:
      "Talk to an accredited certification body today. We will match you with a partner who can assess your safety readiness, guide implementation, and conduct your certification audit.",
  },
};

export function getStandardContent(standard: IsoStandardSlug): IsoStandardContent {
  return ISO_STANDARD_CONTENT[standard];
}

export function buildCityPageTitle(
  standard: IsoStandardSlug,
  cityName: string,
): string {
  return `ISO ${standard} Certification in ${cityName} | 4ES Hub`;
}

export function buildCityPageDescription(
  standard: IsoStandardSlug,
  cityName: string,
  systemName: string,
): string {
  return `Get ISO ${standard} certified in ${cityName}. Connect with accredited certification partners for gap analysis, implementation support, and certification audits for your ${systemName}.`;
}

export function buildCityH1(standard: IsoStandardSlug, cityName: string): string {
  return `ISO ${standard} certification in ${cityName}`;
}

export function buildCityHeroIntro(
  content: IsoStandardContent,
  cityName: string,
  cityIntro: string,
): string {
  return `${cityIntro} ${content.cityIntroSuffix}`;
}
