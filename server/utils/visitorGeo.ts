import { getHeader, type H3Event } from 'h3'

export interface VisitorGeo {
  country: string | null
  region: string | null
  city: string | null
}

function decodeHeader(value: string | undefined): string | null {
  if (!value) {
    return null
  }

  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function getVisitorGeo(event: H3Event): VisitorGeo {
  const country =
    getHeader(event, 'x-vercel-ip-country') ||
    getHeader(event, 'cf-ipcountry') ||
    null

  const region = getHeader(event, 'x-vercel-ip-country-region') || null

  const city = decodeHeader(getHeader(event, 'x-vercel-ip-city'))

  return {
    country: country || null,
    region: region || null,
    city: city || null,
  }
}

export function formatVisitorGeo(geo: VisitorGeo): string {
  const parts = [geo.city, geo.region, geo.country].filter(Boolean)
  return parts.join(', ') || 'Unknown'
}
