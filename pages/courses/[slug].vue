<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50"
    >
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/courses"
            class="text-primary-600 text-sm font-normal tracking-snug"
          >
            Courses
          </NuxtLink>
          <a
            href="/#contact-section"
            class="text-[#1d1d1f] hover:text-primary-600 text-sm font-normal tracking-snug"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>

    <main>
      <div v-if="pending" class="container mx-auto px-6 py-24 text-center">
        <p class="text-gray-500">Loading course…</p>
      </div>

      <div
        v-else-if="error || !course"
        class="container mx-auto px-6 py-24 text-center"
      >
        <h1 class="text-3xl font-semibold text-[#1d1d1f] mb-4">
          Course not found
        </h1>
        <p class="text-gray-600 mb-8">
          This course may be unpublished or the link is incorrect.
        </p>
        <NuxtLink to="/courses" class="btn-primary">Browse courses</NuxtLink>
      </div>

      <template v-else>
        <section
          class="bg-gradient-to-br from-primary-50 via-white to-white py-16 md:py-20"
        >
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <NuxtLink
                to="/courses"
                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
              >
                <i class="fa-solid fa-arrow-left mr-2"></i>
                All courses
              </NuxtLink>

              <div class="flex flex-col md:flex-row gap-8 items-start">
                <img
                  v-if="course.thumbnailUrl"
                  :src="course.thumbnailUrl"
                  :alt="course.title"
                  class="w-full md:w-64 h-40 object-cover rounded-xl border border-gray-200 shrink-0"
                />
                <div class="min-w-0">
                  <h1
                    class="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-4"
                  >
                    {{ course.title }}
                  </h1>
                  <p
                    v-if="course.description"
                    class="text-xl text-[#6e6e73] tracking-snug leading-relaxed mb-6 whitespace-pre-wrap"
                  >
                    {{ course.description }}
                  </p>
                  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
                    <span v-if="course.estimatedDurationMinutes != null">
                      <i class="fa-regular fa-clock mr-1"></i>
                      {{ course.estimatedDurationMinutes }} min
                    </span>
                    <span>
                      <i class="fa-solid fa-book-open mr-1"></i>
                      {{ course.lessonCount }}
                      {{ course.lessonCount === 1 ? "lesson" : "lessons" }}
                    </span>
                    <span v-if="course.hasExam">
                      <i class="fa-solid fa-clipboard-check mr-1"></i>
                      Final exam
                    </span>
                  </div>
                  <button
                    type="button"
                    class="btn-primary inline-flex items-center"
                    @click="enrollOpen = true"
                  >
                    Enroll now
                    <i class="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          v-if="course.lessons?.length"
          class="py-16 md:py-20 border-t border-gray-100"
        >
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2
                class="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-8"
              >
                Course content
              </h2>
              <ol class="space-y-4">
                <li
                  v-for="(lesson, index) in course.lessons"
                  :key="lesson.id"
                  class="flex gap-4 items-start border border-gray-200 rounded-xl p-5"
                >
                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"
                  >
                    {{ index + 1 }}
                  </span>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold text-[#1d1d1f]">
                      {{ lesson.title }}
                    </h3>
                    <p
                      v-if="lesson.description"
                      class="text-gray-600 mt-1 text-sm whitespace-pre-wrap"
                    >
                      {{ lesson.description }}
                    </p>
                    <div class="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                      <span v-if="lesson.estimatedDurationMinutes != null">
                        {{ lesson.estimatedDurationMinutes }} min
                      </span>
                      <span
                        >{{ lesson.slideCount }}
                        {{
                          lesson.slideCount === 1 ? "slide" : "slides"
                        }}</span
                      >
                      <span v-if="lesson.hasQuiz">Includes quiz</span>
                    </div>
                  </div>
                </li>
              </ol>

              <div class="mt-12 text-center">
                <button
                  type="button"
                  class="btn-primary inline-flex items-center"
                  @click="enrollOpen = true"
                >
                  Enroll now
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <CourseEnrollModal
          v-model="enrollOpen"
          :course-id="course.id"
          :course-title="course.title"
        />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { CatalogCourse } from "~/utils/catalogCourse";
import { useCourseSeo } from "~/composables/useCourseSeo";

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));
const enrollOpen = ref(false);

const {
  data: course,
  pending,
  error,
} = await useAsyncData<CatalogCourse | null>(
  `course-${slug.value}`,
  async () => {
    if (!slug.value) return null;
    return await $fetch<CatalogCourse>(`/api/courses/${slug.value}`);
  },
  { watch: [slug] },
);

if (error.value) {
  const status =
    (error.value as any)?.statusCode || (error.value as any)?.status || 404;
  throw createError({
    statusCode: status === 404 ? 404 : Number(status) || 500,
    statusMessage:
      status === 404 ? "Course not found" : "Failed to load course",
  });
}

if (course.value) {
  useCourseSeo(course.value);
}
</script>
