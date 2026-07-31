<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="close"
      >
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div
          ref="modalPanel"
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tracker-modal-title"
        >
          <button
            type="button"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
            @click="close"
          >
            <i class="fa-solid fa-xmark text-xl"></i>
          </button>

          <div class="text-center mb-6">
            <div
              class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-clipboard-check text-primary-600 text-2xl"></i>
            </div>
            <h2
              id="tracker-modal-title"
              class="text-2xl font-semibold text-gray-900 mb-2"
            >
              {{ modalTitle }}
            </h2>
            <p class="text-gray-600 text-sm">
              {{ modalDescription }}
            </p>
          </div>

          <div class="flex rounded-lg border border-gray-200 p-1 mb-6">
            <button
              type="button"
              class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              :class="
                tab === 'start'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              "
              @click="switchTab('start')"
            >
              Create account
            </button>
            <button
              type="button"
              class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              :class="
                tab === 'continue'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              "
              @click="switchTab('continue')"
            >
              Load data
            </button>
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  v-model="email"
                  type="email"
                  required
                  :readonly="needsCode"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  :class="{ 'bg-neutral-50': needsCode }"
                />
              </div>

              <template v-if="tab === 'start' && !needsPin">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Company name
                  </label>
                  <input
                    v-model="companyName"
                    type="text"
                    required
                    :readonly="needsCode"
                    placeholder="Acme Ltd"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    :class="{ 'bg-neutral-50': needsCode }"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    What does your company do?
                  </label>
                  <textarea
                    v-model="description"
                    required
                    rows="3"
                    :readonly="needsCode"
                    placeholder="Briefly describe your products or services"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    :class="{ 'bg-neutral-50': needsCode }"
                  />
                </div>
              </template>

              <div v-if="tab === 'continue' || needsPin">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ needsPin ? "This email already has a tracker — enter your PIN" : "PIN" }}
                </label>
                <input
                  v-model="pin"
                  type="password"
                  required
                  minlength="4"
                  maxlength="12"
                  placeholder="••••"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div v-if="tab === 'start' && !needsPin">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Choose a PIN
                </label>
                <input
                  v-model="pin"
                  type="password"
                  required
                  :readonly="needsCode"
                  minlength="4"
                  maxlength="12"
                  placeholder="4–12 characters"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  :class="{ 'bg-neutral-50': needsCode }"
                />
              </div>

              <div v-if="needsCode">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Code
                </label>
                <input
                  v-model="code"
                  type="text"
                  required
                  inputmode="numeric"
                  autocomplete="one-time-code"
                  maxlength="8"
                  placeholder="Enter the code from your email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  type="button"
                  class="mt-2 text-sm font-semibold text-primary-600 hover:text-primary-700 disabled:opacity-50"
                  :disabled="isSubmitting || resending"
                  @click="sendCode"
                >
                  {{ resending ? "Resending..." : "Resend code" }}
                </button>
              </div>
            </div>

            <div
              v-if="status.message"
              class="mt-4 p-3 rounded-lg text-sm"
              :class="
                status.success
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-red-700 bg-red-50'
              "
            >
              {{ status.message }}
            </div>

            <button
              type="submit"
              class="btn-primary w-full mt-6"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Please wait..." : submitLabel }}
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { TrackerFramework } from "~/utils/isoTrackerStorage";
import { saveTrackerSession } from "~/utils/isoTrackerStorage";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    standard: TrackerFramework;
    /** Which tab to open when the modal becomes visible */
    initialTab?: "start" | "continue";
    /** Controls copy for save/create vs load existing data */
    intent?: "save" | "load";
  }>(),
  {
    initialTab: "start",
    intent: "save",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  unlocked: [payload: { id: string; email: string; pin: string; tracker: any }];
}>();

const modalPanel = ref<HTMLElement | null>(null);
const tab = ref<"start" | "continue">("start");
const email = ref("");
const companyName = ref("");
const description = ref("");
const pin = ref("");
const code = ref("");
const needsPin = ref(false);
const needsCode = ref(false);
const isSubmitting = ref(false);
const resending = ref(false);
const status = reactive({ success: false, message: "" });

const modalTitle = computed(() => {
  if (props.intent === "load") {
    return `Load your ${props.standard} data`;
  }
  return `Create an account to save`;
});

const modalDescription = computed(() => {
  if (props.intent === "load") {
    return "Sign in with your email and PIN to restore notes, uploads, and progress.";
  }
  return "Create a free tracker (or continue with an existing one) to save notes and evidence files.";
});

const submitLabel = computed(() => {
  if (tab.value === "continue" || needsPin.value) {
    return props.intent === "load" ? "Load tracked data" : "Continue with PIN";
  }
  if (needsCode.value) {
    return "Verify & create account";
  }
  return "Create account";
});

const scrollModalToBottom = async () => {
  await nextTick();
  modalPanel.value?.scrollTo({
    top: modalPanel.value.scrollHeight,
    behavior: "smooth",
  });
};

const resetTransientState = () => {
  status.message = "";
  status.success = false;
  needsPin.value = false;
  needsCode.value = false;
  code.value = "";
  isSubmitting.value = false;
  resending.value = false;
};

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      tab.value = props.initialTab;
      resetTransientState();
    } else {
      resetTransientState();
    }
  },
);

watch(needsCode, (value) => {
  if (value) {
    scrollModalToBottom();
  }
});

const switchTab = (next: "start" | "continue") => {
  tab.value = next;
  needsPin.value = false;
  needsCode.value = false;
  code.value = "";
  status.message = "";
  status.success = false;
};

const close = () => emit("update:modelValue", false);

const extractErrorCode = (error: any) =>
  error?.data?.code ||
  error?.data?.data?.code ||
  error?.data?.message?.code;

const requestVerificationCode = async () => {
  await $fetch<any>("/api/trackers/send-code", {
    method: "POST",
    body: {
      email: email.value,
      standard: props.standard,
    },
  });
  needsCode.value = true;
  status.success = true;
  status.message = `We sent a verification code to ${email.value.trim().toLowerCase()}.`;
};

const handleEmailExists = () => {
  needsPin.value = true;
  needsCode.value = false;
  pin.value = "";
  status.success = false;
  status.message =
    "This email already has a tracker. Enter your PIN to continue.";
};

const sendCode = async () => {
  resending.value = true;
  status.message = "";
  status.success = false;

  try {
    await requestVerificationCode();
  } catch (error: any) {
    const errCode = extractErrorCode(error);
    if (error?.statusCode === 409 || errCode === "EMAIL_EXISTS") {
      handleEmailExists();
      return;
    }
    status.success = false;
    status.message =
      error?.data?.message ||
      error?.statusMessage ||
      error?.message ||
      "Failed to send verification code.";
  } finally {
    resending.value = false;
  }
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  status.message = "";
  status.success = false;

  try {
    if (tab.value === "start" && !needsPin.value) {
      if (!needsCode.value) {
        try {
          await requestVerificationCode();
        } catch (error: any) {
          const errCode = extractErrorCode(error);
          if (error?.statusCode === 409 || errCode === "EMAIL_EXISTS") {
            handleEmailExists();
            return;
          }
          status.success = false;
          status.message =
            error?.data?.message ||
            error?.statusMessage ||
            error?.message ||
            "Failed to send verification code.";
        }
        return;
      }

      try {
        const created = await $fetch<any>("/api/trackers/start", {
          method: "POST",
          body: {
            email: email.value,
            companyName: companyName.value,
            description: description.value,
            pin: pin.value,
            standard: props.standard,
            code: code.value,
          },
        });
        finishUnlock(created);
        return;
      } catch (error: any) {
        const errCode = extractErrorCode(error);
        if (error?.statusCode === 409 || errCode === "EMAIL_EXISTS") {
          handleEmailExists();
          return;
        }
        throw error;
      }
    }

    const loaded = await $fetch<any>("/api/trackers/continue", {
      method: "POST",
      body: {
        email: email.value,
        pin: pin.value,
        standard: props.standard,
      },
    });
    finishUnlock(loaded);
  } catch (error: any) {
    status.success = false;
    status.message =
      error?.data?.message ||
      error?.statusMessage ||
      error?.message ||
      "Something went wrong. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

const finishUnlock = (payload: any) => {
  saveTrackerSession(props.standard, {
    pin: pin.value,
    email: email.value.trim().toLowerCase(),
    id: payload.id,
  });
  emit("unlocked", {
    id: payload.id,
    email: email.value.trim().toLowerCase(),
    pin: pin.value,
    tracker: payload.tracker || { clauses: {} },
  });
  status.success = true;
  status.message = "Tracker unlocked.";
  close();
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
