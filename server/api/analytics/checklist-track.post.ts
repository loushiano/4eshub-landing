import { readBody } from 'h3'
import { appendChecklistFilling } from '../../utils/analyticsStore'
import { getVisitorGeo } from '../../utils/visitorGeo'

const MAX_FIELD_LENGTH = 2048

function trim(value: unknown, max = MAX_FIELD_LENGTH): string {
  if (typeof value !== 'string') {
    return ''
  }

  return value.slice(0, max)
}

function optionalString(value: unknown, max = 512): string | null {
  const trimmed = trim(value, max)
  return trimmed || null
}

function optionalNumber(value: unknown): number | null {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return null
  }

  return Math.round(value)
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const sessionId = trim(body?.sessionId, 64)
  const step = trim(body?.step, 64)
  const action = trim(body?.action, 64) || 'answer'

  if (!sessionId || !step) {
    throw createError({
      statusCode: 400,
      message: 'sessionId and step are required',
    })
  }

  const geo = getVisitorGeo(event)

  const entry = await appendChecklistFilling({
    sessionId,
    visitorId: trim(body?.visitorId, 64) || 'anonymous',
    path: optionalString(body?.path, 512) || '/',
    standard: optionalString(body?.standard, 32),
    step,
    action,
    answer: optionalString(body?.answer, 256),
    clauseId: optionalString(body?.clauseId, 32),
    clauseTitle: optionalString(body?.clauseTitle, 256),
    question: optionalString(body?.question, MAX_FIELD_LENGTH),
    clauseIndex: optionalNumber(body?.clauseIndex),
    intent: optionalString(body?.intent, 64),
    yesCount: optionalNumber(body?.yesCount),
    questionCount: optionalNumber(body?.questionCount),
    source: optionalString(body?.source, 128),
    country: geo.country,
    region: geo.region,
    city: geo.city,
  })

  return { ok: true, id: entry.id }
})
