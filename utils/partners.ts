export type PartnerJobType =
  | "Certification Body"
  | "ISO Consultant"
  | "Training Provider";

export interface Partner {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  description: string;
  standards: string[];
  languages: string[];
  locations: string[];
  jobType: PartnerJobType;
  website?: string;
  linkedin?: string;
  email?: string;
  portfolio?: string;
}

export const partners: Partner[] = [
  {
    id: "smg",
    name: "SMG - Sustainable Management Group",
    slug: "smg-sustainable-management-group",
    image: "/smg_logo.jpeg",
    imageAlt: "SMG - Sustainable Management Group logo — ISO certification body partner",
    description:
      "Canadian Based Leading Provider of independent assessment services offering effective business and management solutions.",
    standards: [
      "Quality ISO 9001",
      "Environment ISO 14001",
      "Health and Safety ISO 45001",
      "Food Safety BRC",
      "FSSC",
      "ISO 22000",
      "ISO 22005",
      "HACCP",
      "IFS",
      "Global Gap",
      "Educational Organization ISO 21001",
      "Anti-Bribery ISO 37001",
      "Information Security ISO 27001",
      "Cloud Security ISO 27017",
      "ISO 27018",
      "Information Technology ISO 20000-1",
      "Business Continuity ISO 22301",
      "Cybersecurity",
      "NOC/SOC",
      "Disaster Recovery ISO 27031",
      "Privacy Information Management ISO 27701",
      "PIPEDA",
      "GDPR",
      "PCI DSS",
      "Security and Resilience ISO 22316",
      "Adventure Tourism ISO 21101",
      "Tourism ISO 13009",
      "ISO 13811",
      "Knowledge Management ISO 30401",
      "Security Management BS 16000",
      "Private Security Management ISO 18788",
      "Oil and Gas ISO 29001",
      "Social Responsibility ISO 26001",
      "Supply Chain ISO 28001",
      "GMP Cosmetics ISO 22716",
      "GSDP",
      "Risk Management ISO 31000",
      "Road Traffic Management ISO 39001",
      "Asset Management ISO 55001",
      "Energy Management ISO 50001",
      "Facility Management ISO 41001",
      "Ships and Marine ISO/PAS 20858",
      "Medical Devices ISO 13485",
    ],
    languages: ["English", "Arabic", "French"],
    locations: ["Middle East", "North America"],
    jobType: "Certification Body",
    website: "http://www.smg-aw.com",
  },
  {
    id: "ajmrakotomanjaka",
    name: "Andry Jean Marc Rakotomanjaka",
    slug: "andry-jean-marc-rakotomanjaka",
    image: "/andry.png",
    imageAlt:
      "Andry Jean Marc Rakotomanjaka — ISO consultant and quality & compliance specialist",
    description:
      "Quality & Compliance Specialist specializing in ISO 9001, 14001, and 45001 systems, audit readiness, documentation, and process improvement. Principal Consultant and Trainer at Sustainable Management Systems Consulting (SMSC).",
    standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
    languages: ["English", "French"],
    locations: ["Canada", "Madagascar"],
    jobType: "ISO Consultant",
    linkedin: "https://www.linkedin.com/in/ajmrakotomanjaka",
    portfolio: "https://www.credly.com",
    email: "ajmrakotomanjaka@gmail.com",
  },
];

export const getPartnerJobTypeClass = (jobType: PartnerJobType): string => {
  switch (jobType) {
    case "Certification Body":
      return "bg-primary-50 text-primary-700 border-primary-200";
    case "ISO Consultant":
      return "bg-primary-50 text-primary-700 border-primary-200";
    case "Training Provider":
      return "bg-purple-50 text-purple-700 border-purple-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};
