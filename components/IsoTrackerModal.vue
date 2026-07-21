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
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
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
              Track your {{ standard }} progress
            </h2>
            <p class="text-gray-600 text-sm">
              Save clause notes, uploads, and out-of-scope decisions with a PIN.
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
              @click="tab = 'start'"
            >
              Get started
            </button>
            <button
              type="button"
              class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
              :class="
                tab === 'continue'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              "
              @click="tab = 'continue'"
            >
              Continue
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
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                    placeholder="Acme Ltd"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                    placeholder="Briefly describe your products or services"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  minlength="4"
                  maxlength="12"
                  placeholder="4–12 characters"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
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

const props = defineProps<{
  modelValue: boolean;
  standard: TrackerFramework;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  unlocked: [payload: { id: string; email: string; pin: string; tracker: any }];
}>();

const tab = ref<"start" | "continue">("start");
const email = ref("");
const companyName = ref("");
const description = ref("");
const pin = ref("");
const needsPin = ref(false);
const isSubmitting = ref(false);
const status = reactive({ success: false, message: "" });

const submitLabel = computed(() => {
  if (tab.value === "continue" || needsPin.value) {
    return "Unlock tracker";
  }
  return "Start tracking";
});

watch(
  () => props.modelValue,
  (open) => {
    if (!open) {
      status.message = "";
      status.success = false;
      needsPin.value = false;
      isSubmitting.value = false;
    }
  },
);

const close = () => emit("update:modelValue", false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  status.message = "";
  status.success = false;

  try {
    if (tab.value === "start" && !needsPin.value) {
      try {
        const created = await $fetch<any>("/api/trackers/start", {
          method: "POST",
          body: {
            email: email.value,
            companyName: companyName.value,
            description: description.value,
            pin: pin.value,
            standard: props.standard,
          },
        });
        finishUnlock(created);
        return;
      } catch (error: any) {
        const code =
          error?.data?.code ||
          error?.data?.data?.code ||
          error?.data?.message?.code;
        if (error?.statusCode === 409 || code === "EMAIL_EXISTS") {
          needsPin.value = true;
          pin.value = "";
          status.message =
            "This email already has a tracker. Enter your PIN to continue.";
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
