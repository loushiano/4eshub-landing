<template>
  <div>
    <div v-for="clause in clauses" :key="clause.id">
      <div
        class="flex items-center justify-between border-b border-neutral-100 cursor-pointer transition-colors"
        :class="
          selectedClauseId === clause.id ? 'bg-gray-200' : 'hover:bg-gray-100'
        "
        :style="{
          paddingLeft: `${Math.min(depth + 1, 4) * 0.75}rem`,
          paddingRight: '1rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
        }"
        @click="handleClick(clause)"
      >
        <div class="min-w-0 flex-1">
          <div class="text-sm font-medium text-neutral-900 truncate">
            <span class="text-neutral-500 mr-2">{{ clause.id }}</span>
            {{ clause.title }}
          </div>
          <span
            v-if="!clause.subclauses?.length"
            class="text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase mt-1 inline-block"
            :class="statusClass(clause.id)"
          >
            {{ statusLabel(clause.id) }}
          </span>
        </div>
        <div class="flex items-center gap-2 shrink-0 ml-2">
          <span v-if="clause.subclauses?.length">
            <i
              class="fa-solid text-xs ml-2"
              :class="expanded[clause.id] ? 'fa-chevron-down' : 'fa-chevron-right'"
            />
          </span>
          <span v-else>
            <i
              class="fa-solid fa-arrow-right text-xs ml-2"
              :class="
                selectedClauseId === clause.id
                  ? 'text-primary-600'
                  : 'text-neutral-300'
              "
            />
          </span>
        </div>
      </div>

      <IsoClauseTree
        v-if="clause.subclauses?.length && expanded[clause.id]"
        :clauses="clause.subclauses"
        :selected-clause-id="selectedClauseId"
        :progress-by-clause="progressByClause"
        :expanded-state="expanded"
        :depth="depth + 1"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export type ChecklistClause = {
  id: string;
  title: string;
  requirements: string[];
  subclauses?: ChecklistClause[];
};

export type ClauseProgress = {
  outOfScope?: boolean;
  notes?: string;
  files?: Array<{ url: string; name: string }>;
};

defineOptions({ name: "IsoClauseTree" });

const props = withDefaults(
  defineProps<{
    clauses: ChecklistClause[];
    selectedClauseId: string | null;
    progressByClause: Record<string, ClauseProgress>;
    expandedState?: Record<string, boolean>;
    depth?: number;
  }>(),
  {
    depth: 0,
  },
);

const emit = defineEmits<{
  select: [clause: ChecklistClause];
}>();

const expanded = props.expandedState ?? reactive<Record<string, boolean>>({});
const depth = props.depth ?? 0;

const isLeaf = (clause: ChecklistClause) => !clause.subclauses?.length;

const handleClick = (clause: ChecklistClause) => {
  if (clause.subclauses?.length) {
    expanded[clause.id] = !expanded[clause.id];
  }
  emit("select", clause);
};

const statusLabel = (clauseId: string) => {
  const progress = props.progressByClause[clauseId];
  if (progress?.outOfScope) return "Out of scope";
  if (progress?.files?.length || progress?.notes?.trim()) return "In progress";
  return "Not started";
};

const statusClass = (clauseId: string) => {
  const progress = props.progressByClause[clauseId];
  if (progress?.outOfScope) return "bg-neutral-200 text-neutral-600";
  if (progress?.files?.length || progress?.notes?.trim()) {
    return "bg-green-100 text-green-700";
  }
  return "bg-amber-100 text-amber-800";
};

watch(
  () => props.clauses,
  (clauses) => {
    for (const clause of clauses || []) {
      if (clause.subclauses?.length && expanded[clause.id] === undefined) {
        expanded[clause.id] = true;
      }
    }
  },
  { immediate: true, deep: true },
);

defineExpose({ isLeaf });
</script>
