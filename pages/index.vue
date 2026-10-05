<template>
  <div id="page-container" class="theme-ocean min-h-screen flex flex-col">
    <!-- Header/Navigation -->
    <header
      id="header"
      class="sticky top-0 bg-[#f1faee]/90 backdrop-blur-xl border-b border-[#a8dadc]/70 z-50"
    >
      <div
        class="container mx-auto flex items-center justify-between px-6 py-4"
      >
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center cursor-pointer">
            <img src="/logo-color.png" alt="4ES Hub" class="h-14" />
          </NuxtLink>
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-primary-600 cursor-pointer text-sm font-normal tracking-snug flex items-center gap-1 py-2"
            >
              Solutions
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[280px]"
              >
                <NuxtLink
                  to="/iso-9001"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >ISO 9001 (Quality Management System)</NuxtLink
                >
                <NuxtLink
                  to="/iso-14001"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >ISO 14001 (Environmental Management)</NuxtLink
                >
                <NuxtLink
                  to="/iso-45001"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >ISO 45001 (Health &amp; Safety Management)</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-primary-600 cursor-pointer text-sm font-normal tracking-snug flex items-center gap-1 py-2"
            >
              Resources
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[180px]"
              >
                <NuxtLink
                  to="/blog"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >Blog</NuxtLink
                >
                <NuxtLink
                  to="/courses"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >Courses</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-primary-600 cursor-pointer text-sm font-normal tracking-snug flex items-center gap-1 py-2"
            >
              Company
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[180px]"
              >
                <NuxtLink
                  to="/partners"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >Partners</NuxtLink
                >
                <a
                  href="#contact-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >Contact</a
                >
              </div>
            </div>
          </div>
        </nav>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/are-you-ready-for-iso-certification"
            class="hidden md:inline-flex text-gray-700 hover:text-primary-600 text-sm font-normal tracking-snug py-2"
          >
            Ready for certification?
          </NuxtLink>
          <a
            href="#contact-section"
            class="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
          >
            Book a call
          </a>
  
          <!-- Mobile menu button -->
          <ClientOnly>
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden text-gray-700"
            >
              <i class="fa-solid fa-bars text-xl"></i>
            </button>
          </ClientOnly>
        </div>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-100 px-6 py-4"
      >
        <nav class="flex flex-col space-y-3">
          <span class="text-xs font-semibold uppercase tracking-wide text-gray-400 pt-1"
            >Solutions</span
          >
          <NuxtLink
            to="/iso-9001"
            class="text-gray-700 hover:text-primary-600 py-2 pl-2"
            >ISO 9001 (Quality Management System)</NuxtLink
          >
          <NuxtLink
            to="/iso-14001"
            class="text-gray-700 hover:text-primary-600 py-2 pl-2"
            >ISO 14001 (Environmental Management)</NuxtLink
          >
          <NuxtLink
            to="/iso-45001"
            class="text-gray-700 hover:text-primary-600 py-2 pl-2"
            >ISO 45001 (Health &amp; Safety Management)</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="text-gray-700 hover:text-primary-600 py-2"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/courses"
            class="text-gray-700 hover:text-primary-600 py-2"
            >Courses</NuxtLink
          >
          <NuxtLink
            to="/partners"
            class="text-gray-700 hover:text-primary-600 py-2"
            >Partners</NuxtLink
          >
          <a
            href="#contact-section"
            class="text-gray-700 hover:text-primary-600 py-2"
            >Contact</a
          >
          <NuxtLink
            to="/are-you-ready-for-iso-certification"
            class="text-gray-700 hover:text-primary-600 py-2"
            @click="mobileMenuOpen = false"
          >
            Ready for certification?
          </NuxtLink>
          <a
            href="#contact-section"
            class="text-primary-600 font-medium py-2"
            @click="mobileMenuOpen = false"
            >Book a call</a
          >
    
        </nav>
      </div>
    </header>

    <main id="main-content">
      <!-- Hero Section -->
      <section id="hero-section" class="relative pt-12 pb-16 md:pt-16 md:pb-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center mb-10 md:mb-12">
            <p class="section-label mb-6">ISO 9001, 14001, and 45001</p>
            <h1
              class="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-[#1a2332] mb-6 leading-[1.08]"
            >
              Implement
              <span class="sr-only">ISO 9001, 14001, or 45001</span>
              <span
                class="hero-iso-slot relative inline-flex items-baseline align-bottom"
                aria-hidden="true"
              >
                <Transition name="iso-swap" mode="out-in">
                  <span
                    :key="currentStandard"
                    class="text-primary-600 whitespace-nowrap"
                  >
                    ISO {{ currentStandard }}
                  </span>
                </Transition>
              </span>
              with less consulting
            </h1>
            <p
              class="max-w-3xl mx-auto text-base md:text-lg text-[#3d4c5c] leading-relaxed tracking-snug mb-10"
            >
              Lower the consultation bill. Follow straight implementation
              instructions and use the document templates in the system. Stay
              audit-ready all year, instead of spending months assembling a
              file before the auditor arrives.
            </p>

            <ul
              class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10"
            >
              <li
                v-for="value in valuePillars"
                :key="value.title"
                class="rounded-xl border border-[#a8dadc] bg-white p-5"
              >
                <p class="font-semibold text-[#1a2332] mb-1">
                  {{ value.title }}
                </p>
                <p class="text-sm text-[#3d4c5c] leading-relaxed">
                  {{ value.body }}
                </p>
              </li>
            </ul>

            <ol
              class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left mb-8"
            >
              <li
                v-for="(step, index) in startSteps"
                :key="step.title"
                class="hero-step"
                :style="{ animationDelay: `${0.1 + index * 0.16}s` }"
              >
                <div class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center justify-center"
                  >
                    {{ index + 1 }}
                  </span>
                  <div>
                    <p class="font-semibold text-[#1a2332] mb-1">
                      {{ step.title }}
                    </p>
                    <p class="text-sm text-[#3d4c5c] leading-relaxed tracking-snug">
                      {{ step.body }}
                    </p>
                  </div>
                </div>
              </li>
            </ol>

            <p
              class="max-w-3xl mx-auto text-sm md:text-base text-[#1a2332] leading-relaxed tracking-snug mb-8 rounded-xl bg-white border border-[#a8dadc] px-5 py-4"
            >
              <span class="font-semibold">5 consultation hours, free</span>
              when you implement ISO 9001 or ISO 45001. Use them to see where
              you stand and to start the work with us.
            </p>

            <div class="flex flex-wrap justify-center gap-4">
              <a href="#contact-section" class="btn-primary">
                Book a call
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <NuxtLink to="/partners" class="btn-secondary">
                Meet experts and certifiers
              </NuxtLink>
            </div>
          </div>

          <figure class="max-w-6xl mx-auto">
            <div
              class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div
                class="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200"
              >
                <span
                  class="w-2.5 h-2.5 rounded-full bg-gray-300"
                  aria-hidden="true"
                ></span>
                <span
                  class="w-2.5 h-2.5 rounded-full bg-gray-300"
                  aria-hidden="true"
                ></span>
                <span
                  class="w-2.5 h-2.5 rounded-full bg-gray-300"
                  aria-hidden="true"
                ></span>
                <p class="ml-2 text-xs text-gray-500 truncate">
                  4ES Hub — the system you implement and keep audit-ready
                </p>
              </div>
              <div class="relative bg-[#f5f5f7]">
                <video
                  ref="heroDemoVideo"
                  class="w-full h-auto block"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="auto"
                  poster="/product-demo-poster.png"
                  aria-label="Screen recording of implementing an ISO standard in 4ES Hub"
                  @canplay="playHeroDemo"
                >
                  <source src="/product-demo.mp4" type="video/mp4" />
                </video>
                <div class="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    class="w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center"
                    :aria-label="
                      heroDemoPaused
                        ? 'Play product demo'
                        : 'Pause product demo'
                    "
                    @click="toggleHeroDemoPlayback"
                  >
                    <i
                      :class="
                        heroDemoPaused
                          ? 'fa-solid fa-play text-sm ml-0.5'
                          : 'fa-solid fa-pause text-sm'
                      "
                    ></i>
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center"
                    :aria-label="
                      heroDemoMuted
                        ? 'Unmute product demo'
                        : 'Mute product demo'
                    "
                    @click="toggleHeroDemoMute"
                  >
                    <i
                      :class="
                        heroDemoMuted
                          ? 'fa-solid fa-volume-xmark text-sm'
                          : 'fa-solid fa-volume-high text-sm'
                      "
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <figcaption class="sr-only">
              A walkthrough of the 4ES Hub management system used to implement
              and maintain an ISO standard.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="value-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="section-label mb-4">What you get</span>
            <h2
              class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-4"
            >
              The work a consultant usually writes, already in the system
            </h2>
            <p class="text-lg text-[#3d4c5c] tracking-snug">
              Most of the cost in an ISO project is someone turning how you
              work into documents, risks, and evidence. 4ES Hub holds that
              work: the instructions, the templates, and the records an auditor
              opens.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <article
              v-for="item in valueDetails"
              :key="item.title"
              class="bg-[#f1faee] border border-[#a8dadc] rounded-2xl p-6"
            >
              <div
                class="w-10 h-10 rounded-lg bg-white text-primary-700 flex items-center justify-center mb-4"
              >
                <i :class="['fa-solid', item.icon]"></i>
              </div>
              <h3 class="text-lg font-semibold text-[#1a2332] mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-[#3d4c5c] leading-relaxed">
                {{ item.body }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="modules-section" class="py-20 md:py-28">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="section-label mb-4"
            >
              The software
            </span>
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-4">
              Instructions, templates, and the records you are audited on
            </h2>
            <p class="text-lg text-[#3d4c5c] tracking-snug">
              Each part of the standard has a place in 4ES Hub: what to write,
              which template to use, and where the evidence stays. You maintain
              it there, so the next audit is not a separate project.
            </p>
          </div>

          <div class="max-w-3xl mx-auto space-y-3">
            <div
              v-for="module in platformModules"
              :key="module.id"
              class="rounded-xl border bg-white transition-all duration-200 overflow-hidden"
              :class="
                activeModuleId === module.id
                  ? 'border-primary-600 shadow-md shadow-primary-600/10'
                  : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
              "
            >
              <button
                type="button"
                class="w-full text-left p-5 flex items-center gap-4"
                :aria-expanded="activeModuleId === module.id"
                :aria-controls="`module-panel-${module.id}`"
                @click="toggleModule(module.id)"
              >
                <div
                  class="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="module.iconBg"
                >
                  <i
                    :class="['fa-solid', module.icon, module.iconColor, 'text-lg']"
                  ></i>
                </div>
                <span
                  class="font-semibold flex-1"
                  :class="
                    activeModuleId === module.id
                      ? 'text-gray-900'
                      : 'text-gray-700'
                  "
                >
                  {{ module.title }}
                </span>
                <i
                  class="fa-solid fa-chevron-down text-gray-400 text-sm transition-transform duration-200"
                  :class="{ 'rotate-180 text-primary-600': activeModuleId === module.id }"
                ></i>
              </button>

              <div
                :id="`module-panel-${module.id}`"
                class="grid transition-[grid-template-rows] duration-300 ease-out"
                :class="
                  activeModuleId === module.id
                    ? 'grid-rows-[1fr]'
                    : 'grid-rows-[0fr]'
                "
              >
                <div class="overflow-hidden">
                  <div class="px-5 pb-6">
                    <div class="border-t border-gray-100 pt-5">
                      <p class="text-gray-600 leading-relaxed mb-5">
                        {{ module.description }}
                      </p>
                      <ul class="space-y-3">
                        <li
                          v-for="point in module.points"
                          :key="point"
                          class="flex items-start gap-3"
                        >
                          <div
                            class="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          >
                            <i
                              class="fa-solid fa-check text-primary-600 text-[10px]"
                            ></i>
                          </div>
                          <span class="text-gray-700 text-sm leading-relaxed">{{
                            point
                          }}</span>
                        </li>
                      </ul>
                      <NuxtLink
                        v-if="module.learnMore"
                        :to="module.learnMore.to"
                        class="inline-flex items-center mt-5 text-primary-600 hover:text-primary-700 text-sm font-semibold"
                      >
                        {{ module.learnMore.label }}
                        <i class="fa-solid fa-arrow-right ml-2 text-xs"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Value Proposition Section -->
      <section id="features-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
          >
            <div>
              <span
                class="section-label mb-4"
              >
                How we start
              </span>
              <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-6">
                A call, then we implement and maintain it with you
              </h2>
              <p class="text-lg text-[#3d4c5c] tracking-snug mb-8">
                We start by finding out where you stand. Then we implement the
                standard in 4ES Hub and keep it current with you, so
                consultation time goes to judgment and gaps, not to writing the
                system from a blank page.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-[#1a2332]">
                    The call is to locate the gaps, not to scope a year of
                    document writing
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-[#1a2332]">
                    Implementation follows the instructions and templates
                    already in the software
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-[#1a2332]">
                    Maintenance stays with us, so the next surveillance audit
                    is not a scramble
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-[#1a2332]">
                    ISO 9001 and ISO 45001 include 5 consultation hours at no
                    charge
                  </span>
                </li>
              </ul>
              <a href="#contact-section" class="btn-primary mt-8">
                Book a call
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div class="relative">
              <div class="bg-[#1a2332] rounded-2xl p-8 text-[#f1faee]">
                <p class="text-sm font-medium text-[#a8dadc] mb-2">
                  Included with ISO 9001 and ISO 45001
                </p>
                <p class="text-3xl font-semibold mb-3">5 hours, free</p>
                <p class="text-[#d7ebe8] leading-relaxed mb-6">
                  Five consultation hours at no charge. Use them on the first
                  call and the first gaps we find, then keep implementing in
                  the software.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    v-for="offer in consultationOffers"
                    :key="offer.title"
                    class="bg-white/5 p-4 rounded-xl border border-[#a8dadc]/30"
                  >
                    <p class="font-semibold text-white mb-1">
                      {{ offer.title }}
                    </p>
                    <p class="text-sm text-[#d7ebe8]">{{ offer.body }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section id="blog-section" class="py-20 md:py-28">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="section-label mb-4"
            >
              Blog
            </span>
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-4">
              How teams get to certification with less writing
            </h2>
            <p class="text-lg text-[#3d4c5c] tracking-snug">
              Notes on implementing the standard in a live system, then using a
              consultant to check the gaps before the external audit.
            </p>
          </div>
          <div class="max-w-4xl mx-auto space-y-8">
            <article
              v-for="post in recentBlogPosts"
              :key="post.slug"
              class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div class="p-8 md:p-10">
                <div class="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    class="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold"
                  >
                    {{ post.category }}
                  </span>
                  <span class="text-sm text-gray-500">{{ post.readTime }}</span>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-6">
                  {{ post.excerpt }}
                </p>
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Read article
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </NuxtLink>
              </div>
            </article>
          </div>
          <div class="text-center mt-12">
            <NuxtLink
              to="/blog"
              class="btn-primary"
            >
              View all articles
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Certification Partners Section -->
      <section id="partners-section" class="py-20 md:py-28 bg-gray-50">
        <div class="container mx-auto px-6">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
          >
            <div>
              <span
                class="section-label mb-4"
              >
                After the system is in place
              </span>
              <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-6">
                A consultant checks the gaps. A certification body audits.
              </h2>
              <p class="text-lg text-[#3d4c5c] tracking-snug mb-6">
                Once the instructions, templates, and records are in 4ES Hub,
                a consultant reviews what is still missing. They are not
                starting a writing project. A certification body partner then
                runs the external audit.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >The system already holds the documents, risks, controls,
                    and evidence</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >A consultant reviews gaps instead of running a full writing
                    project</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >A certification body partner runs the external audit and
                    awards the certificate if you pass</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-primary-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Evidence stays in 4ES Hub for surveillance audits</span
                  >
                </li>
              </ul>
              <div class="flex flex-wrap gap-4">
                <a href="#contact-section" class="btn-primary">
                  Book a call
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
                <NuxtLink
                  to="/partners"
                  class="btn-secondary"
                >
                  View partner directory
                  <i class="fa-solid fa-users ml-2"></i>
                </NuxtLink>
              </div>
              <p class="text-xs text-gray-500 mt-4">
                <i class="fa-solid fa-info-circle mr-1"></i>
                Note: 4ES Hub provides software and partner introductions but
                does not guarantee certification. Certification decisions are
                made independently by the certification body.
              </p>
            </div>
            <div class="relative">
              <div
                class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <div class="text-center mb-8">
                  <div
                    class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <i
                      class="fa-solid fa-certificate text-primary-600 text-3xl"
                    ></i>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    The path
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Call, implement, maintain, then sit the audit
                  </p>
                </div>
                <div class="space-y-4">
                  <div
                    v-for="(step, index) in pathSteps"
                    :key="step.title"
                    class="flex items-center gap-4 p-4 rounded-xl"
                    :class="
                      step.highlight
                        ? 'bg-primary-50 border-2 border-primary-200'
                        : 'bg-gray-50'
                    "
                  >
                    <div
                      class="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    >
                      <i
                        v-if="step.icon"
                        :class="['fa-solid', step.icon, 'text-sm']"
                      ></i>
                      <span v-else>{{ index + 1 }}</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        {{ step.title }}
                      </h4>
                      <p class="text-sm text-gray-600">{{ step.body }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-section" class="py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div
            class="max-w-3xl mx-auto rounded-2xl border border-[#a8dadc] bg-white px-6 py-8 md:px-10 md:py-10"
          >
            <span class="section-label mb-4">Later, if you want it</span>
            <h2
              class="text-2xl md:text-3xl font-semibold tracking-tight text-[#1a2332] mb-3"
            >
              AI agents can help with the writing
            </h2>
            <p class="text-[#3d4c5c] leading-relaxed">
              After you know where you stand, AI agents in 4ES Hub can draft
              from your answers, ask for missing evidence, and keep records
              moving. You still review and approve every controlled document.
              The agents do not certify you, and they are not the reason to
              buy the software. The reason is a cheaper implementation that
              stays audit-ready.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 md:py-28 bg-primary-600">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a call. We will tell you where you stand.
          </h2>
          <p class="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Then we implement and maintain ISO 9001, 14001, or 45001 with you.
            ISO 9001 and ISO 45001 include 5 consultation hours at no charge.
          </p>
          <a href="#contact-section" class="btn-primary !bg-white !text-primary-700 hover:!bg-[#f1faee]">
            Book a call
            <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="section-label mb-4"
            >
              Contact Us
            </span>
            <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a2332] mb-4">
              Book a call
            </h2>
            <p class="text-lg text-[#3d4c5c] tracking-snug">
              Tell us the standard and where you think you stand. We will use
              the call to confirm the gaps, then implement and maintain the
              system with you. ISO 9001 and ISO 45001 include 5 consultation
              hours at no charge.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-envelope text-primary-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p class="text-gray-600">afawaz@4eshub.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-calendar text-primary-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Book a call
                    </h4>
                    <p class="text-gray-600">
                      We figure out where you stand, then implement and
                      maintain the standard with you
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-globe text-purple-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Global Support
                    </h4>
                    <p class="text-gray-600">USA, Canada, Middle East</p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <p class="text-gray-600 font-medium mb-4">Follow us</p>
                <div class="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/4es-hub"
                    target="_blank"
                    class="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form
                @submit.prevent="handleSubmit"
                class="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-2"
                      for="name"
                      >Full Name *</label
                    >
                    <input
                      id="name"
                      type="text"
                      v-model="form.name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-2"
                      for="email"
                      >Email Address *</label
                    >
                    <input
                      id="email"
                      type="email"
                      v-model="form.email"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-2"
                      for="company"
                      >Company</label
                    >
                    <input
                      id="company"
                      type="text"
                      v-model="form.company"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-gray-700 mb-2"
                      for="message"
                      >Message *</label
                    >
                    <textarea
                      id="message"
                      rows="4"
                      v-model="form.message"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Tell us the standard, where you stand today, and whether you want the 5 free consultation hours for ISO 9001 or 45001"
                      required
                    ></textarea>
                  </div>
                  <div
                    v-if="submitStatus.message"
                    :class="{
                      'text-primary-700 bg-primary-50 p-3 rounded-lg':
                        submitStatus.success,
                      'text-red-700 bg-red-50 p-3 rounded-lg':
                        !submitStatus.success,
                    }"
                  >
                    {{ submitStatus.message }}
                  </div>
                  <button
                    type="submit"
                    class="btn-primary w-full"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? "Sending..." : "Request a call" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-gray-400 py-16">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1">
              <img
                src="/4es-logo.png"
                alt="4ES Hub"
                class="h-10 mb-4 brightness-200"
              />
              <p class="text-sm leading-relaxed">
                Implement ISO 9001, 14001, and 45001 with less consulting.
                Straight instructions, document templates, and a system that
                stays audit-ready.
              </p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Solutions</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <NuxtLink
                    to="/iso-9001"
                    class="hover:text-white transition-colors"
                    >ISO 9001 (Quality Management System)</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/iso-14001"
                    class="hover:text-white transition-colors"
                    >ISO 14001 (Environmental Management)</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/iso-45001"
                    class="hover:text-white transition-colors"
                    >ISO 45001 (Health &amp; Safety Management)</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Resources</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <NuxtLink
                    to="/iso-9001-explained"
                    class="hover:text-white transition-colors"
                    >ISO 9001 Explained</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/iso-45001-explained"
                    class="hover:text-white transition-colors"
                    >ISO 45001 Explained</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/blog"
                    class="hover:text-white transition-colors"
                    >Blog</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/courses"
                    class="hover:text-white transition-colors"
                    >Courses</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Company</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <NuxtLink
                    to="/partners"
                    class="hover:text-white transition-colors"
                    >Partners</NuxtLink
                  >
                </li>
                <li>
                  <a
                    href="#contact-section"
                    class="hover:text-white transition-colors"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="flex flex-wrap gap-4 text-sm mb-4 md:mb-0">
                <a href="#" class="hover:text-white transition-colors"
                  >Privacy Policy</a
                >
                <a href="#" class="hover:text-white transition-colors"
                  >Terms of Use</a
                >
                <a href="#" class="hover:text-white transition-colors"
                  >Terms & Conditions</a
                >
                <a href="#" class="hover:text-white transition-colors"
                  >Security Center</a
                >
              </div>
              <div class="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/4es-hub"
                  target="_blank"
                  class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <p class="text-sm text-center md:text-left mt-4">
              © 2024 4ES Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { getRecentBlogPosts } from "~/utils/blogPosts";

const recentBlogPosts = getRecentBlogPosts(3);

const mobileMenuOpen = ref(false);
const activeModuleId = ref("documents");
const heroDemoVideo = ref(null);
const heroDemoMuted = ref(true);
const heroDemoPaused = ref(false);
let heroDemoAutoplayStarted = false;
let standardTimer = null;

const isoStandards = ["9001", "14001", "45001"];
const currentStandardIndex = ref(0);
const currentStandard = computed(
  () => isoStandards[currentStandardIndex.value],
);

const startSteps = [
  {
    title: "Get a call with us",
    body: "We figure out where you stand against the standard, and what is already in place.",
  },
  {
    title: "Implement with us",
    body: "Follow the instructions and fill the document templates in 4ES Hub, with us beside you.",
  },
  {
    title: "Maintain it with us",
    body: "Keep the records current so the next audit is not months of preparation.",
  },
];

const valuePillars = [
  {
    title: "Less consultation cost",
    body: "You pay for judgment and gaps, not for someone to write the whole system from scratch.",
  },
  {
    title: "Instructions and templates",
    body: "Each requirement comes with what to do and a document template to use.",
  },
  {
    title: "Always audit-ready",
    body: "Evidence stays in the system, so you are not rebuilding a file before every visit.",
  },
];

const valueDetails = [
  {
    title: "Spend less on consultants",
    icon: "fa-sack-dollar",
    body: "A typical project bills heavily for drafting policies, registers, and evidence lists. Those start from templates in 4ES Hub. Consultant time is for reviewing what is specific to your operation.",
  },
  {
    title: "Know the next step",
    icon: "fa-list-ol",
    body: "Implementation instructions tell you what the clause needs, which template to open, and what evidence belongs with it. You are not interpreting the standard alone.",
  },
  {
    title: "Stay ready between audits",
    icon: "fa-clipboard-check",
    body: "Documents, risks, controls, training, and findings live in one system. Surveillance audits open the same records you already maintain.",
  },
];

const consultationOffers = [
  {
    title: "ISO 9001",
    body: "Quality management. 5 consultation hours included.",
  },
  {
    title: "ISO 45001",
    body: "Health and safety. 5 consultation hours included.",
  },
  {
    title: "ISO 14001",
    body: "Environmental management. Same software and path. Ask us about hours.",
  },
  {
    title: "You stay the owner",
    body: "We implement and maintain it with you. A certification body still decides the certificate.",
  },
];

const pathSteps = [
  {
    title: "Get a call",
    body: "We figure out where you stand",
  },
  {
    title: "Implement and maintain",
    body: "Instructions, templates, and records in 4ES Hub",
  },
  {
    title: "A consultant checks gaps",
    body: "Review what is missing. Do not restart a writing project",
  },
  {
    title: "Certificate if you pass",
    body: "A certification body audits and awards it independently",
    highlight: true,
    icon: "fa-trophy",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const playHeroDemo = async () => {
  const video = heroDemoVideo.value;
  if (!video || heroDemoAutoplayStarted) return;

  if (prefersReducedMotion()) {
    heroDemoPaused.value = true;
    return;
  }

  video.muted = true;
  heroDemoMuted.value = true;

  try {
    await video.play();
    heroDemoAutoplayStarted = true;
    heroDemoPaused.value = false;
  } catch {
    heroDemoPaused.value = true;
  }
};

const toggleHeroDemoPlayback = () => {
  const video = heroDemoVideo.value;
  if (!video) return;

  if (video.paused) {
    video
      .play()
      .then(() => {
        heroDemoPaused.value = false;
      })
      .catch(() => {
        heroDemoPaused.value = true;
      });
    return;
  }

  video.pause();
  heroDemoPaused.value = true;
};

const toggleHeroDemoMute = () => {
  const video = heroDemoVideo.value;
  if (!video) return;

  video.muted = !video.muted;
  heroDemoMuted.value = video.muted;
};

const toggleModule = (id) => {
  activeModuleId.value = activeModuleId.value === id ? null : id;
};

const platformModules = [
  {
    id: "documents",
    title: "Documents",
    icon: "fa-file-lines",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Policies, procedures, and work instructions start from templates for the standard you are implementing. Instructions say what each document must cover. You keep owners, versions, and approvals in one library.",
    points: [
      "A template for the document, plus what it has to contain",
      "You review and approve before a document is published",
      "Version history and audit trails stay with the record",
      "Link documents to processes, training, and the clause they support",
    ],
  },
  {
    id: "risks",
    title: "Risks",
    icon: "fa-triangle-exclamation",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Risks sit next to the processes they belong to, with owners, treatments, and controls. You are not rebuilding a spreadsheet the month before the audit.",
    points: [
      "A register for real activities, with what each entry needs",
      "Owners, treatments, and residual levels stay on the record",
      "Connect risks to audits, nonconformities, and objectives",
      "Works across quality, environment, and health and safety",
    ],
  },
  {
    id: "controls",
    title: "Controls",
    icon: "fa-shield-halved",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    description:
      "Operational controls linked to risks, clauses, and the teams who run them, with the evidence an auditor will ask to see.",
    points: [
      "Controls linked to risks, clauses, and the teams who run them",
      "A clear place for the proof you already have",
      "Monitoring cadence and follow-up stay on the record",
      "Visibility by site or department so nothing lives only in email",
    ],
  },
  {
    id: "audits",
    title: "Audits",
    icon: "fa-clipboard-check",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    description:
      "Internal audits use the same system as the documents and controls. Findings and evidence stay attached, so a consultant or certification body is not hunting folders.",
    points: [
      "Audit programs with schedules, scopes, and assigned auditors",
      "Checklists linked to the requirements you already mapped",
      "Finding capture with severity, evidence, and follow-up tasks",
      "History for Stage 1, Stage 2, and surveillance visits",
    ],
  },
  {
    id: "checklists",
    title: "Checklists",
    icon: "fa-list-check",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    description:
      "Reusable checklists for inspections and internal audits, built from the same requirements as the implementation.",
    points: [
      "Reusable templates with sections and questions",
      "Versioned so auditors work from the latest set",
      "Apply the same checklist across sites and programs",
      "Responses become evidence, not a separate spreadsheet",
    ],
  },
  {
    id: "training",
    title: "Training",
    icon: "fa-graduation-cap",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "When a procedure is created or revised, competence still has to be proven. Training records stay next to the documents people must follow.",
    points: [
      "Role-based competence requirements",
      "Sessions, rosters, and completion records",
      "Retraining when a controlled document changes",
      "Authorization records a consultant or auditor can open",
    ],
    learnMore: {
      to: "/training-tracking",
      label: "Explore training tracking by competency",
    },
  },
  {
    id: "surveys",
    title: "Surveys and Feedback",
    icon: "fa-comments",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    description:
      "Customer and employee feedback is filed with the rest of the system, so management review is not a side inbox.",
    points: [
      "Customer and employee survey templates",
      "Themes that feed objectives and actions",
      "Results stored with the rest of the system",
      "Inputs a verifier can see before the external audit",
    ],
  },
  {
    id: "nonconformities",
    title: "Non Conformities",
    icon: "fa-circle-xmark",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "When something is wrong, log it, attach the evidence, and track the corrective action in the same system you are audited on.",
    points: [
      "Identification through closure in one workflow",
      "Root cause, actions, and effectiveness checks",
      "OFIs tracked beside formal nonconformities",
      "Traceability back to audits, risks, and documents",
    ],
  },
  {
    id: "performance",
    title: "Performance Indicators",
    icon: "fa-chart-line",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Indicators for what you already measure, so leadership and later auditors can see whether the system is working.",
    points: [
      "Indicators tied to processes and objectives",
      "Targets, periodic capture, and trends",
      "Evidence for management review",
      "Gaps that become actions, not a slide deck",
    ],
  },
];

const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref({
  success: false,
  message: "",
});

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const homeUrl = `${siteUrl}/`;

useSeoMeta({
  title:
    "4ES Hub | Implement ISO 9001, 14001, or 45001 with less consulting",
  description:
    "Lower consultation cost with straight implementation instructions and document templates. Stay audit-ready in 4ES Hub. ISO 9001 and ISO 45001 include 5 free consultation hours.",
  keywords:
    "ISO 9001, ISO 14001, ISO 45001, ISO implementation, ISO document templates, ISO consultation, audit ready, 4ES Hub",
  ogTitle: "4ES Hub | Implement ISO with less consulting",
  ogDescription:
    "Instructions, document templates, and a system that stays audit-ready. Book a call. ISO 9001 and ISO 45001 include 5 free consultation hours.",
  ogUrl: homeUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
  twitterTitle: "4ES Hub | Implement ISO with less consulting",
  twitterDescription:
    "Straight implementation instructions, document templates, and a system that stays audit-ready. 5 free consultation hours for ISO 9001 and ISO 45001.",
  twitterImage: `${siteUrl}/4es-logo.png`,
});

useHead({
  link: [{ rel: "canonical", href: homeUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "4ES Hub",
        url: homeUrl,
        logo: `${siteUrl}/4es-logo.png`,
        description:
          "4ES Hub helps organizations implement and maintain ISO 9001, 14001, and 45001 with implementation instructions, document templates, and a system that stays audit-ready.",
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United States" },
        ],
        sameAs: ["https://www.linkedin.com/company/4es-hub"],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "4ES Hub",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: homeUrl,
        description:
          "4ES Hub is the management system for implementing ISO 9001, ISO 14001, and ISO 45001: instructions, document templates, and audit-ready records. ISO 9001 and ISO 45001 include 5 free consultation hours.",
        featureList: [
          "Implementation instructions",
          "Document templates",
          "Document control",
          "Audit management",
          "Training records",
          "Risk management",
          "Nonconformity and CAPA",
          "Optional AI drafting assistance",
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "4ES Hub",
        url: homeUrl,
        description:
          "4ES Hub helps organizations in Canada and the United States implement and maintain ISO management systems with less consulting, and stay audit-ready.",
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do we start an ISO implementation with 4ES Hub?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book a call. We figure out where you stand, then implement and maintain the standard with you using implementation instructions and document templates in 4ES Hub. ISO 9001 and ISO 45001 include 5 consultation hours at no charge.",
            },
          },
          {
            "@type": "Question",
            name: "Do I still need a consultant or a certification body?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You need less consulting because the instructions, templates, and records are already in the system. A consultant can review gaps. A certification body partner then runs the external audit and awards the certificate if you pass. 4ES Hub does not issue certificates.",
            },
          },
        ],
      }),
    },
  ],
});

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    const response = await $fetch("/api/contact", {
      method: "POST",
      body: { ...form.value, source: "4es_hub" },
    });

    if (response.status === 200) {
      submitStatus.value = {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
      form.value = {
        name: "",
        email: "",
        company: "",
        message: "",
      };
    } else {
      throw new Error(response.message || "Failed to send message");
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  playHeroDemo();

  if (!prefersReducedMotion()) {
    standardTimer = setInterval(() => {
      currentStandardIndex.value =
        (currentStandardIndex.value + 1) % isoStandards.length;
    }, 2600);
  }

  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});

onBeforeUnmount(() => {
  if (standardTimer) {
    clearInterval(standardTimer);
    standardTimer = null;
  }
});
</script>

<style>
@font-face {
  font-family: "DejaVu Sans";
  src: url("https://cdn.jsdelivr.net/npm/@fontsource/dejavu-sans@5.2.5/files/dejavu-sans-latin-400-normal.woff2")
    format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DejaVu Sans";
  src: url("https://cdn.jsdelivr.net/npm/@fontsource/dejavu-sans@5.2.5/files/dejavu-sans-latin-700-normal.woff2")
    format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DejaVu Sans";
  src: url("https://cdn.jsdelivr.net/npm/@fontsource/dejavu-sans@5.2.5/files/dejavu-sans-latin-700-normal.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
</style>

<style scoped>
#page-container {
  --color-brand: #1f6a6a;
  --color-brand-hover: #1a2332;
  --color-brand-light: #d7efed;
  --color-text: #1a2332;
  --color-text-secondary: #3d4c5c;
  --color-primary: #2d8b8b;
  --color-primary-50: #f1faee;
  --color-primary-100: #d7efed;
  --color-primary-200: #a8dadc;
  --color-primary-300: #7ec8c6;
  --color-primary-400: #4aa3a1;
  --color-primary-500: #2d8b8b;
  --color-primary-600: #1f6a6a;
  --color-primary-700: #185454;
  --color-primary-800: #1a2332;
  --color-primary-900: #121821;
  --color-primary-focus: #185454;
  --color-primary-content: #f1faee;
  background-color: #f1faee;
  color: #1a2332;
}

#page-container :deep(*:not(.fa):not(.fa-solid):not(.fa-regular):not(.fa-brands):not(svg)) {
  font-family: "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
}

#page-container :deep(.bg-gray-50) {
  background-color: #e7f5f3;
}

#page-container :deep(.bg-gray-900),
#page-container :deep(footer) {
  background-color: #1a2332;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}

.hero-iso-slot {
  min-width: 11.5ch;
}

.iso-swap-enter-active,
.iso-swap-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.iso-swap-enter-from {
  opacity: 0;
  transform: translateY(0.35em);
}

.iso-swap-leave-to {
  opacity: 0;
  transform: translateY(-0.35em);
}

@keyframes hero-step-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-step {
  animation: hero-step-in 0.55s ease both;
}

@media (prefers-reduced-motion: reduce) {
  .iso-swap-enter-active,
  .iso-swap-leave-active,
  .hero-step {
    animation: none;
    transition: none;
  }
}
</style>
