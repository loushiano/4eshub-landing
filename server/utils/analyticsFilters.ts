const EXCLUDED_PATH_PREFIXES = ['/admin/analytics']

export function isExcludedAnalyticsPath(path: string): boolean {
  return EXCLUDED_PATH_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  )
}
