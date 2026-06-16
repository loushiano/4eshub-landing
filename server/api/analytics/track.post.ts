import { readBody } from 'h3'
import { appendVisit } from '../../utils/analyticsStore'
import { isExcludedAnalyticsPath } from '../../utils/analyticsFilters'
import { getVisitorGeo } from '../../utils/visitorGeo'

const MAX_FIELD_LENGTH = 2048

function trim(value: unknown, max = MAX_FIELD_LENGTH): string {
  if (typeof value !== 'string') {
    return ''
  }

  return value.slice(0, max)
}

function optionalUtm(value: unknown): string | null {
  const trimmed = trim(value, 256)
  return trimmed || null
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const path = trim(body?.path, 512)
  if (!path || !path.startsWith('/')) {
    throw createError({
      statusCode: 400,
      message: 'Invalid path',
    })
  }

  if (isExcludedAnalyticsPath(path)) {
    return { ok: true, skipped: true }
  }

  const geo = getVisitorGeo(event)

  const entry = await appendVisit({
    path,
    fullUrl: trim(body?.fullUrl, MAX_FIELD_LENGTH),
    referrer: trim(body?.referrer, MAX_FIELD_LENGTH),
    utmSource: optionalUtm(body?.utmSource),
    utmMedium: optionalUtm(body?.utmMedium),
    utmCampaign: optionalUtm(body?.utmCampaign),
    utmTerm: optionalUtm(body?.utmTerm),
    utmContent: optionalUtm(body?.utmContent),
    userAgent: trim(body?.userAgent, MAX_FIELD_LENGTH),
    language: trim(body?.language, 64),
    screenWidth:
      typeof body?.screenWidth === 'number' && body.screenWidth > 0
        ? Math.round(body.screenWidth)
        : null,
    visitorId: trim(body?.visitorId, 64) || 'anonymous',
    country: geo.country,
    region: geo.region,
    city: geo.city,
  })

  return { ok: true, id: entry.id }
})
