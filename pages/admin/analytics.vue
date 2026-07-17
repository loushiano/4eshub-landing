<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-10">
      <div class="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Site Analytics</h1>
          <p class="mt-1 text-sm text-gray-500">
            Stored in
            <code class="rounded bg-gray-200 px-1.5 py-0.5 break-all">{{
              activeDataLocation
            }}</code>
          </p>
        </div>
        <NuxtLink
          to="/"
          class="text-sm font-medium text-primary-600 hover:text-primary-700"
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
            class="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
          <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-primary-600 px-4 py-2.5 font-medium text-white hover:bg-primary-700 disabled:opacity-60"
          >
            {{ loading ? "Checking..." : "View analytics" }}
          </button>
        </form>
      </div>

      <div v-else class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div
            class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'visits'"
              :class="tabClass('visits')"
              @click="activeTab = 'visits'"
            >
              Visits
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'checklist'"
              :class="tabClass('checklist')"
              @click="activeTab = 'checklist'"
            >
              Checklist fillings
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <div
              class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm"
              role="group"
              aria-label="Time range"
            >
              <button
                v-for="range in RANGE_OPTIONS"
                :key="range.id"
                type="button"
                :class="rangeClass(range.id)"
                @click="selectedRange = range.id"
              >
                {{ range.label }}
              </button>
            </div>
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

        <div v-if="activeTab === 'visits'" class="space-y-6">
          <p class="text-sm text-gray-500">
            Showing {{ visitStats.total }} visits in
            {{ activeRangeLabel.toLowerCase() }}
          </p>

          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Total visits</p>
              <p class="mt-1 text-3xl font-bold">{{ visitStats.total }}</p>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Unique visitors</p>
              <p class="mt-1 text-3xl font-bold">
                {{ visitStats.uniqueVisitors }}
              </p>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Top page</p>
              <p class="mt-1 truncate text-lg font-semibold">
                {{ visitStats.topPages[0]?.path || "—" }}
              </p>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div class="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 class="text-lg font-semibold">Unique visits trend</h2>
                <p class="text-sm text-gray-500">
                  Unique visitors per
                  {{ activeRange.bucket === "hour" ? "hour" : "day" }}
                </p>
              </div>
              <p class="text-sm text-gray-500">
                Peak:
                <span class="font-semibold text-gray-800">{{
                  visitTrendPeak
                }}</span>
              </p>
            </div>
            <div v-if="visitTrend.maxValue === 0" class="py-16 text-center text-sm text-gray-400">
              No visits in this range
            </div>
            <div v-else class="w-full overflow-x-auto">
              <svg
                :viewBox="`0 0 ${chartWidth} ${chartHeight}`"
                class="h-64 w-full min-w-[480px]"
                role="img"
                :aria-label="`Unique visits trend for ${activeRangeLabel}`"
              >
                <defs>
                  <linearGradient id="visitTrendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#253fa2" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#253fa2" stop-opacity="0.02" />
                  </linearGradient>
                </defs>

                <line
                  v-for="tick in yTicks"
                  :key="`grid-${tick}`"
                  :x1="chartPadding.left"
                  :x2="chartWidth - chartPadding.right"
                  :y1="yScale(tick)"
                  :y2="yScale(tick)"
                  stroke="#e5e7eb"
                  stroke-width="1"
                />

                <path :d="visitAreaPath" fill="url(#visitTrendFill)" />
                <polyline
                  :points="visitLinePoints"
                  fill="none"
                  stroke="#253fa2"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <circle
                  v-for="(point, index) in visitTrend.points"
                  :key="`dot-${point.key}`"
                  :cx="xScale(index)"
                  :cy="yScale(point.value)"
                  r="3.5"
                  fill="#253fa2"
                >
                  <title>{{ point.label }}: {{ point.value }} unique</title>
                </circle>

                <text
                  v-for="tick in yTicks"
                  :key="`ylabel-${tick}`"
                  :x="chartPadding.left - 8"
                  :y="yScale(tick) + 4"
                  text-anchor="end"
                  class="fill-gray-400"
                  font-size="11"
                >
                  {{ tick }}
                </text>

                <text
                  v-for="label in xLabels"
                  :key="`xlabel-${label.index}`"
                  :x="xScale(label.index)"
                  :y="chartHeight - 10"
                  text-anchor="middle"
                  class="fill-gray-500"
                  font-size="11"
                >
                  {{ label.text }}
                </text>
              </svg>
            </div>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 class="mb-4 text-lg font-semibold">Top pages</h2>
              <ul class="space-y-2">
                <li
                  v-for="page in visitStats.topPages"
                  :key="page.path"
                  class="flex items-center justify-between text-sm"
                >
                  <span class="truncate pr-4">{{ page.path }}</span>
                  <span class="font-medium text-gray-700">{{ page.count }}</span>
                </li>
                <li
                  v-if="!visitStats.topPages.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>

            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 class="mb-4 text-lg font-semibold">Top referrers</h2>
              <ul class="space-y-2">
                <li
                  v-for="item in visitStats.topReferrers"
                  :key="item.referrer"
                  class="flex items-center justify-between gap-4 text-sm"
                >
                  <span class="truncate">{{ item.referrer }}</span>
                  <span class="font-medium text-gray-700">{{ item.count }}</span>
                </li>
                <li
                  v-if="!visitStats.topReferrers.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>

            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 class="mb-4 text-lg font-semibold">Top countries</h2>
              <ul class="space-y-2">
                <li
                  v-for="item in visitStats.topCountries"
                  :key="item.country"
                  class="flex items-center justify-between gap-4 text-sm"
                >
                  <span class="truncate">{{ item.country }}</span>
                  <span class="font-medium text-gray-700">{{ item.count }}</span>
                </li>
                <li
                  v-if="!visitStats.topCountries.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>
          </div>

          <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Time
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Page
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Location
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Referrer
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Source
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Visitor
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr
                    v-for="entry in filteredVisitEntries"
                    :key="entry.id"
                  >
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
                      {{ entry.referrer || "(direct)" }}
                    </td>
                    <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                      {{ formatSource(entry) }}
                    </td>
                    <td
                      class="whitespace-nowrap px-4 py-3 font-mono text-xs text-gray-500"
                    >
                      {{ entry.visitorId.slice(0, 8) }}
                    </td>
                  </tr>
                  <tr v-if="!filteredVisitEntries.length">
                    <td colspan="6" class="px-4 py-8 text-center text-gray-400">
                      No visits in this range
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else class="space-y-6">
          <p class="text-sm text-gray-500">
            Showing {{ filteredChecklistEntries.length }} checklist steps in
            {{ activeRangeLabel.toLowerCase() }}
          </p>

          <div class="grid gap-4 md:grid-cols-4">
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Sessions started</p>
              <p class="mt-1 text-3xl font-bold">
                {{ checklistStats.sessionsStarted }}
              </p>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Sessions completed</p>
              <p class="mt-1 text-3xl font-bold">
                {{ checklistStats.sessionsCompleted }}
              </p>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Step events</p>
              <p class="mt-1 text-3xl font-bold">
                {{ checklistStats.totalEvents }}
              </p>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-sm text-gray-500">Unique visitors</p>
              <p class="mt-1 text-3xl font-bold">
                {{ checklistStats.uniqueVisitors }}
              </p>
            </div>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">Top steps</h3>
              <ul class="space-y-2">
                <li
                  v-for="item in checklistStats.topSteps"
                  :key="item.step"
                  class="flex items-center justify-between text-sm"
                >
                  <span class="truncate pr-4">{{ item.step }}</span>
                  <span class="font-medium text-gray-700">{{ item.count }}</span>
                </li>
                <li
                  v-if="!checklistStats.topSteps.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">Standards</h3>
              <ul class="space-y-2">
                <li
                  v-for="item in checklistStats.topStandards"
                  :key="item.standard"
                  class="flex items-center justify-between text-sm"
                >
                  <span class="truncate pr-4">ISO {{ item.standard }}</span>
                  <span class="font-medium text-gray-700">{{ item.count }}</span>
                </li>
                <li
                  v-if="!checklistStats.topStandards.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>
            <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">Intents</h3>
              <ul class="space-y-2">
                <li
                  v-for="item in checklistStats.topIntents"
                  :key="item.intent"
                  class="flex items-center justify-between text-sm"
                >
                  <span class="truncate pr-4">{{
                    formatIntent(item.intent)
                  }}</span>
                  <span class="font-medium text-gray-700">{{ item.count }}</span>
                </li>
                <li
                  v-if="!checklistStats.topIntents.length"
                  class="text-sm text-gray-400"
                >
                  No data in this range
                </li>
              </ul>
            </div>
          </div>

          <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div class="border-b border-gray-100 px-4 py-3">
              <h3 class="font-semibold">Recent checklist steps</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Time
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Step
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Answer
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Standard
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Page
                    </th>
                    <th class="px-4 py-3 text-left font-medium text-gray-500">
                      Session
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr
                    v-for="entry in filteredChecklistEntries"
                    :key="entry.id"
                  >
                    <td class="whitespace-nowrap px-4 py-3 text-gray-600">
                      {{ formatTime(entry.timestamp) }}
                    </td>
                    <td class="px-4 py-3 font-medium">
                      <span>{{ entry.step }}</span>
                      <span
                        v-if="entry.clauseId"
                        class="ml-1 text-xs text-gray-500"
                      >
                        ({{ entry.clauseId }})
                      </span>
                      <span class="ml-1 text-xs text-gray-400">{{
                        entry.action
                      }}</span>
                    </td>
                    <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                      {{ entry.answer || "—" }}
                    </td>
                    <td class="whitespace-nowrap px-4 py-3 text-gray-600">
                      {{ entry.standard ? `ISO ${entry.standard}` : "—" }}
                    </td>
                    <td class="max-w-xs truncate px-4 py-3 text-gray-600">
                      {{ entry.path }}
                    </td>
                    <td
                      class="whitespace-nowrap px-4 py-3 font-mono text-xs text-gray-500"
                    >
                      {{ entry.sessionId.slice(0, 8) }}
                    </td>
                  </tr>
                  <tr v-if="!filteredChecklistEntries.length">
                    <td colspan="6" class="px-4 py-8 text-center text-gray-400">
                      No checklist fillings in this range
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const PASSWORD_STORAGE_KEY = "4es_analytics_password";

const RANGE_OPTIONS = [
  { id: "24h", label: "Last 24 hours", ms: 24 * 60 * 60 * 1000, bucket: "hour" },
  { id: "7d", label: "Last 7 days", ms: 7 * 24 * 60 * 60 * 1000, bucket: "day" },
  {
    id: "14d",
    label: "Last 2 weeks",
    ms: 14 * 24 * 60 * 60 * 1000,
    bucket: "day",
  },
  {
    id: "30d",
    label: "Last month",
    ms: 30 * 24 * 60 * 60 * 1000,
    bucket: "day",
  },
];

const chartWidth = 760;
const chartHeight = 240;
const chartPadding = { top: 16, right: 16, bottom: 36, left: 40 };

const password = ref("");
const storedPassword = ref("");
const loading = ref(false);
const error = ref("");
const data = ref(null);
const activeTab = ref("visits");
const selectedRange = ref("7d");

const isAuthenticated = computed(() => Boolean(storedPassword.value));

const activeRange = computed(
  () =>
    RANGE_OPTIONS.find((range) => range.id === selectedRange.value) ||
    RANGE_OPTIONS[1],
);

const activeRangeLabel = computed(() => activeRange.value.label);

const rangeStart = computed(() => Date.now() - activeRange.value.ms);

const activeDataLocation = computed(() => {
  if (activeTab.value === "checklist") {
    return data.value?.checklist?.dataFile || "S3 checklist file";
  }
  return data.value?.dataFile || "S3 analytics file";
});

const filteredVisitEntries = computed(() => {
  const entries = data.value?.entries || [];
  return entries.filter(
    (entry) => new Date(entry.timestamp).getTime() >= rangeStart.value,
  );
});

const filteredChecklistEntries = computed(() => {
  const entries = data.value?.checklist?.entries || [];
  return entries.filter(
    (entry) => new Date(entry.timestamp).getTime() >= rangeStart.value,
  );
});

const visitStats = computed(() => summarizeVisits(filteredVisitEntries.value));

const checklistStats = computed(() =>
  summarizeChecklist(filteredChecklistEntries.value),
);

const visitTrend = computed(() =>
  buildUniqueVisitTrend(
    filteredVisitEntries.value,
    activeRange.value,
    rangeStart.value,
  ),
);

const visitTrendPeak = computed(() =>
  visitTrend.value.points.reduce(
    (max, point) => Math.max(max, point.value),
    0,
  ),
);

const yTicks = computed(() => {
  const max = Math.max(visitTrend.value.maxValue, 1);
  const step = Math.max(1, Math.ceil(max / 4));
  const ticks = [];
  for (let value = 0; value <= max; value += step) {
    ticks.push(value);
  }
  if (ticks[ticks.length - 1] !== max) {
    ticks.push(max);
  }
  return ticks;
});

const xLabels = computed(() => {
  const points = visitTrend.value.points;
  if (!points.length) return [];

  const maxLabels = activeRange.value.bucket === "hour" ? 6 : 7;
  const step = Math.max(1, Math.ceil(points.length / maxLabels));
  const labels = [];

  for (let index = 0; index < points.length; index += step) {
    labels.push({ index, text: points[index].label });
  }

  const lastIndex = points.length - 1;
  if (labels[labels.length - 1]?.index !== lastIndex) {
    labels.push({ index: lastIndex, text: points[lastIndex].label });
  }

  return labels;
});

const visitLinePoints = computed(() =>
  visitTrend.value.points
    .map((point, index) => `${xScale(index)},${yScale(point.value)}`)
    .join(" "),
);

const visitAreaPath = computed(() => {
  const points = visitTrend.value.points;
  if (!points.length) return "";

  const top = points
    .map((point, index) => `${xScale(index)},${yScale(point.value)}`)
    .join(" ");
  const baselineY = yScale(0);
  const firstX = xScale(0);
  const lastX = xScale(points.length - 1);

  return `M ${firstX} ${baselineY} L ${top} L ${lastX} ${baselineY} Z`;
});

useHead({
  title: "Analytics",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

onMounted(() => {
  const saved = sessionStorage.getItem(PASSWORD_STORAGE_KEY);
  if (saved) {
    storedPassword.value = saved;
    loadData();
  }
});

function tabClass(tab) {
  const isActive = activeTab.value === tab;
  return [
    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary-600 text-white"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
  ];
}

function rangeClass(rangeId) {
  const isActive = selectedRange.value === rangeId;
  return [
    "rounded-md px-3 py-2 text-xs font-medium transition-colors sm:text-sm",
    isActive
      ? "bg-primary-600 text-white"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
  ];
}

function xScale(index) {
  const count = Math.max(visitTrend.value.points.length - 1, 1);
  const innerWidth =
    chartWidth - chartPadding.left - chartPadding.right;
  return chartPadding.left + (index / count) * innerWidth;
}

function yScale(value) {
  const max = Math.max(visitTrend.value.maxValue, 1);
  const innerHeight =
    chartHeight - chartPadding.top - chartPadding.bottom;
  return (
    chartPadding.top + innerHeight - (value / max) * innerHeight
  );
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleString();
}

function formatSource(entry) {
  if (entry.utmSource) {
    const parts = [entry.utmSource, entry.utmMedium, entry.utmCampaign].filter(
      Boolean,
    );
    return parts.join(" / ");
  }

  return "—";
}

function formatLocation(entry) {
  const parts = [entry.city, entry.region, entry.country].filter(Boolean);
  return parts.join(", ") || "Unknown";
}

function formatIntent(intent) {
  const map = {
    certification_body: "Certification body",
    implementation_help: "Implementation help",
    management_help: "Management help",
  };
  return map[intent] || intent;
}

function topCounted(counts, limit = 10) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

function summarizeVisits(entries) {
  const pageCounts = {};
  const referrerCounts = {};
  const countryCounts = {};

  for (const entry of entries) {
    pageCounts[entry.path] = (pageCounts[entry.path] || 0) + 1;

    const referrer = entry.referrer || "(direct)";
    referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1;

    const country = entry.country || "Unknown";
    countryCounts[country] = (countryCounts[country] || 0) + 1;
  }

  return {
    total: entries.length,
    uniqueVisitors: new Set(entries.map((entry) => entry.visitorId)).size,
    topPages: topCounted(pageCounts).map(({ key, count }) => ({
      path: key,
      count,
    })),
    topReferrers: topCounted(referrerCounts).map(({ key, count }) => ({
      referrer: key,
      count,
    })),
    topCountries: topCounted(countryCounts).map(({ key, count }) => ({
      country: key,
      count,
    })),
  };
}

function summarizeChecklist(entries) {
  const sessions = new Set(entries.map((entry) => entry.sessionId));
  const completedSessions = new Set(
    entries
      .filter(
        (entry) =>
          entry.step === "thank_you" ||
          (entry.step === "email" && entry.action === "submit"),
      )
      .map((entry) => entry.sessionId),
  );
  const startedSessions = new Set(
    entries
      .filter((entry) => entry.step === "seeking_cert")
      .map((entry) => entry.sessionId),
  );

  const stepCounts = {};
  const standardCounts = {};
  const intentCounts = {};

  for (const entry of entries) {
    const stepKey =
      entry.step === "clause_questions" && entry.clauseId
        ? `clause_${entry.clauseId}`
        : entry.step;
    stepCounts[stepKey] = (stepCounts[stepKey] || 0) + 1;

    if (entry.standard) {
      standardCounts[entry.standard] =
        (standardCounts[entry.standard] || 0) + 1;
    }

    if (
      entry.intent &&
      (entry.step === "email" || entry.step === "thank_you")
    ) {
      intentCounts[entry.intent] = (intentCounts[entry.intent] || 0) + 1;
    }
  }

  return {
    totalEvents: entries.length,
    sessionsStarted: startedSessions.size || sessions.size,
    sessionsCompleted: completedSessions.size,
    uniqueVisitors: new Set(entries.map((entry) => entry.visitorId)).size,
    topSteps: topCounted(stepCounts, 15).map(({ key, count }) => ({
      step: key,
      count,
    })),
    topStandards: topCounted(standardCounts, 20).map(({ key, count }) => ({
      standard: key,
      count,
    })),
    topIntents: topCounted(intentCounts, 20).map(({ key, count }) => ({
      intent: key,
      count,
    })),
  };
}

function startOfHour(date) {
  const value = new Date(date);
  value.setMinutes(0, 0, 0);
  return value;
}

function startOfDay(date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function bucketKey(date, bucket) {
  const value = bucket === "hour" ? startOfHour(date) : startOfDay(date);
  return value.toISOString();
}

function formatBucketLabel(isoKey, bucket) {
  const date = new Date(isoKey);
  if (bucket === "hour") {
    return date.toLocaleTimeString([], { hour: "numeric" });
  }
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

function buildUniqueVisitTrend(entries, range, sinceMs) {
  const bucketMs =
    range.bucket === "hour" ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
  const now = Date.now();
  const firstBucket =
    range.bucket === "hour"
      ? startOfHour(sinceMs).getTime()
      : startOfDay(sinceMs).getTime();

  const buckets = [];
  for (let time = firstBucket; time <= now; time += bucketMs) {
    const key = new Date(time).toISOString();
    buckets.push({
      key,
      label: formatBucketLabel(key, range.bucket),
      visitors: new Set(),
    });
  }

  const bucketMap = Object.fromEntries(
    buckets.map((bucket) => [bucket.key, bucket]),
  );

  for (const entry of entries) {
    const key = bucketKey(entry.timestamp, range.bucket);
    if (bucketMap[key]) {
      bucketMap[key].visitors.add(entry.visitorId);
    }
  }

  const points = buckets.map((bucket) => ({
    key: bucket.key,
    label: bucket.label,
    value: bucket.visitors.size,
  }));

  return {
    points,
    maxValue: points.reduce((max, point) => Math.max(max, point.value), 0),
  };
}

async function loadData() {
  if (!storedPassword.value) {
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    data.value = await $fetch("/api/analytics/entries", {
      query: { limit: 2000 },
      headers: {
        "X-Analytics-Password": storedPassword.value,
      },
    });
  } catch (err) {
    error.value = err?.data?.message || "Failed to load analytics";
    storedPassword.value = "";
    sessionStorage.removeItem(PASSWORD_STORAGE_KEY);
  } finally {
    loading.value = false;
  }
}

async function login() {
  if (!password.value) {
    error.value = "Password is required";
    return;
  }

  loading.value = true;
  error.value = "";
  storedPassword.value = password.value;

  try {
    await loadData();
    sessionStorage.setItem(PASSWORD_STORAGE_KEY, password.value);
    password.value = "";
  } catch {
    storedPassword.value = "";
  } finally {
    loading.value = false;
  }
}

function logout() {
  storedPassword.value = "";
  password.value = "";
  data.value = null;
  error.value = "";
  activeTab.value = "visits";
  selectedRange.value = "7d";
  sessionStorage.removeItem(PASSWORD_STORAGE_KEY);
}
</script>
