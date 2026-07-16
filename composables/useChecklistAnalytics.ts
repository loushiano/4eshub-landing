const VISITOR_ID_KEY = "4es_visitor_id";

function getVisitorId(): string {
  if (!import.meta.client) {
    return "anonymous";
  }

  let id = localStorage.getItem(VISITOR_ID_KEY);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }

  return id;
}

export type ChecklistTrackPayload = {
  step: string;
  action?: string;
  answer?: string | null;
  standard?: string | null;
  clauseId?: string | null;
  clauseTitle?: string | null;
  question?: string | null;
  clauseIndex?: number | null;
  intent?: string | null;
  yesCount?: number | null;
  questionCount?: number | null;
  source?: string | null;
};

export function useChecklistAnalytics() {
  const sessionId = ref(
    import.meta.client ? crypto.randomUUID() : "pending",
  );

  function resetSession() {
    if (import.meta.client) {
      sessionId.value = crypto.randomUUID();
    }
  }

  async function trackChecklistStep(payload: ChecklistTrackPayload) {
    if (!import.meta.client) {
      return;
    }

    try {
      await $fetch("/api/analytics/checklist-track", {
        method: "POST",
        body: {
          sessionId: sessionId.value,
          visitorId: getVisitorId(),
          path: window.location.pathname,
          ...payload,
        },
      });
    } catch {
      // Never block the questionnaire on analytics failures
    }
  }

  return {
    sessionId,
    resetSession,
    trackChecklistStep,
  };
}
