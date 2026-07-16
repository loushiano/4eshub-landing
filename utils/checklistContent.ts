export type ChecklistStandardSlug = "9001" | "14001" | "45001";

export type ChecklistPageContent = {
  slug: ChecklistStandardSlug;
  path: string;
  systemName: string;
  shortLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  seekingQuestion: string;
  alreadyCertifiedLabel: string;
  manageQuestion: string;
  certBodyMessage: string;
  implementationMessage: string;
  goodLuckMessage: string;
  emailPrompt: string;
};

export const CHECKLIST_PAGES: Record<
  ChecklistStandardSlug,
  ChecklistPageContent
> = {
  "9001": {
    slug: "9001",
    path: "/are-you-ready-for-iso-9001-certification",
    systemName: "Quality Management System (QMS)",
    shortLabel: "ISO 9001",
    title: "Are You Ready for QMS Certification?",
    metaTitle:
      "Are You Ready for ISO 9001 / QMS Certification? | 4ES Hub",
    metaDescription:
      "Are you ready for ISO 9001 QMS certification? Answer a few questions to see if you need a certification body, implementation help, or support managing your quality management system.",
    h1: "Are You Ready for QMS Certification?",
    seekingQuestion: "Are you looking to get ISO 9001 certified?",
    alreadyCertifiedLabel: "No, I am already ISO 9001 certified",
    manageQuestion:
      "Do you find it difficult to manage your ISO 9001 Quality Management System?",
    certBodyMessage:
      "We will get you in contact with a certification body to help you with an external ISO 9001 audit.",
    implementationMessage:
      "We will get you in touch with someone to help you implement ISO 9001 and prepare your QMS for certification.",
    goodLuckMessage:
      "Glad your ISO 9001 system is under control. Good luck with ongoing quality compliance — we are here if you ever need support.",
    emailPrompt:
      "Enter your email and we will get to you soon.",
  },
  "14001": {
    slug: "14001",
    path: "/are-you-ready-for-iso-14001-certification",
    systemName: "Environmental Management System (EMS)",
    shortLabel: "ISO 14001",
    title: "Are You Ready for EMS Certification?",
    metaTitle:
      "Are You Ready for ISO 14001 / EMS Certification? | 4ES Hub",
    metaDescription:
      "Are you ready for ISO 14001 EMS certification? Answer a few questions to see if you need a certification body, implementation help, or support managing your environmental management system.",
    h1: "Are You Ready for EMS Certification?",
    seekingQuestion: "Are you looking to get ISO 14001 certified?",
    alreadyCertifiedLabel: "No, I am already ISO 14001 certified",
    manageQuestion:
      "Do you find it difficult to manage your ISO 14001 Environmental Management System?",
    certBodyMessage:
      "We will get you in contact with a certification body to help you with an external ISO 14001 audit.",
    implementationMessage:
      "We will get you in touch with someone to help you implement ISO 14001 and prepare your EMS for certification.",
    goodLuckMessage:
      "Glad your ISO 14001 system is running well. Good luck with ongoing environmental compliance — reach out anytime if you need support.",
    emailPrompt:
      "Enter your email and we will get to you soon.",
  },
  "45001": {
    slug: "45001",
    path: "/are-you-ready-for-iso-45001-certification",
    systemName: "Occupational Health & Safety Management System (OHSMS)",
    shortLabel: "ISO 45001",
    title: "Are You Ready for OH&S Certification?",
    metaTitle:
      "Are You Ready for ISO 45001 / OH&S Certification? | 4ES Hub",
    metaDescription:
      "Are you ready for ISO 45001 OH&S certification? Answer a few questions to see if you need a certification body, implementation help, or support managing your health and safety system.",
    h1: "Are You Ready for OH&S Certification?",
    seekingQuestion: "Are you looking to get ISO 45001 certified?",
    alreadyCertifiedLabel: "No, I am already ISO 45001 certified",
    manageQuestion:
      "Do you find it difficult to manage your ISO 45001 occupational health and safety system?",
    certBodyMessage:
      "We will get you in contact with a certification body to help you with an external ISO 45001 audit.",
    implementationMessage:
      "We will get you in touch with someone to help you implement ISO 45001 and prepare your OH&S system for certification.",
    goodLuckMessage:
      "Glad your ISO 45001 system is in good shape. Good luck with ongoing health and safety compliance — we are here if you need us.",
    emailPrompt:
      "Enter your email and we will get to you soon.",
  },
};

export function getChecklistContent(
  slug: ChecklistStandardSlug,
): ChecklistPageContent {
  return CHECKLIST_PAGES[slug];
}

export const CHECKLIST_HUB = {
  path: "/are-you-ready-for-iso-certification",
  metaTitle:
    "Are You Ready for ISO Certification? | 9001, 14001 & 45001 | 4ES Hub",
  metaDescription:
    "Are you ready for ISO 9001, ISO 14001, or ISO 45001 certification? Answer a few questions to get matched with a certification body, implementation support, or ongoing compliance help.",
  h1: "Are You Ready for ISO Certification?",
  intro:
    "Choose your standard and answer a few questions. We will help you find the right next step — certification audit, implementation support, or help managing an existing certificate.",
};
