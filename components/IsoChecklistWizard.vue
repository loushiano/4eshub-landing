<template>
  <div class="iso-checklist-wizard">
    <div class="mb-6">
      <div
        class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4"
      >
        <i :class="['text-primary-600 text-2xl', stepIcon]"></i>
      </div>
      <p
        v-if="showProgress"
        class="text-xs font-medium uppercase tracking-wide text-primary-600 mb-2"
      >
        Step {{ progressStep }} of {{ progressTotal }}
      </p>
      <p
        v-if="step === 'clause_questions' && currentQuestion"
        class="text-sm text-gray-500 mb-2"
      >
        Clause {{ currentQuestion.clauseId }} —
        {{ currentQuestion.clauseTitle }}
      </p>
      <h2
        :id="titleId"
        class="text-2xl font-semibold text-gray-900 mb-2 tracking-tight"
      >
        {{ stepTitle }}
      </h2>
    </div>

    <div v-if="step === 'seeking_cert'" class="space-y-3">
      <button
        type="button"
        class="checklist-option"
        @click="answerSeekingCert('yes')"
      >
        Yes
      </button>
      <button
        type="button"
        class="checklist-option"
        @click="answerSeekingCert('already_certified')"
      >
        {{ alreadyCertifiedLabel }}
      </button>
    </div>

    <div v-else-if="step === 'select_standard'" class="space-y-3">
      <button
        v-for="item in multiStandards"
        :key="item.value"
        type="button"
        class="checklist-option"
        @click="answerStandard(item.value)"
      >
        {{ item.label }}
      </button>
      <button
        type="button"
        class="text-sm text-gray-500 hover:text-primary-600 mt-2"
        @click="goBack"
      >
        ← Back
      </button>
    </div>

    <div v-else-if="step === 'clause_questions'" class="space-y-3">
      <button
        type="button"
        class="checklist-option"
        @click="answerClause(true)"
      >
        Yes
      </button>
      <button
        type="button"
        class="checklist-option"
        @click="answerClause(false)"
      >
        No / not yet
      </button>
      <button
        type="button"
        class="text-sm text-gray-500 hover:text-primary-600 mt-2"
        @click="goBack"
      >
        ← Back
      </button>
    </div>

    <div v-else-if="step === 'manage_difficulty'" class="space-y-3">
      <button
        type="button"
        class="checklist-option"
        @click="answerManageDifficulty(true)"
      >
        Yes
      </button>
      <button
        type="button"
        class="checklist-option"
        @click="answerManageDifficulty(false)"
      >
        No
      </button>
      <button
        type="button"
        class="text-sm text-gray-500 hover:text-primary-600 mt-2"
        @click="goBack"
      >
        ← Back
      </button>
    </div>

    <div v-else-if="step === 'good_luck'" class="space-y-6">
      <div
        class="rounded-xl bg-gray-50 border border-gray-200 p-4 text-gray-700 leading-relaxed"
      >
        {{ goodLuckMessage }}
      </div>
      <button
        v-if="showClose"
        type="button"
        class="btn-primary w-full"
        @click="emit('close')"
      >
        Close
      </button>
      <button v-else type="button" class="btn-secondary w-full" @click="reset">
        Start over
      </button>
    </div>

    <form
      v-else-if="step === 'email'"
      class="space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div
        v-if="pathMessage"
        class="rounded-xl bg-primary-50 border border-primary-100 p-4 text-primary-800 leading-relaxed"
      >
        <p class="mb-2">{{ pathMessage }}</p>
        <p
          v-if="clauseAnswers.length"
          class="text-sm text-primary-700/80"
        >
          You answered yes to {{ yesCount }} of {{ questions.length }} key
          clause areas.
        </p>
      </div>
      <p class="text-gray-600 leading-relaxed">{{ emailPrompt }}</p>
      <div>
        <label
          :for="emailId"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Email address
        </label>
        <input
          :id="emailId"
          v-model="email"
          type="email"
          required
          placeholder="your@email.com"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
        />
      </div>

      <div
        v-if="status.message"
        :class="{
          'text-primary-700 bg-primary-50 p-3 rounded-lg': status.success,
          'text-red-700 bg-red-50 p-3 rounded-lg': !status.success,
        }"
      >
        {{ status.message }}
      </div>

      <button
        type="submit"
        class="btn-primary w-full"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "Submitting..." : "Done" }}
      </button>
      <button
        v-if="!status.success"
        type="button"
        class="text-sm text-gray-500 hover:text-primary-600 w-full text-center"
        @click="goBack"
      >
        ← Back
      </button>
    </form>

    <div v-else-if="step === 'thank_you'" class="space-y-6">
      <div
        class="rounded-xl bg-primary-50 border border-primary-100 p-4 text-primary-800 leading-relaxed"
      >
        Thank you! We have your details and will get in touch with you soon.
      </div>
      <button
        v-if="showClose"
        type="button"
        class="btn-primary w-full"
        @click="emit('close')"
      >
        Close
      </button>
      <button v-else type="button" class="btn-secondary w-full" @click="reset">
        Start over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getChecklistContent,
  type ChecklistStandardSlug,
} from "~/utils/checklistContent";
import {
  getReadinessQuestions,
  READINESS_PASS_THRESHOLD,
  type ReadinessQuestion,
} from "~/utils/readinessQuestions";

type Step =
  | "seeking_cert"
  | "select_standard"
  | "clause_questions"
  | "manage_difficulty"
  | "good_luck"
  | "email"
  | "thank_you";

type SeekingAnswer = "yes" | "already_certified" | null;
type Intent =
  | "certification_body"
  | "implementation_help"
  | "management_help"
  | null;

type ClauseAnswer = {
  clauseId: string;
  clauseTitle: string;
  question: string;
  answer: boolean;
};

const props = withDefaults(
  defineProps<{
    standard?: ChecklistStandardSlug;
    source?: string;
    showClose?: boolean;
  }>(),
  {
    source: "readiness",
    showClose: false,
  },
);

const emit = defineEmits<{
  close: [];
}>();

const multiStandards = [
  { value: "9001", label: "ISO 9001 — Quality Management" },
  { value: "14001", label: "ISO 14001 — Environmental Management" },
  { value: "45001", label: "ISO 45001 — Health & Safety" },
  { value: "other", label: "Other / multiple standards" },
] as const;

const fixedContent = computed(() =>
  props.standard ? getChecklistContent(props.standard) : null,
);

const step = ref<Step>("seeking_cert");
const seekingAnswer = ref<SeekingAnswer>(null);
const selectedStandard = ref<string | null>(props.standard ?? null);
const clauseIndex = ref(0);
const clauseAnswers = ref<ClauseAnswer[]>([]);
const intent = ref<Intent>(null);
const email = ref("");
const isSubmitting = ref(false);
const status = ref({ success: false, message: "" });
const history = ref<Step[]>([]);

const titleId = `iso-checklist-title-${useId()}`;
const emailId = `iso-checklist-email-${useId()}`;

const questions = computed(() =>
  getReadinessQuestions(selectedStandard.value || props.standard),
);

const currentQuestion = computed<ReadinessQuestion | null>(
  () => questions.value[clauseIndex.value] ?? null,
);

const yesCount = computed(
  () => clauseAnswers.value.filter((item) => item.answer).length,
);

const alreadyCertifiedLabel = computed(
  () =>
    fixedContent.value?.alreadyCertifiedLabel ||
    "No, I am already certified",
);

const goodLuckMessage = computed(
  () =>
    fixedContent.value?.goodLuckMessage ||
    "Glad things are running smoothly. Good luck keeping your certifications in great shape — we are here if you ever need us.",
);

const emailPrompt = computed(
  () =>
    fixedContent.value?.emailPrompt ||
    "Enter your email and we will get to you soon.",
);

const showProgress = computed(
  () => !["good_luck", "thank_you", "email"].includes(step.value),
);

const progressStep = computed(() => {
  if (seekingAnswer.value === "already_certified") {
    return step.value === "seeking_cert" ? 1 : 2;
  }
  if (step.value === "seeking_cert") return 1;
  if (step.value === "select_standard") return 2;
  if (step.value === "clause_questions") {
    const offset = props.standard ? 1 : 2;
    return offset + clauseIndex.value + 1;
  }
  return 1;
});

const progressTotal = computed(() => {
  if (seekingAnswer.value === "already_certified") return 2;
  return (props.standard ? 1 : 2) + questions.value.length;
});

const stepIcon = computed(() => {
  if (step.value === "clause_questions") {
    return "fa-solid fa-clipboard-check";
  }
  const icons: Partial<Record<Step, string>> = {
    seeking_cert: "fa-solid fa-clipboard-list",
    select_standard: "fa-solid fa-certificate",
    manage_difficulty: "fa-solid fa-gears",
    good_luck: "fa-solid fa-face-smile",
    email: "fa-solid fa-envelope",
    thank_you: "fa-solid fa-circle-check",
  };
  return icons[step.value] || "fa-solid fa-clipboard-list";
});

const stepTitle = computed(() => {
  if (step.value === "seeking_cert") {
    return (
      fixedContent.value?.seekingQuestion ||
      "Are you looking to get ISO certified?"
    );
  }
  if (step.value === "select_standard") {
    return "Which standard are you targeting?";
  }
  if (step.value === "clause_questions" && currentQuestion.value) {
    return currentQuestion.value.question;
  }
  if (step.value === "manage_difficulty") {
    return (
      fixedContent.value?.manageQuestion ||
      "Do you find it difficult to manage your standards?"
    );
  }
  if (step.value === "good_luck") return "Good luck!";
  if (step.value === "email") return "Here is how we can help";
  return "We will be in touch";
});

const pathMessage = computed(() => {
  if (intent.value === "certification_body") {
    return (
      fixedContent.value?.certBodyMessage ||
      "We will get you in contact with a certification body to help you with an external audit."
    );
  }
  if (intent.value === "implementation_help") {
    return (
      fixedContent.value?.implementationMessage ||
      "We will get you in touch with someone to help you implement it."
    );
  }
  return "";
});

function pushHistory() {
  history.value.push(step.value);
}

function goBack() {
  if (step.value === "clause_questions" && clauseIndex.value > 0) {
    clauseIndex.value -= 1;
    clauseAnswers.value = clauseAnswers.value.slice(0, clauseIndex.value);
    return;
  }

  const previous = history.value.pop();
  if (previous) {
    if (previous === "clause_questions") {
      clauseIndex.value = Math.max(0, questions.value.length - 1);
      clauseAnswers.value = clauseAnswers.value.slice(0, clauseIndex.value);
    }
    step.value = previous;
    status.value = { success: false, message: "" };
  }
}

function startClauseQuestions() {
  clauseIndex.value = 0;
  clauseAnswers.value = [];
  step.value = "clause_questions";
}

function answerSeekingCert(answer: Exclude<SeekingAnswer, null>) {
  pushHistory();
  seekingAnswer.value = answer;
  if (answer === "yes") {
    if (props.standard) {
      selectedStandard.value = props.standard;
      startClauseQuestions();
    } else {
      step.value = "select_standard";
    }
  } else {
    step.value = "manage_difficulty";
  }
}

function answerStandard(value: string) {
  pushHistory();
  selectedStandard.value = value;
  startClauseQuestions();
}

function answerClause(yes: boolean) {
  const question = currentQuestion.value;
  if (!question) return;

  clauseAnswers.value = [
    ...clauseAnswers.value.slice(0, clauseIndex.value),
    {
      clauseId: question.clauseId,
      clauseTitle: question.clauseTitle,
      question: question.question,
      answer: yes,
    },
  ];

  if (clauseIndex.value < questions.value.length - 1) {
    clauseIndex.value += 1;
    return;
  }

  pushHistory();
  const score = clauseAnswers.value.filter((item) => item.answer).length;
  intent.value =
    score >= READINESS_PASS_THRESHOLD
      ? "certification_body"
      : "implementation_help";
  step.value = "email";
}

function answerManageDifficulty(difficult: boolean) {
  pushHistory();
  if (difficult) {
    intent.value = "management_help";
    step.value = "email";
  } else {
    step.value = "good_luck";
  }
}

function reset() {
  step.value = "seeking_cert";
  seekingAnswer.value = null;
  selectedStandard.value = props.standard ?? null;
  clauseIndex.value = 0;
  clauseAnswers.value = [];
  intent.value = null;
  email.value = "";
  isSubmitting.value = false;
  status.value = { success: false, message: "" };
  history.value = [];
}

async function handleSubmit() {
  if (!email.value) return;

  try {
    isSubmitting.value = true;
    status.value = { success: false, message: "" };

    const response = await $fetch("/api/checklist-inquiry", {
      method: "POST",
      body: {
        email: email.value,
        seekingCertification: seekingAnswer.value,
        standard: selectedStandard.value || props.standard || null,
        clauseAnswers: clauseAnswers.value,
        yesCount: yesCount.value,
        questionCount: questions.value.length,
        intent: intent.value,
        source: props.source,
      },
    });

    if (response.status === 200) {
      email.value = "";
      step.value = "thank_you";
    } else {
      throw new Error(response.message || "Something went wrong");
    }
  } catch (error: unknown) {
    status.value = {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
}

defineExpose({ reset });
</script>

<style scoped>
.checklist-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #fff;
  color: #1d1d1f;
  font-weight: 500;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
}

.checklist-option:hover {
  border-color: var(--color-primary-300);
  background: var(--color-primary-50);
  box-shadow: 0 1px 3px rgba(37, 63, 162, 0.08);
}
</style>
