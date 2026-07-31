<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col">
    <header
      class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50"
    >
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-12" />
        </NuxtLink>
        <div class="flex items-center gap-3">
          <span
            class="hidden sm:inline-flex px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium"
          >
            {{ modeLabel }}
          </span>
          <button
            v-if="!isAuthenticated"
            type="button"
            class="btn-secondary !py-2.5 !px-5 !text-sm"
            @click="openLoadModal"
          >
            Load tracked data
          </button>
          <button
            v-else
            type="button"
            class="btn-secondary !py-2.5 !px-5 !text-sm"
            :disabled="saving"
            @click="saveProgress"
          >
            {{ saving ? "Saving..." : "Save progress" }}
          </button>
        </div>
      </div>
    </header>

    <div class="bg-white border-b border-neutral-200 py-6">
      <div class="container mx-auto px-6">
        <NuxtLink
          :to="overviewPath"
          class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-4 text-sm"
        >
          <i class="fa-solid fa-arrow-left mr-2"></i>
          Back to ISO {{ standardSlug }}
        </NuxtLink>
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 class="text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              {{ framework?.name || standard }} checklist
            </h1>
            <p class="mt-2 text-[#6e6e73] max-w-2xl">
              Browse every clause requirement, add notes, and mark clauses out
              of scope. Create an account when you save or upload — or load
              tracked data if you already have one.
            </p>
          </div>
          <div
            v-if="framework"
            class="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium"
          >
            {{ coverageLabel }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-24 flex-1">
      <i class="fa-solid fa-spinner fa-spin text-3xl text-primary-600"></i>
    </div>

    <div
      v-else-if="error"
      class="container mx-auto px-6 py-16 text-center text-red-600"
    >
      {{ error }}
    </div>

    <div
      v-else-if="framework?.clauses?.length"
      class="flex flex-1 overflow-hidden min-h-0"
    >
      <aside
        class="w-full lg:w-80 border-r border-neutral-200 bg-white overflow-y-auto shrink-0 max-h-[70vh] lg:max-h-none"
      >
        <div class="p-4 border-b border-neutral-100 bg-neutral-50">
          <h3
            class="text-xs font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-2"
          >
            <i class="fa-solid fa-sitemap"></i>
            Clause hierarchy
          </h3>
        </div>
        <IsoClauseTree
          :clauses="framework.clauses"
          :selected-clause-id="selectedClauseId"
          :progress-by-clause="progressByClause"
          @select="selectClause"
        />
      </aside>

      <section class="flex-1 overflow-y-auto p-6 lg:p-8">
        <template v-if="selectedClause">
          <div class="flex items-start gap-3 mb-6">
            <span
              class="bg-neutral-900 text-white font-mono text-sm px-3 py-1 rounded shrink-0"
            >
              {{ selectedClause.id }}
            </span>
            <h2 class="text-xl font-semibold text-neutral-900">
              {{ selectedClause.title }}
            </h2>
          </div>

          <div
            class="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm mb-8"
          >
            <ul class="space-y-3">
              <li
                v-for="(requirement, index) in selectedClause.requirements"
                :key="`${selectedClause.id}-${index}`"
                class="flex gap-3 text-neutral-700"
              >
                <span
                  v-if="
                    selectedClause.requirements.length > 1 &&
                    index > 0 &&
                    index <
                      selectedClause.requirements.length -
                        (hasTrailingRequirement ? 1 : 0)
                  "
                  class="font-semibold text-neutral-500 shrink-0"
                >
                  {{ letterLabel(index - 1) }})
                </span>
                <span>{{ requirement }}</span>
              </li>
            </ul>

            <div
              v-if="selectedClauseSubclauses.length"
              class="mt-6 pt-6 border-t border-neutral-100"
            >
              <p
                class="text-[10px] font-semibold uppercase text-neutral-500 mb-3"
              >
                Subclauses
              </p>
              <ul class="space-y-2">
                <li
                  v-for="subclause in selectedClauseSubclauses"
                  :key="subclause.id"
                >
                  <button
                    type="button"
                    class="w-full flex items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-neutral-50"
                    @click="selectClause(subclause)"
                  >
                    <span class="font-mono text-xs text-neutral-500 shrink-0">{{
                      subclause.id
                    }}</span>
                    <span class="text-sm text-neutral-800">{{
                      subclause.title
                    }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-if="isLeafClause"
            class="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-6"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p
                  class="text-[10px] font-semibold uppercase text-neutral-500"
                >
                  Clause actions
                </p>
                <p class="text-sm text-neutral-600 mt-1">
                  {{
                    isAuthenticated
                      ? "Changes are saved when you click Save, or immediately after a file upload."
                      : "You can draft notes freely. Saving or uploading will ask you to create an account."
                  }}
                </p>
              </div>
              <button
                type="button"
                class="text-xs font-semibold px-3 py-2 rounded-md border transition-colors"
                :class="
                  currentProgress.outOfScope
                    ? 'border-neutral-300 bg-neutral-100 text-neutral-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                "
                @click="toggleOutOfScope"
              >
                {{
                  currentProgress.outOfScope
                    ? "Mark in scope"
                    : "Mark out of scope"
                }}
              </button>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">
                Notes
              </label>
              <textarea
                v-model="notesDraft"
                rows="5"
                :disabled="currentProgress.outOfScope"
                placeholder="Describe how you meet this clause, gaps, or next steps"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-50"
                @change="persistNotesLocally"
              />
              <div class="mt-3 flex justify-end">
                <button
                  type="button"
                  class="btn-primary !py-2 !px-4 !text-sm"
                  :disabled="currentProgress.outOfScope || saving"
                  @click="onSaveNotes"
                >
                  {{ saving ? "Saving..." : "Save notes" }}
                </button>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-3">
                <label class="block text-sm font-medium text-neutral-700">
                  Evidence files
                </label>
                <label
                  class="btn-secondary !py-2 !px-4 !text-xs cursor-pointer"
                  :class="{
                    'opacity-50 pointer-events-none':
                      currentProgress.outOfScope || uploading,
                  }"
                >
                  <input
                    type="file"
                    class="hidden"
                    :disabled="currentProgress.outOfScope || uploading"
                    @change="onFileSelected"
                  />
                  {{ uploading ? "Uploading..." : "Upload file" }}
                </label>
              </div>
              <ul
                v-if="currentProgress.files?.length"
                class="space-y-2"
              >
                <li
                  v-for="file in currentProgress.files"
                  :key="file.url"
                  class="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                >
                  <span class="truncate text-neutral-800">
                    <i class="fa-solid fa-paperclip mr-2 text-neutral-400"></i>
                    {{ file.name }}
                  </span>
                  <button
                    type="button"
                    class="shrink-0 text-primary-600 hover:text-primary-700 text-xs font-semibold"
                    :disabled="!isAuthenticated || downloadingUrl === file.url"
                    @click="downloadFile(file.url)"
                  >
                    {{
                      downloadingUrl === file.url ? "Opening..." : "Download"
                    }}
                  </button>
                </li>
              </ul>
              <p v-else class="text-sm text-neutral-500">
                No files uploaded for this clause yet.
              </p>
            </div>
          </div>
        </template>
      </section>
    </div>

    <IsoTrackerModal
      v-model="showModal"
      :standard="standard"
      :initial-tab="modalInitialTab"
      :intent="modalIntent"
      @unlocked="onUnlocked"
    />
  </div>
</template>

<script setup lang="ts">
import type { ChecklistClause, ClauseProgress } from "./IsoClauseTree.vue";
import {
  clearTrackerSession,
  loadTrackerSession,
  type TrackerFramework,
} from "~/utils/isoTrackerStorage";

const props = defineProps<{
  standard: TrackerFramework;
}>();

const standardSlug = computed(() => props.standard.replace("ISO ", ""));
const overviewPath = computed(() => `/iso-${standardSlug.value}`);

const loading = ref(true);
const saving = ref(false);
const uploading = ref(false);
const downloadingUrl = ref<string | null>(null);
const error = ref("");
const framework = ref<any>(null);
const selectedClauseId = ref<string | null>(null);
const selectedClause = ref<ChecklistClause | null>(null);
const showModal = ref(false);
const isAuthenticated = ref(false);
const trackerId = ref<string | null>(null);
const pin = ref("");
const progressByClause = reactive<Record<string, ClauseProgress>>({});
const notesDraft = ref("");
const modalInitialTab = ref<"start" | "continue">("start");
const modalIntent = ref<"save" | "load">("save");
const pendingAction = ref<"save" | "upload" | null>(null);
const pendingUploadFile = ref<File | null>(null);

const modeLabel = computed(() =>
  isAuthenticated.value ? "Tracking saved" : "Drafting locally",
);

const isLeafClause = computed(
  () => !!selectedClause.value && !selectedClause.value.subclauses?.length,
);

const selectedClauseSubclauses = computed(
  () => selectedClause.value?.subclauses || [],
);

const currentProgress = computed(
  () => progressByClause[selectedClauseId.value || ""] || {},
);

const hasTrailingRequirement = computed(() => {
  if (!selectedClause.value || selectedClause.value.requirements.length <= 2) {
    return false;
  }
  const last =
    selectedClause.value.requirements[
      selectedClause.value.requirements.length - 1
    ];
  return last.endsWith(".") && last.split(" ").length > 4;
});

const letterLabel = (index: number) => String.fromCharCode(97 + index);

const flattenLeafClauses = (clauses: ChecklistClause[]): ChecklistClause[] =>
  clauses.flatMap((clause) =>
    clause.subclauses?.length
      ? flattenLeafClauses(clause.subclauses)
      : [clause],
  );

const coverageLabel = computed(() => {
  if (!framework.value?.clauses) return "";
  const leaves = flattenLeafClauses(framework.value.clauses);
  const inScope = leaves.filter(
    (clause) => !progressByClause[clause.id]?.outOfScope,
  );
  const covered = inScope.filter((clause) => {
    const progress = progressByClause[clause.id];
    return Boolean(progress?.files?.length || progress?.notes?.trim());
  });
  if (!inScope.length) return "0% covered";
  return `${Math.round((covered.length / inScope.length) * 100)}% covered`;
});

const findFirstLeaf = (clauses: ChecklistClause[]): ChecklistClause | null => {
  for (const clause of clauses) {
    if (clause.subclauses?.length) {
      const nested = findFirstLeaf(clause.subclauses);
      if (nested) return nested;
    } else {
      return clause;
    }
  }
  return null;
};

const selectClause = (clause: ChecklistClause) => {
  selectedClauseId.value = clause.id;
  selectedClause.value = clause;
  notesDraft.value = progressByClause[clause.id]?.notes || "";
};

const persistNotesLocally = () => {
  if (!selectedClauseId.value) return;
  progressByClause[selectedClauseId.value] = {
    ...(progressByClause[selectedClauseId.value] || {}),
    notes: notesDraft.value,
  };
};

const toggleOutOfScope = () => {
  if (!selectedClauseId.value) return;
  const current = progressByClause[selectedClauseId.value] || {};
  progressByClause[selectedClauseId.value] = {
    ...current,
    outOfScope: !current.outOfScope,
  };
};

const applyTrackerData = (tracker: { clauses?: Record<string, ClauseProgress> }) => {
  Object.keys(progressByClause).forEach((key) => delete progressByClause[key]);
  Object.entries(tracker?.clauses || {}).forEach(([clauseId, progress]) => {
    progressByClause[clauseId] = { ...progress };
  });
  if (selectedClauseId.value) {
    notesDraft.value = progressByClause[selectedClauseId.value]?.notes || "";
  }
};

const openAuthModal = (options: {
  intent: "save" | "load";
  initialTab: "start" | "continue";
  pending?: "save" | "upload" | null;
}) => {
  modalIntent.value = options.intent;
  modalInitialTab.value = options.initialTab;
  pendingAction.value = options.pending ?? null;
  showModal.value = true;
};

const openLoadModal = () => {
  pendingUploadFile.value = null;
  openAuthModal({ intent: "load", initialTab: "continue", pending: null });
};

const requireAuthOr = async (action: "save" | "upload") => {
  if (isAuthenticated.value && trackerId.value && pin.value) {
    return true;
  }
  openAuthModal({
    intent: "save",
    initialTab: "start",
    pending: action,
  });
  return false;
};

const onUnlocked = async (payload: {
  id: string;
  email: string;
  pin: string;
  tracker: any;
}) => {
  const action = pendingAction.value;
  const fileToUpload = pendingUploadFile.value;
  pendingAction.value = null;
  pendingUploadFile.value = null;

  trackerId.value = payload.id;
  pin.value = payload.pin;
  isAuthenticated.value = true;

  // After save/upload auth: keep local drafts and merge onto remote tracker data.
  if (action === "save" || action === "upload") {
    const localSnapshot = JSON.parse(
      JSON.stringify(progressByClause),
    ) as Record<string, ClauseProgress>;
    applyTrackerData(payload.tracker || { clauses: {} });
    Object.entries(localSnapshot).forEach(([clauseId, local]) => {
      const remote = progressByClause[clauseId] || {};
      progressByClause[clauseId] = {
        ...remote,
        notes: local.notes?.trim() ? local.notes : remote.notes,
        outOfScope: local.outOfScope ?? remote.outOfScope,
        files: remote.files?.length ? remote.files : local.files,
      };
    });
    if (selectedClauseId.value) {
      notesDraft.value = progressByClause[selectedClauseId.value]?.notes || "";
    }
  } else {
    applyTrackerData(payload.tracker || { clauses: {} });
  }

  if (action === "save") {
    await saveProgress();
  } else if (action === "upload" && fileToUpload && selectedClauseId.value) {
    await uploadFile(fileToUpload);
  }
};

watch(showModal, (open) => {
  if (!open && !isAuthenticated.value) {
    pendingAction.value = null;
    pendingUploadFile.value = null;
  }
});

const saveProgress = async () => {
  if (!(await requireAuthOr("save"))) return;
  if (!trackerId.value || !pin.value) return;

  persistNotesLocally();
  saving.value = true;
  try {
    await $fetch(`/api/trackers/${trackerId.value}`, {
      method: "PUT",
      body: {
        pin: pin.value,
        tracker: { clauses: { ...progressByClause } },
      },
    });
  } catch (err: any) {
    error.value =
      err?.data?.message || err?.statusMessage || "Failed to save progress";
  } finally {
    saving.value = false;
  }
};

const onSaveNotes = async () => {
  persistNotesLocally();
  await saveProgress();
};

const downloadFile = async (fileUrl: string) => {
  if (!trackerId.value || !pin.value || !fileUrl) return;

  downloadingUrl.value = fileUrl;
  try {
    const response = await $fetch<{ url: string }>(
      `/api/trackers/${trackerId.value}/files/download`,
      {
        method: "POST",
        body: {
          pin: pin.value,
          fileUrl,
        },
      },
    );
    if (response?.url) {
      window.open(response.url, "_blank", "noopener,noreferrer");
    }
  } catch (err: any) {
    error.value =
      err?.data?.message || err?.statusMessage || "Failed to download file";
  } finally {
    downloadingUrl.value = null;
  }
};

const uploadFile = async (file: File) => {
  if (!trackerId.value || !selectedClauseId.value || !pin.value) return;

  uploading.value = true;
  try {
    persistNotesLocally();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("pin", pin.value);
    formData.append("clauseId", selectedClauseId.value);

    const response = await $fetch<any>(
      `/api/trackers/${trackerId.value}/files`,
      {
        method: "POST",
        body: formData,
      },
    );
    applyTrackerData(response.tracker || { clauses: {} });
  } catch (err: any) {
    error.value =
      err?.data?.message || err?.statusMessage || "Failed to upload file";
  } finally {
    uploading.value = false;
  }
};

const onFileSelected = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file || !selectedClauseId.value) {
    return;
  }

  if (!(await requireAuthOr("upload"))) {
    pendingUploadFile.value = file;
    input.value = "";
    return;
  }

  await uploadFile(file);
  input.value = "";
};

const restoreSession = async () => {
  const session = loadTrackerSession(props.standard);
  if (!session) return;

  try {
    const loaded = await $fetch<any>("/api/trackers/continue", {
      method: "POST",
      body: {
        email: session.email,
        pin: session.pin,
        standard: props.standard,
      },
    });
    trackerId.value = loaded.id;
    pin.value = session.pin;
    isAuthenticated.value = true;
    applyTrackerData(loaded.tracker || { clauses: {} });
  } catch {
    clearTrackerSession(props.standard);
  }
};

onMounted(async () => {
  loading.value = true;
  error.value = "";
  try {
    framework.value = await $fetch("/api/standards", {
      query: { name: props.standard },
    });
    const firstLeaf = findFirstLeaf(framework.value.clauses || []);
    if (firstLeaf) {
      selectClause(firstLeaf);
    }
    await restoreSession();
  } catch (err: any) {
    error.value =
      err?.data?.message ||
      err?.statusMessage ||
      "Failed to load standard checklist";
  } finally {
    loading.value = false;
  }
});

useSeoMeta({
  title: `${props.standard} Clause Checklist`,
  description: `Browse the ${props.standard} clause hierarchy, mark progress, add notes, and upload evidence with 4ES Hub.`,
  ogTitle: `${props.standard} Clause Checklist | 4ES Hub`,
  ogDescription: `Interactive ${props.standard} checklist — draft notes freely, then save or load tracked data.`,
});
</script>
