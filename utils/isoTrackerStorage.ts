export type TrackerFramework = "ISO 9001" | "ISO 14001" | "ISO 45001";

const pinKey = (standard: TrackerFramework) =>
  `iso-tracker-pin:${standard}`;
const emailKey = (standard: TrackerFramework) =>
  `iso-tracker-email:${standard}`;
const idKey = (standard: TrackerFramework) => `iso-tracker-id:${standard}`;

export function saveTrackerSession(
  standard: TrackerFramework,
  payload: { pin: string; email: string; id: string },
) {
  if (!import.meta.client) return;
  localStorage.setItem(pinKey(standard), payload.pin);
  localStorage.setItem(emailKey(standard), payload.email);
  localStorage.setItem(idKey(standard), payload.id);
}

export function loadTrackerSession(standard: TrackerFramework) {
  if (!import.meta.client) {
    return null;
  }

  const pin = localStorage.getItem(pinKey(standard));
  const email = localStorage.getItem(emailKey(standard));
  const id = localStorage.getItem(idKey(standard));

  if (!pin || !email || !id) {
    return null;
  }

  return { pin, email, id };
}

export function clearTrackerSession(standard: TrackerFramework) {
  if (!import.meta.client) return;
  localStorage.removeItem(pinKey(standard));
  localStorage.removeItem(emailKey(standard));
  localStorage.removeItem(idKey(standard));
}
