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
          aria-labelledby="course-enroll-title"
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
              <i
                :class="[
                  'text-primary-600 text-2xl',
                  mode === 'verify'
                    ? 'fa-solid fa-envelope-open-text'
                    : 'fa-solid fa-graduation-cap',
                ]"
              ></i>
            </div>
            <h2
              id="course-enroll-title"
              class="text-2xl font-semibold text-gray-900 mb-2"
            >
              {{ title }}
            </h2>
            <p class="text-gray-600 text-sm">
              {{ subtitle }}
            </p>
          </div>

          <div
            v-if="mode !== 'verify'"
            class="flex rounded-lg border border-gray-200 p-1 mb-6"
          >
            <button
              type="button"
              class="flex-1 py-2 text-sm font-medium rounded-md transition-colors"
              :class="
                mode === 'login'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              "
              @click="mode = 'login'"
            >
              Sign in
            </button>
            <button
              type="button"
              class="flex-1 py-2 text-sm font-medium rounded-md transition-colors"
              :class="
                mode === 'register'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              "
              @click="mode = 'register'"
            >
              Register
            </button>
          </div>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <template v-if="mode === 'register'">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label
                    for="enroll-fname"
                    class="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    First name
                  </label>
                  <input
                    id="enroll-fname"
                    v-model="form.fname"
                    type="text"
                    required
                    autocomplete="given-name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label
                    for="enroll-lname"
                    class="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Last name
                  </label>
                  <input
                    id="enroll-lname"
                    v-model="form.lname"
                    type="text"
                    required
                    autocomplete="family-name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>
            </template>

            <div v-if="mode !== 'verify'">
              <label
                for="enroll-email"
                class="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="enroll-email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
            </div>

            <div v-if="mode !== 'verify'">
              <label
                for="enroll-password"
                class="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="enroll-password"
                v-model="form.password"
                type="password"
                required
                :autocomplete="
                  mode === 'login' ? 'current-password' : 'new-password'
                "
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
              <p
                v-if="mode === 'register'"
                class="mt-1.5 text-xs text-gray-500"
              >
                8+ characters with upper, lower, number, and special character.
              </p>
            </div>

            <div v-if="mode === 'verify'">
              <label
                for="enroll-code"
                class="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Verification code
              </label>
              <input
                id="enroll-code"
                v-model="form.code"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="8"
                required
                autocomplete="one-time-code"
                placeholder="6-digit code"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all tracking-widest text-center text-lg"
              />
              <p class="mt-1.5 text-xs text-gray-500">
                Sent to {{ form.email }}. Code expires in 15 minutes.
              </p>
            </div>

            <div
              v-if="errorMessage"
              class="text-red-700 bg-red-50 p-3 rounded-lg text-sm"
            >
              {{ errorMessage }}
            </div>

            <div
              v-if="infoMessage"
              class="text-primary-700 bg-primary-50 p-3 rounded-lg text-sm"
            >
              {{ infoMessage }}
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="isSubmitting"
            >
              {{ submitLabel }}
            </button>

            <button
              v-if="mode === 'verify'"
              type="button"
              class="w-full text-sm text-gray-500 hover:text-gray-700"
              :disabled="isSubmitting"
              @click="mode = 'register'"
            >
              Back to registration
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  courseId: string;
  courseTitle: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const mode = ref<"login" | "register" | "verify">("login");
const isSubmitting = ref(false);
const errorMessage = ref("");
const infoMessage = ref("");
const form = reactive({
  fname: "",
  lname: "",
  email: "",
  password: "",
  code: "",
});

const title = computed(() => {
  if (mode.value === "verify") return "Check your email";
  if (mode.value === "login") return "Sign in to enroll";
  return "Create your account";
});

const subtitle = computed(() => {
  if (mode.value === "verify") {
    return "Enter the verification code we sent you to finish signing up.";
  }
  if (mode.value === "login") {
    return `Sign in to continue to “${props.courseTitle}” in the LMS.`;
  }
  return `Register to start “${props.courseTitle}” in the LMS.`;
});

const submitLabel = computed(() => {
  if (isSubmitting.value) {
    if (mode.value === "login") return "Signing in…";
    if (mode.value === "verify") return "Verifying…";
    return "Creating account…";
  }
  if (mode.value === "login") return "Sign in & continue";
  if (mode.value === "verify") return "Verify & continue";
  return "Register";
});

function close() {
  emit("update:modelValue", false);
}

function resetForm() {
  form.fname = "";
  form.lname = "";
  form.email = "";
  form.password = "";
  form.code = "";
  errorMessage.value = "";
  infoMessage.value = "";
  isSubmitting.value = false;
}

async function handleSubmit() {
  errorMessage.value = "";
  infoMessage.value = "";
  isSubmitting.value = true;

  try {
    if (mode.value === "register") {
      await $fetch("/api/auth/register", {
        method: "POST",
        body: {
          fname: form.fname,
          lname: form.lname,
          email: form.email,
          password: form.password,
        },
      });
      form.code = "";
      mode.value = "verify";
      infoMessage.value =
        "We sent a verification code to your email. Enter it below to continue.";
      isSubmitting.value = false;
      return;
    }

    const endpoint =
      mode.value === "login" ? "/api/auth/login" : "/api/auth/verify";
    const body =
      mode.value === "login"
        ? {
            email: form.email,
            password: form.password,
            courseId: props.courseId,
          }
        : {
            email: form.email,
            code: form.code,
            password: form.password,
            courseId: props.courseId,
          };

    const response = await $fetch<{ handoffUrl: string }>(endpoint, {
      method: "POST",
      body,
    });

    if (!response?.handoffUrl) {
      throw new Error("Could not start LMS session");
    }

    window.location.href = response.handoffUrl;
  } catch (error: any) {
    errorMessage.value =
      error?.data?.message ||
      error?.statusMessage ||
      error?.message ||
      (mode.value === "login"
        ? "Sign in failed. Check your email and password."
        : mode.value === "verify"
          ? "Invalid or expired code. Please try again."
          : "Registration failed. Please try again.");
    isSubmitting.value = false;
  }
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      mode.value = "login";
      resetForm();
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
