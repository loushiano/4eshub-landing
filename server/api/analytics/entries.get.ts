import { getQuery } from 'h3'
import { getAnalyticsDataLocation, readVisits } from '../../utils/analyticsStore'
import { verifyAnalyticsPassword } from '../../utils/analyticsAuth'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  verifyAnalyticsPassword(event, config.analyticsPassword)

  const query = getQuery(event)
  const limit = Math.min(Number(query.limit) || 500, 2000)
  const entries = await readVisits(limit)

  const uniqueVisitors = new Set(entries.map((entry) => entry.visitorId)).size

  const pageCounts: Record<string, number> = {}
  const referrerCounts: Record<string, number> = {}

  for (const entry of entries) {
    pageCounts[entry.path] = (pageCounts[entry.path] || 0) + 1

    const referrer = entry.referrer || '(direct)'
    referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1
  }

  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, count }))

  const topReferrers = Object.entries(referrerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([referrer, count]) => ({ referrer, count }))

  return {
    total: entries.length,
    uniqueVisitors,
    topPages,
    topReferrers,
    entries,
    dataFile: getAnalyticsDataLocation(),
  }
})
