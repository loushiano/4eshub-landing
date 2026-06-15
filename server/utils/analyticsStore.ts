import { promises as fs } from 'node:fs'
import { join, dirname } from 'node:path'
import { randomUUID } from 'node:crypto'

export interface VisitEntry {
  id: string
  timestamp: string
  path: string
  fullUrl: string
  referrer: string
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  utmTerm: string | null
  utmContent: string | null
  userAgent: string
  language: string
  screenWidth: number | null
  visitorId: string
}

const getVisitsPath = () =>
  join(process.cwd(), '.data', 'analytics', 'visits.jsonl')

async function ensureDataDir() {
  const dir = dirname(getVisitsPath())
  await fs.mkdir(dir, { recursive: true })
}

export async function appendVisit(
  entry: Omit<VisitEntry, 'id' | 'timestamp'>,
): Promise<VisitEntry> {
  const record: VisitEntry = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    ...entry,
  }

  await ensureDataDir()
  await fs.appendFile(getVisitsPath(), `${JSON.stringify(record)}\n`, 'utf-8')

  return record
}

export async function readVisits(limit = 2000): Promise<VisitEntry[]> {
  try {
    const content = await fs.readFile(getVisitsPath(), 'utf-8')
    const lines = content.trim().split('\n').filter(Boolean)

    return lines
      .slice(-limit)
      .map((line) => JSON.parse(line) as VisitEntry)
      .reverse()
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'ENOENT'
    ) {
      return []
    }

    throw error
  }
}
