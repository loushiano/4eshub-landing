import { getQuery } from 'h3'
import {
  getAnalyticsDataLocation,
  getChecklistDataLocation,
  readChecklistFillings,
  readVisits,
  type ChecklistFillingEntry,
} from '../../utils/analyticsStore'
import { isExcludedAnalyticsPath } from '../../utils/analyticsFilters'
import { verifyAnalyticsPassword } from '../../utils/analyticsAuth'

function buildChecklistSummary(entries: ChecklistFillingEntry[]) {
  const sessions = new Set(entries.map((entry) => entry.sessionId))
  const completedSessions = new Set(
    entries
      .filter(
        (entry) =>
          entry.step === 'thank_you' ||
          (entry.step === 'email' && entry.action === 'submit'),
      )
      .map((entry) => entry.sessionId),
  )
  const startedSessions = new Set(
    entries
      .filter((entry) => entry.step === 'seeking_cert')
      .map((entry) => entry.sessionId),
  )

  const stepCounts: Record<string, number> = {}
  const standardCounts: Record<string, number> = {}
  const intentCounts: Record<string, number> = {}

  for (const entry of entries) {
    const stepKey =
      entry.step === 'clause_questions' && entry.clauseId
        ? `clause_${entry.clauseId}`
        : entry.step
    stepCounts[stepKey] = (stepCounts[stepKey] || 0) + 1

    if (entry.standard) {
      standardCounts[entry.standard] =
        (standardCounts[entry.standard] || 0) + 1
    }

    if (entry.intent && (entry.step === 'email' || entry.step === 'thank_you')) {
      intentCounts[entry.intent] = (intentCounts[entry.intent] || 0) + 1
    }
  }

  const topSteps = Object.entries(stepCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([step, count]) => ({ step, count }))

  const topStandards = Object.entries(standardCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([standard, count]) => ({ standard, count }))

  const topIntents = Object.entries(intentCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([intent, count]) => ({ intent, count }))

  return {
    totalEvents: entries.length,
    sessionsStarted: startedSessions.size || sessions.size,
    sessionsCompleted: completedSessions.size,
    uniqueVisitors: new Set(entries.map((entry) => entry.visitorId)).size,
    topSteps,
    topStandards,
    topIntents,
    entries,
    dataFile: getChecklistDataLocation(),
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  verifyAnalyticsPassword(event, config.analyticsPassword)

  const query = getQuery(event)
  const limit = Math.min(Number(query.limit) || 500, 2000)
  const entries = (await readVisits(limit)).filter(
    (entry) => !isExcludedAnalyticsPath(entry.path),
  )

  const uniqueVisitors = new Set(entries.map((entry) => entry.visitorId)).size

  const pageCounts: Record<string, number> = {}
  const referrerCounts: Record<string, number> = {}
  const countryCounts: Record<string, number> = {}

  for (const entry of entries) {
    pageCounts[entry.path] = (pageCounts[entry.path] || 0) + 1

    const referrer = entry.referrer || '(direct)'
    referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1

    const country = entry.country || 'Unknown'
    countryCounts[country] = (countryCounts[country] || 0) + 1
  }

  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, count }))

  const topReferrers = Object.entries(referrerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([referrer, count]) => ({ referrer, count }))

  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([country, count]) => ({ country, count }))

  const checklistEntries = await readChecklistFillings(limit)
  const checklist = buildChecklistSummary(checklistEntries)

  return {
    total: entries.length,
    uniqueVisitors,
    topPages,
    topReferrers,
    topCountries,
    entries,
    dataFile: getAnalyticsDataLocation(),
    checklist,
  }
})
