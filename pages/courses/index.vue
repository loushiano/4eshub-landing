<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 z-50"
    >
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <NuxtLink
          to="/#contact-section"
          class="hidden md:inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
        >
          Book a free demo
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <NuxtLink
              to="/"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              <i class="fa-solid fa-arrow-left mr-2"></i>
              Back to home
            </NuxtLink>
            <span
              class="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
            >
              Courses
            </span>
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Training courses for audit-ready teams
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              Browse published courses, then continue in the 4ES LMS to enroll
              and learn.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div v-if="pending" class="max-w-4xl mx-auto text-center text-gray-500">
            Loading courses…
          </div>
          <div
            v-else-if="error"
            class="max-w-4xl mx-auto text-center text-gray-600"
          >
            Courses are temporarily unavailable. Please try again later.
          </div>
          <div
            v-else-if="!courses.length"
            class="max-w-4xl mx-auto text-center text-gray-600"
          >
            No published courses yet.
          </div>
          <div v-else class="max-w-4xl mx-auto space-y-8">
            <article
              v-for="course in courses"
              :key="course.id"
              class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div class="p-8 md:p-10 flex flex-col md:flex-row gap-6">
                <img
                  v-if="course.thumbnailUrl"
                  :src="course.thumbnailUrl"
                  :alt="course.title"
                  class="w-full md:w-48 h-32 object-cover rounded-xl border border-gray-100 shrink-0"
                />
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      v-if="course.estimatedDurationMinutes != null"
                      class="text-sm text-gray-500"
                    >
                      {{ course.estimatedDurationMinutes }} min
                    </span>
                    <span class="text-sm text-gray-500">
                      {{ course.lessonCount }}
                      {{ course.lessonCount === 1 ? "lesson" : "lessons" }}
                    </span>
                  </div>
                  <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {{ course.title }}
                  </h2>
                  <p
                    v-if="course.description"
                    class="text-gray-600 leading-relaxed mb-6 line-clamp-3 whitespace-pre-wrap"
                  >
                    {{ course.description }}
                  </p>
                  <NuxtLink
                    :to="`/courses/${course.slug}`"
                    class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    View course
                    <i class="fa-solid fa-arrow-right ml-2"></i>
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { CatalogCourse, CatalogCourseList } from "~/utils/catalogCourse";

useSeoMeta({
  title: "Courses",
  description:
    "Browse 4ES Hub training courses for ISO and compliance teams, then continue learning in the LMS.",
  ogTitle: "Courses | 4ES Hub",
  ogDescription:
    "Browse 4ES Hub training courses for ISO and compliance teams, then continue learning in the LMS.",
});

const { data, pending, error } = await useAsyncData("courses-index", () =>
  $fetch<CatalogCourseList>("/api/courses"),
);

const courses = computed<CatalogCourse[]>(() => data.value?.data || []);
</script>
