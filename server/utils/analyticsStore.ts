import { randomUUID } from 'node:crypto'
import {
  GetObjectCommand,
  NoSuchKey,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'

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
  country: string | null
  region: string | null
  city: string | null
}

export interface ChecklistFillingEntry {
  id: string
  timestamp: string
  sessionId: string
  visitorId: string
  path: string
  standard: string | null
  step: string
  action: string
  answer: string | null
  clauseId: string | null
  clauseTitle: string | null
  question: string | null
  clauseIndex: number | null
  intent: string | null
  yesCount: number | null
  questionCount: number | null
  source: string | null
  country: string | null
  region: string | null
  city: string | null
}

interface AnalyticsS3Config {
  client: S3Client
  bucket: string
  key: string
}

function getS3ClientConfig(): Omit<AnalyticsS3Config, 'key'> {
  const config = useRuntimeConfig()
  const bucket = config.analyticsS3Bucket as string | undefined
  const region = process.env.AWS_REGION
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  if (!bucket) {
    throw createError({
      statusCode: 503,
      message: 'ANALYTICS_S3_BUCKET must be configured',
    })
  }

  if (!region) {
    throw createError({
      statusCode: 503,
      message: 'AWS_REGION is required for analytics storage',
    })
  }

  if (!accessKeyId || !secretAccessKey) {
    throw createError({
      statusCode: 503,
      message:
        'AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are required for analytics storage',
    })
  }

  return {
    bucket,
    client: new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    }),
  }
}

function getAnalyticsS3Config(): AnalyticsS3Config {
  const config = useRuntimeConfig()
  const key = config.analyticsS3Key as string | undefined

  if (!key) {
    throw createError({
      statusCode: 503,
      message: 'ANALYTICS_S3_KEY must be configured',
    })
  }

  return {
    ...getS3ClientConfig(),
    key,
  }
}

function getChecklistS3Config(): AnalyticsS3Config {
  const config = useRuntimeConfig()
  const key = config.analyticsChecklistS3Key as string | undefined

  if (!key) {
    throw createError({
      statusCode: 503,
      message: 'ANALYTICS_CHECKLIST_S3_KEY must be configured',
    })
  }

  return {
    ...getS3ClientConfig(),
    key,
  }
}

async function readJsonlFromS3(s3: AnalyticsS3Config): Promise<string> {
  try {
    const response = await s3.client.send(
      new GetObjectCommand({
        Bucket: s3.bucket,
        Key: s3.key,
      }),
    )

    return (await response.Body?.transformToString('utf-8')) || ''
  } catch (error: unknown) {
    if (
      error instanceof NoSuchKey ||
      (error &&
        typeof error === 'object' &&
        'name' in error &&
        error.name === 'NoSuchKey')
    ) {
      return ''
    }

    throw error
  }
}

async function writeJsonlToS3(
  s3: AnalyticsS3Config,
  content: string,
): Promise<void> {
  await s3.client.send(
    new PutObjectCommand({
      Bucket: s3.bucket,
      Key: s3.key,
      Body: content,
      ContentType: 'application/x-ndjson',
      CacheControl: 'no-cache',
    }),
  )
}

function parseJsonl<T>(content: string, limit: number): T[] {
  const lines = content.trim().split('\n').filter(Boolean)

  return lines
    .slice(-limit)
    .map((line) => JSON.parse(line) as T)
    .reverse()
}

export function getAnalyticsDataLocation(): string {
  const { bucket, key } = getAnalyticsS3Config()
  return `s3://${bucket}/${key}`
}

export function getChecklistDataLocation(): string {
  const { bucket, key } = getChecklistS3Config()
  return `s3://${bucket}/${key}`
}

export async function appendVisit(
  entry: Omit<VisitEntry, 'id' | 'timestamp'>,
): Promise<VisitEntry> {
  const s3 = getAnalyticsS3Config()
  const record: VisitEntry = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    ...entry,
  }

  const existing = await readJsonlFromS3(s3)
  await writeJsonlToS3(s3, `${existing}${JSON.stringify(record)}\n`)

  return record
}

export async function readVisits(limit = 2000): Promise<VisitEntry[]> {
  const content = await readJsonlFromS3(getAnalyticsS3Config())
  return parseJsonl<VisitEntry>(content, limit)
}

export async function appendChecklistFilling(
  entry: Omit<ChecklistFillingEntry, 'id' | 'timestamp'>,
): Promise<ChecklistFillingEntry> {
  const s3 = getChecklistS3Config()
  const record: ChecklistFillingEntry = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    ...entry,
  }

  const existing = await readJsonlFromS3(s3)
  await writeJsonlToS3(s3, `${existing}${JSON.stringify(record)}\n`)

  return record
}

export async function readChecklistFillings(
  limit = 2000,
): Promise<ChecklistFillingEntry[]> {
  const content = await readJsonlFromS3(getChecklistS3Config())
  return parseJsonl<ChecklistFillingEntry>(content, limit)
}
