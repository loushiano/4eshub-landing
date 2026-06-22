export type IsoCity = {
  slug: string;
  name: string;
  country: "Canada" | "United States";
  region: string;
  intro: string;
};

export const ISO_CITIES: IsoCity[] = [
  {
    slug: "ottawa",
    name: "Ottawa",
    country: "Canada",
    region: "Ontario",
    intro:
      "Ottawa's public sector, technology, and professional services firms often pursue ISO certification to meet federal procurement requirements and demonstrate operational maturity to international partners.",
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    region: "Ontario",
    intro:
      "As Canada's largest business hub, Toronto organizations across finance, manufacturing, and logistics use ISO standards to compete globally and satisfy customer audit requirements.",
  },
  {
    slug: "montreal",
    name: "Montreal",
    country: "Canada",
    region: "Quebec",
    intro:
      "Montreal's aerospace, pharmaceutical, and creative industries rely on structured management systems to meet bilingual compliance expectations and multinational supply chain standards.",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    region: "British Columbia",
    intro:
      "Vancouver companies in technology, natural resources, and trade benefit from ISO certification to align with sustainability goals and Pacific Rim customer requirements.",
  },
  {
    slug: "calgary",
    name: "Calgary",
    country: "Canada",
    region: "Alberta",
    intro:
      "Calgary's energy, construction, and engineering sectors use ISO standards to manage operational risk, environmental obligations, and safety across complex projects.",
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    country: "Canada",
    region: "Alberta",
    intro:
      "Edmonton organizations in oil and gas, healthcare, and municipal services implement ISO management systems to strengthen governance and audit readiness.",
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    country: "Canada",
    region: "Manitoba",
    intro:
      "Winnipeg's transportation, agriculture, and manufacturing firms pursue ISO certification to improve process consistency and meet buyer quality requirements.",
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    country: "Canada",
    region: "Quebec",
    intro:
      "Quebec City organizations in government, research, and tourism use ISO standards to formalize processes and demonstrate commitment to quality and safety.",
  },
  {
    slug: "halifax",
    name: "Halifax",
    country: "Canada",
    region: "Nova Scotia",
    intro:
      "Halifax's maritime, defence, and life sciences sectors benefit from ISO certification to meet international standards and strengthen Atlantic Canada supply chains.",
  },
  {
    slug: "victoria",
    name: "Victoria",
    country: "Canada",
    region: "British Columbia",
    intro:
      "Victoria organizations in public administration, technology, and tourism implement ISO management systems to improve service delivery and regulatory compliance.",
  },
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    region: "New York",
    intro:
      "New York's financial services, media, and professional firms use ISO standards to satisfy enterprise customer audits and strengthen operational governance.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    country: "United States",
    region: "California",
    intro:
      "Los Angeles organizations in entertainment, aerospace, and international trade pursue ISO certification to meet contract requirements and global quality expectations.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    country: "United States",
    region: "Illinois",
    intro:
      "Chicago's manufacturing, logistics, and food processing industries rely on ISO standards to control quality, safety, and environmental performance at scale.",
  },
  {
    slug: "houston",
    name: "Houston",
    country: "United States",
    region: "Texas",
    intro:
      "Houston's energy, petrochemical, and engineering companies implement ISO management systems to manage operational risk and meet stringent customer audits.",
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    country: "United States",
    region: "Arizona",
    intro:
      "Phoenix organizations in semiconductor, aerospace, and healthcare use ISO certification to standardize processes and support rapid business growth.",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    country: "United States",
    region: "Pennsylvania",
    intro:
      "Philadelphia's pharmaceutical, biotech, and manufacturing sectors depend on ISO standards for regulatory alignment and supplier qualification.",
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    country: "United States",
    region: "Texas",
    intro:
      "San Antonio organizations in defence, healthcare, and logistics pursue ISO certification to meet federal contract requirements and improve operational control.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    country: "United States",
    region: "California",
    intro:
      "San Diego's defence, biotechnology, and maritime industries use ISO management systems to demonstrate quality and safety across complex operations.",
  },
  {
    slug: "dallas",
    name: "Dallas",
    country: "United States",
    region: "Texas",
    intro:
      "Dallas organizations in technology, telecommunications, and transportation implement ISO standards to scale operations while maintaining audit-ready evidence.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    country: "United States",
    region: "California",
    intro:
      "San Jose's technology and advanced manufacturing firms pursue ISO certification to meet Silicon Valley customer expectations and global supply chain standards.",
  },
  {
    slug: "austin",
    name: "Austin",
    country: "United States",
    region: "Texas",
    intro:
      "Austin's fast-growing technology, semiconductor, and life sciences companies use ISO standards to formalize processes as they scale rapidly.",
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    country: "United States",
    region: "Florida",
    intro:
      "Jacksonville organizations in logistics, finance, and healthcare implement ISO management systems to improve consistency and customer confidence.",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    country: "United States",
    region: "Texas",
    intro:
      "Fort Worth's aerospace, defence, and manufacturing sectors rely on ISO certification to meet contractor requirements and strengthen quality controls.",
  },
  {
    slug: "columbus",
    name: "Columbus",
    country: "United States",
    region: "Ohio",
    intro:
      "Columbus organizations in manufacturing, retail, and logistics use ISO standards to streamline operations and satisfy national buyer audit programs.",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    country: "United States",
    region: "North Carolina",
    intro:
      "Charlotte's banking, manufacturing, and energy companies pursue ISO certification to strengthen governance and operational risk management.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    country: "United States",
    region: "Washington",
    intro:
      "Seattle organizations in technology, aerospace, and maritime trade implement ISO management systems to meet global customer and regulatory expectations.",
  },
  {
    slug: "denver",
    name: "Denver",
    country: "United States",
    region: "Colorado",
    intro:
      "Denver's energy, outdoor recreation, and technology sectors use ISO standards to manage environmental obligations and operational safety.",
  },
  {
    slug: "boston",
    name: "Boston",
    country: "United States",
    region: "Massachusetts",
    intro:
      "Boston organizations in biotech, education, and healthcare pursue ISO certification to align with research standards and enterprise customer requirements.",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    country: "United States",
    region: "Georgia",
    intro:
      "Atlanta's logistics, film production, and corporate headquarters hub use ISO management systems to standardize quality across distributed operations.",
  },
  {
    slug: "miami",
    name: "Miami",
    country: "United States",
    region: "Florida",
    intro:
      "Miami organizations in international trade, hospitality, and healthcare implement ISO standards to compete in Latin American markets and meet buyer audits.",
  },
];

export const ISO_STANDARD_SLUGS = ["9001", "14001", "45001"] as const;
export type IsoStandardSlug = (typeof ISO_STANDARD_SLUGS)[number];

export function getCityBySlug(slug: string): IsoCity | undefined {
  return ISO_CITIES.find((city) => city.slug === slug);
}

export function isValidStandardSlug(slug: string): slug is IsoStandardSlug {
  return ISO_STANDARD_SLUGS.includes(slug as IsoStandardSlug);
}

export function getIsoCityPagePath(standard: IsoStandardSlug, citySlug: string): string {
  return `/iso-${standard}/${citySlug}`;
}

export function getAllIsoCityPagePaths(): string[] {
  return ISO_STANDARD_SLUGS.flatMap((standard) =>
    ISO_CITIES.map((city) => getIsoCityPagePath(standard, city.slug)),
  );
}
