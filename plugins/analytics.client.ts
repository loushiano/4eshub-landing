const VISITOR_ID_KEY = '4es_visitor_id'

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY)

  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(VISITOR_ID_KEY, id)
  }

  return id
}

function getUtmParams(search: string) {
  const params = new URLSearchParams(search)

  return {
    utmSource: params.get('utm_source'),
    utmMedium: params.get('utm_medium'),
    utmCampaign: params.get('utm_campaign'),
    utmTerm: params.get('utm_term'),
    utmContent: params.get('utm_content'),
  }
}

async function trackPageView() {
  const { pathname, search, href } = window.location
  const utm = getUtmParams(search)

  try {
    await $fetch('/api/analytics/track', {
      method: 'POST',
      body: {
        path: pathname,
        fullUrl: href,
        referrer: document.referrer || '',
        ...utm,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        visitorId: getVisitorId(),
      },
    })
  } catch {
    // Ignore tracking failures so they never affect the site
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    trackPageView()
  })
})
