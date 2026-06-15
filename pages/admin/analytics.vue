<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-10">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Site Analytics</h1>
          <p class="mt-1 text-sm text-gray-500">
            Visits are stored in
            <code class="rounded bg-gray-200 px-1.5 py-0.5 break-all">{{ dataLocation }}</code>
          </p>
        </div>
        <NuxtLink
          to="/"
          class="text-sm font-medium text-green-600 hover:text-green-700"
        >
          Back to site
        </NuxtLink>
      </div>

      <div
        v-if="!isAuthenticated"
        class="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <h2 class="text-lg font-semibold">Enter password</h2>
        <p class="mt-2 text-sm text-gray-500">
          Use the password set in your
          <code class="rounded bg-gray-100 px-1">ANALYTICS_PASSWORD</code>
          environment variable.
        </p>
        <form class="mt-6 space-y-4" @submit.prevent="login">
          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            placeholder="Password"
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
          />
          <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white hover:bg-green-700 disabled:opacity-60"
          >
            {{ loading ? 'Checking...' : 'View analytics' }}
          </button>
        </form>
      </div>

      <div v-else class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-sm text-gray-500">
            Showing {{ data?.entries.length || 0 }} recent visits
          </p>
          <div class="flex gap-2">
            <button
              class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
              @click="loadData"
            >
              Refresh
            </button>
            <button
              class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
              @click="logout"
            >
              Log out
            </button>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">Total visits</p>
            <p class="mt-1 text-3xl font-bold">{{ data?.total || 0 }}</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">Unique visitors</p>
            <p class="mt-1 text-3xl font-bold">{{ data?.uniqueVisitors || 0 }}</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">Top page</p>
            <p class="mt-1 truncate text-lg font-semibold">
              {{ data?.topPages[0]?.path || '—' }}
            </p>
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold">Top pages</h2>
            <ul class="space-y-2">
              <li
                v-for="page in data?.topPages || []"
                :key="page.path"
                class="flex items-center justify-between text-sm"
              >
                <span class="truncate pr-4">{{ page.path }}</span>
                <span class="font-medium text-gray-700">{{ page.count }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold">Top referrers</h2>
            <ul class="space-y-2">
              <li
                v-for="item in data?.topReferrers || []"
                :key="item.referrer"
                class="flex items-center justify-between gap-4 text-sm"
              >
                <span class="truncate">{{ item.referrer }}</span>
                <span class="font-medium text-gray-700">{{ item.count }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold">Top countries</h2>
            <ul class="space-y-2">
              <li
                v-for="item in data?.topCountries || []"
                :key="item.country"
                class="flex items-center justify-between gap-4 text-sm"
              >
                <span class="truncate">{{ item.country }}</span>
                <span class="font-medium text-gray-700">{{ item.count }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Time</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Page</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Location</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Referrer</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Source</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-500">Visitor</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="entry in data?.entries || []" :key="entry.id">
                  <td class="whitespace-nowrap px-4 py-3 text-gray-600">
                    {{ formatTime(entry.timestamp) }}
                  </td>
                  <td class="max-w-xs truncate px-4 py-3 font-medium">
                    {{ entry.path }}
                  </td>
                  <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                    {{ formatLocation(entry) }}
                  </td>
                  <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                    {{ entry.referrer || '(direct)' }}
                  </td>
                  <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                    {{ formatSource(entry) }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 font-mono text-xs text-gray-500">
                    {{ entry.visitorId.slice(0, 8) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const PASSWORD_STORAGE_KEY = '4es_analytics_password'

const password = ref('')
const storedPassword = ref('')
const loading = ref(false)
const error = ref('')
const data = ref(null)
const dataLocation = ref('S3 analytics file')

const isAuthenticated = computed(() => Boolean(storedPassword.value))

useHead({
  title: 'Analytics',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

onMounted(() => {
  const saved = sessionStorage.getItem(PASSWORD_STORAGE_KEY)
  if (saved) {
    storedPassword.value = saved
    loadData()
  }
})

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleString()
}

function formatSource(entry) {
  if (entry.utmSource) {
    const parts = [entry.utmSource, entry.utmMedium, entry.utmCampaign].filter(Boolean)
    return parts.join(' / ')
  }

  return '—'
}

function formatLocation(entry) {
  const parts = [entry.city, entry.region, entry.country].filter(Boolean)
  return parts.join(', ') || 'Unknown'
}

async function loadData() {
  if (!storedPassword.value) {
    return
  }

  loading.value = true
  error.value = ''

  try {
    data.value = await $fetch('/api/analytics/entries', {
      headers: {
        'X-Analytics-Password': storedPassword.value,
      },
    })
    dataLocation.value = data.value?.dataFile || dataLocation.value
  } catch (err) {
    error.value = err?.data?.message || 'Failed to load analytics'
    storedPassword.value = ''
    sessionStorage.removeItem(PASSWORD_STORAGE_KEY)
  } finally {
    loading.value = false
  }
}

async function login() {
  if (!password.value) {
    error.value = 'Password is required'
    return
  }

  loading.value = true
  error.value = ''
  storedPassword.value = password.value

  try {
    await loadData()
    sessionStorage.setItem(PASSWORD_STORAGE_KEY, password.value)
    password.value = ''
  } catch {
    storedPassword.value = ''
  } finally {
    loading.value = false
  }
}

function logout() {
  storedPassword.value = ''
  password.value = ''
  data.value = null
  error.value = ''
  sessionStorage.removeItem(PASSWORD_STORAGE_KEY)
}
</script>
