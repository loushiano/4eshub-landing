import type { ChecklistStandardSlug } from "./checklistContent";

export type ReadinessQuestion = {
  clauseId: string;
  clauseTitle: string;
  question: string;
};

/**
 * Five high-level readiness questions drawn from top-level HLS clauses
 * in 4es_backend/src/standard/iso-standards.config.ts (clauses 4, 5, 6, 8, 9).
 */
export const READINESS_QUESTIONS: Record<
  ChecklistStandardSlug,
  ReadinessQuestion[]
> = {
  "9001": [
    {
      clauseId: "4",
      clauseTitle: "Context of the Organization",
      question:
        "Have you defined your organization's context, interested parties, QMS scope, and core QMS processes?",
    },
    {
      clauseId: "5",
      clauseTitle: "Leadership",
      question:
        "Does top management demonstrate leadership, customer focus, and assigned QMS responsibilities?",
    },
    {
      clauseId: "6",
      clauseTitle: "Planning",
      question:
        "Have you planned risks, opportunities, quality objectives, and changes to the QMS?",
    },
    {
      clauseId: "8",
      clauseTitle: "Operation",
      question:
        "Are your operational processes planned and controlled to meet product and service requirements?",
    },
    {
      clauseId: "9",
      clauseTitle: "Performance Evaluation",
      question:
        "Do you monitor, measure, analyze, audit, and review QMS performance?",
    },
  ],
  "14001": [
    {
      clauseId: "4",
      clauseTitle: "Context of the organization",
      question:
        "Have you defined your organization's context, interested parties, EMS scope, and EMS processes?",
    },
    {
      clauseId: "5",
      clauseTitle: "Leadership",
      question:
        "Does top management lead the EMS, establish environmental policy, and assign responsibilities?",
    },
    {
      clauseId: "6",
      clauseTitle: "Planning",
      question:
        "Have you planned actions for environmental aspects, risks, obligations, and objectives?",
    },
    {
      clauseId: "8",
      clauseTitle: "Operation",
      question:
        "Are EMS operations and emergency response planned and controlled?",
    },
    {
      clauseId: "9",
      clauseTitle: "Performance evaluation",
      question:
        "Do you monitor, measure, analyze, audit, and review EMS performance and compliance?",
    },
  ],
  "45001": [
    {
      clauseId: "4",
      clauseTitle: "Context of the organization",
      question:
        "Have you defined your organization's context, workers and interested parties, OH&S scope, and OH&S processes?",
    },
    {
      clauseId: "5",
      clauseTitle: "Leadership and worker participation",
      question:
        "Does top management lead OH&S, establish policy, assign roles, and enable worker participation?",
    },
    {
      clauseId: "6",
      clauseTitle: "Planning",
      question:
        "Have you planned actions for OH&S hazards, risks, legal requirements, and objectives?",
    },
    {
      clauseId: "8",
      clauseTitle: "Operation",
      question:
        "Are OH&S operations, changes, procurement, contractors, and emergency situations controlled?",
    },
    {
      clauseId: "9",
      clauseTitle: "Performance evaluation",
      question:
        "Do you monitor, measure, analyze, audit, and review OH&S performance and compliance?",
    },
  ],
};

/** Generic fallback when standard is "other" or unset. */
export const GENERIC_READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    clauseId: "4",
    clauseTitle: "Context of the Organization",
    question:
      "Have you defined your organization's context, interested parties, and management system scope?",
  },
  {
    clauseId: "5",
    clauseTitle: "Leadership",
    question:
      "Does top management demonstrate leadership and assign clear management system responsibilities?",
  },
  {
    clauseId: "6",
    clauseTitle: "Planning",
    question:
      "Have you planned risks, opportunities, and objectives for your management system?",
  },
  {
    clauseId: "8",
    clauseTitle: "Operation",
    question:
      "Are your operational processes planned and controlled to meet requirements?",
  },
  {
    clauseId: "9",
    clauseTitle: "Performance Evaluation",
    question:
      "Do you monitor, measure, audit, and review management system performance?",
  },
];

/** 4+ yes answers → ready for certification body; otherwise implementation help. */
export const READINESS_PASS_THRESHOLD = 4;

export function getReadinessQuestions(
  standard: string | null | undefined,
): ReadinessQuestion[] {
  if (standard === "9001" || standard === "14001" || standard === "45001") {
    return READINESS_QUESTIONS[standard];
  }
  return GENERIC_READINESS_QUESTIONS;
}
