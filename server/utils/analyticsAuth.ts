import { createError, getHeader, type H3Event } from 'h3'

export function verifyAnalyticsPassword(
  event: H3Event,
  password: string | undefined,
) {
  if (!password) {
    throw createError({
      statusCode: 503,
      message: 'Analytics password is not configured',
    })
  }

  const provided = getHeader(event, 'x-analytics-password')

  if (!provided || provided !== password) {
    throw createError({
      statusCode: 401,
      message: 'Invalid password',
    })
  }
}
