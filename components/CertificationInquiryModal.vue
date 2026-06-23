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
          :aria-labelledby="titleId"
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
              <i class="fa-solid fa-certificate text-primary-600 text-2xl"></i>
            </div>
            <h2
              :id="titleId"
              class="text-2xl font-semibold text-gray-900 mb-2"
            >
              Talk to a certification body
            </h2>
            <p class="text-gray-600">
              Leave your email and we will connect you with an accredited
              certification partner for ISO {{ standard
              }}<span v-if="city"> in {{ city }}</span>.
            </p>
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
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
                'text-primary-700 bg-primary-50 p-3 rounded-lg mb-4':
                  status.success,
                'text-red-700 bg-red-50 p-3 rounded-lg mb-4': !status.success,
              }"
            >
              {{ status.message }}
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="isSubmitting"
            >
              {{
                isSubmitting
                  ? "Submitting..."
                  : status.success
                    ? "Submitted"
                    : "Get connected"
              }}
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { IsoStandardSlug } from "~/utils/isoCities";

const props = defineProps<{
  modelValue: boolean;
  standard: IsoStandardSlug;
  city?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const email = ref("");
const isSubmitting = ref(false);
const status = ref({ success: false, message: "" });

const titleId = `cert-modal-title-${useId()}`;
const emailId = `cert-modal-email-${useId()}`;

function close() {
  emit("update:modelValue", false);
}

async function handleSubmit() {
  if (!email.value) return;

  try {
    isSubmitting.value = true;
    status.value = { success: false, message: "" };

    const response = await $fetch("/api/certification-inquiry", {
      method: "POST",
      body: {
        email: email.value,
        standard: props.standard,
        city: props.city || null,
        source: props.city
          ? `iso-${props.standard}/${props.city}`
          : `iso-${props.standard}`,
      },
    });

    if (response.status === 200) {
      status.value = {
        success: true,
        message: "Thank you! We will reach out to you shortly.",
      };
      email.value = "";
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

watch(
  () => props.modelValue,
  (open) => {
    if (!open) {
      status.value = { success: false, message: "" };
      email.value = "";
    }
  },
);
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
