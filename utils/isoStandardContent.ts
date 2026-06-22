import type { IsoStandardSlug } from "./isoCities";

export type IsoClause = {
  number: string;
  title: string;
  summary: string;
  support: string[];
  modules: string[];
};

export type IsoStandardContent = {
  slug: IsoStandardSlug;
  badge: string;
  systemName: string;
  shortName: string;
  overviewIntro: string;
  cityIntroSuffix: string;
  ctaHeading: string;
  ctaBody: string;
  clauses: IsoClause[];
};

const iso9001Clauses: IsoClause[] = [
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

const iso14001Clauses: IsoClause[] = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Understand the internal and external issues that affect your EMS, identify interested parties and their environmental requirements, define the scope of your system, and establish the processes needed for effective environmental management.",
    support: [
      "Document EMS scope with version-controlled statements linked to sites, activities, and applicable environmental regulations.",
      "Map organizational units and assign environmental responsibilities so accountability is clear across locations.",
      "Maintain a register of compliance obligations and track regulatory changes with review history.",
      "Centralize environmental policies, aspect registers, and context documents in a controlled library.",
    ],
    modules: ["Scopes", "Organization Units", "Risk", "Documents", "Dashboard"],
  },
  {
    number: "5",
    title: "Leadership",
    summary:
      "Top management must demonstrate leadership and commitment to the EMS, establish an environmental policy, and assign roles, responsibilities, and authorities for environmental performance.",
    support: [
      "Publish and control your environmental policy with approval workflows and version history.",
      "Assign environmental roles and authorities through organizational structures and permission-based access.",
      "Capture management review inputs on environmental performance, objectives, and improvement opportunities.",
      "Maintain audit trails of policy updates, leadership decisions, and environmental commitments.",
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
      "Identify environmental aspects and impacts, determine compliance obligations, plan actions to address risks and opportunities, and set environmental objectives with measurable targets.",
    support: [
      "Maintain environmental aspect and impact registers with significance ratings and control measures.",
      "Track compliance obligations, permit conditions, and regulatory deadlines with automated alerts.",
      "Set environmental objectives and monitor performance indicators with targets, trends, and ownership.",
      "Plan and track actions to address significant aspects, risks, and opportunities for improvement.",
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
      "Provide resources, competence, awareness, communication, and documented information needed for the EMS—including training on environmental responsibilities and emergency preparedness.",
    support: [
      "Manage environmental monitoring equipment and assets with calibration and maintenance records.",
      "Deliver and record environmental awareness training with competence matrices and expiry tracking.",
      "Maintain a knowledge base for environmental procedures, work instructions, and spill response guides.",
      "Control all EMS documented information with version control, approval workflows, and retention rules.",
      "Send notifications for permit renewals, training expirations, and environmental incident alerts.",
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
      "Establish operational planning and control for significant environmental aspects, manage changes, control outsourced processes, and prepare for emergency situations.",
    support: [
      "Document and control operational procedures for significant environmental aspects and life-cycle considerations.",
      "Track environmental incidents, spills, and non-conformities with containment and corrective action workflows.",
      "Run internal environmental audit programs with schedules, checklists, and finding follow-up.",
      "Maintain emergency preparedness and response plans with drills, exercises, and review records.",
      "Monitor supplier and contractor environmental performance with structured evaluation records.",
    ],
    modules: [
      "Documents",
      "Audit",
      "Non-conformities",
      "Issues",
      "User Tasks",
      "Reports",
      "Dashboard",
    ],
  },
];

const iso45001Clauses: IsoClause[] = [
  {
    number: "4",
    title: "Context of the organization",
    summary:
      "Understand internal and external issues affecting OH&S performance, identify workers and other interested parties, define EMS scope, and establish processes for a safe and healthy workplace.",
    support: [
      "Document OH&S scope with version-controlled statements linked to work activities, sites, and hazards.",
      "Map organizational units and assign safety responsibilities across departments and locations.",
      "Capture workplace context factors including contractor activities, remote work, and regulatory requirements.",
      "Centralize OH&S policies, hazard registers, and context documents in a controlled library.",
    ],
    modules: ["Scopes", "Organization Units", "Risk", "Documents", "Dashboard"],
  },
  {
    number: "5",
    title: "Leadership and worker participation",
    summary:
      "Top management must demonstrate leadership, establish an OH&S policy, assign roles and responsibilities, and ensure worker consultation and participation in the OH&S management system.",
    support: [
      "Publish and control your OH&S policy with approval workflows and version history.",
      "Assign safety roles and authorities with clear accountability across organizational units.",
      "Document worker consultation, safety committee meetings, and participation in hazard identification.",
      "Track management review inputs on OH&S performance, incidents, and improvement actions.",
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
      "Identify hazards, assess risks and opportunities, determine legal and other requirements, and plan actions to address risks—including setting OH&S objectives with measurable targets.",
    support: [
      "Maintain hazard identification registers with risk assessments, control hierarchy, and review cycles.",
      "Track legal and regulatory OH&S requirements with compliance obligation registers and alerts.",
      "Set OH&S objectives and monitor safety performance indicators with targets and trend analysis.",
      "Plan and track actions for risk treatment, opportunities for improvement, and change management.",
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
      "Provide resources, competence, awareness, communication, and documented information for the OH&S management system—including safety training and emergency preparedness awareness.",
    support: [
      "Manage safety equipment, PPE, and monitoring devices with inspection and maintenance records.",
      "Deliver and record safety training with competence matrices, certifications, and expiry alerts.",
      "Maintain a knowledge base for safe work procedures, JSA documents, and emergency response guides.",
      "Control all OH&S documented information with version control and approval workflows.",
      "Send notifications for training renewals, incident reports, and safety meeting schedules.",
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
      "Plan and control operational processes to eliminate hazards and reduce OH&S risks, manage change, procure safely, and prepare for emergency situations.",
    support: [
      "Document and control operational procedures with linked safe work instructions and permits.",
      "Record and investigate incidents, near-misses, and non-conformities with root cause analysis.",
      "Run internal OH&S audit programs with schedules, checklists, and corrective action follow-up.",
      "Maintain emergency preparedness plans with drills, evacuation records, and post-exercise reviews.",
      "Track contractor and supplier safety performance with pre-qualification and monitoring records.",
    ],
    modules: [
      "Documents",
      "Audit",
      "Non-conformities",
      "Issues",
      "User Tasks",
      "Reports",
      "Dashboard",
    ],
  },
];

export const ISO_STANDARD_CONTENT: Record<IsoStandardSlug, IsoStandardContent> = {
  "9001": {
    slug: "9001",
    badge: "ISO 9001:2015",
    systemName: "Quality Management System",
    shortName: "QMS",
    overviewIntro:
      "4ES Hub is built around the requirements of ISO 9001:2015. Clauses 4 through 8 cover how your organization defines its QMS, leads the system, plans for risk and objectives, provides support, and runs day-to-day operations.",
    cityIntroSuffix:
      "Whether you are starting from scratch or strengthening an existing QMS, 4ES Hub connects the evidence auditors expect—documents, training, audits, risks, and corrective actions—in one audit-ready platform.",
    ctaHeading: "Ready to build an audit-ready QMS?",
    ctaBody:
      "See how 4ES Hub connects documents, training, audits, risks, non-conformities, and management review in one platform.",
    clauses: iso9001Clauses,
  },
  "14001": {
    slug: "14001",
    badge: "ISO 14001:2015",
    systemName: "Environmental Management System",
    shortName: "EMS",
    overviewIntro:
      "4ES Hub supports ISO 14001:2015 across clauses 4 through 8—helping your organization understand environmental context, demonstrate leadership commitment, plan for aspects and compliance obligations, provide resources and competence, and control operational environmental performance.",
    cityIntroSuffix:
      "From aspect registers to emergency preparedness, 4ES Hub gives environmental teams a connected system to manage evidence, workflows, and continual improvement—without scattered spreadsheets and folder silos.",
    ctaHeading: "Ready to build an audit-ready EMS?",
    ctaBody:
      "See how 4ES Hub connects environmental aspects, compliance tracking, training, audits, incidents, and management review in one platform.",
    clauses: iso14001Clauses,
  },
  "45001": {
    slug: "45001",
    badge: "ISO 45001:2018",
    systemName: "Occupational Health & Safety Management System",
    shortName: "OH&S MS",
    overviewIntro:
      "4ES Hub supports ISO 45001:2018 across clauses 4 through 8—helping your organization establish OH&S context, demonstrate leadership and worker participation, plan hazard identification and risk assessment, provide safety competence and awareness, and control operational health and safety.",
    cityIntroSuffix:
      "From hazard registers to incident investigation and emergency drills, 4ES Hub gives safety teams one place to manage OH&S evidence, worker participation records, and continual improvement.",
    ctaHeading: "Ready to build an audit-ready OH&S management system?",
    ctaBody:
      "See how 4ES Hub connects hazard identification, safety training, audits, incidents, and management review in one platform.",
    clauses: iso45001Clauses,
  },
};

export function getStandardContent(standard: IsoStandardSlug): IsoStandardContent {
  return ISO_STANDARD_CONTENT[standard];
}

export function buildCityPageTitle(
  standard: IsoStandardSlug,
  cityName: string,
): string {
  return `ISO ${standard} in ${cityName} | 4ES Hub`;
}

export function buildCityPageDescription(
  standard: IsoStandardSlug,
  cityName: string,
  systemName: string,
): string {
  return `ISO ${standard} support in ${cityName}: see how 4ES Hub helps ${cityName} organizations implement and maintain their ${systemName} with connected modules for documents, training, audits, risk, and corrective actions.`;
}

export function buildCityH1(standard: IsoStandardSlug, cityName: string): string {
  return `ISO ${standard} support in ${cityName}`;
}

export function buildCityHeroIntro(
  content: IsoStandardContent,
  cityName: string,
  cityIntro: string,
): string {
  return `${cityIntro} ${content.cityIntroSuffix} Here is how 4ES Hub modules map to ISO ${content.slug} clauses 4 through 8 for organizations in ${cityName}.`;
}
