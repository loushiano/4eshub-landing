<template>
  <div id="page-container" class="min-h-screen flex flex-col bg-white">
    <!-- Header/Navigation -->
    <header
      id="header"
      class="sticky top-0 bg-white border-b border-gray-100 z-50"
    >
      <div
        class="container mx-auto flex items-center justify-between px-6 py-4"
      >
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center cursor-pointer">
            <img src="/4es-full.png" alt="4ES Hub" class="h-14" />
          </NuxtLink>
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-green-600 cursor-pointer font-medium flex items-center gap-1 py-2"
            >
              Products
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]"
              >
                <a
                  href="#features-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Compliance Module</a
                >
                <a
                  href="#features-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Operations Module</a
                >
                <a
                  href="#ai-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >AI QCG</a
                >
                <a
                  href="#ai-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >AI SQM</a
                >
              </div>
            </div>
          </div>
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-green-600 cursor-pointer font-medium flex items-center gap-1 py-2"
            >
              Industries
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[180px]"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Aerospace</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Automotive</a
                >
              </div>
            </div>
          </div>
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-green-600 cursor-pointer font-medium flex items-center gap-1 py-2"
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
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Blog</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Whitepaper</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Glossary</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Case Study</a
                >
              </div>
            </div>
          </div>
          <div class="relative group">
            <a
              class="text-gray-700 hover:text-green-600 cursor-pointer font-medium flex items-center gap-1 py-2"
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
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >About Us</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Partners</a
                >
                <a
                  href="#contact-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Contact</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Integrations</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Careers</a
                >
              </div>
            </div>
          </div>
        </nav>
        <div class="flex items-center gap-4">
          <div class="relative group hidden md:block">
            <a
              class="text-gray-700 hover:text-green-600 cursor-pointer font-medium flex items-center gap-1 py-2"
            >
              Login
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <div
              class="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div
                class="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[140px]"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >USA</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Canada</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >India</a
                >
              </div>
            </div>
          </div>
          <a
            href="#contact-section"
            class="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
          >
            Book a free demo
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
          <a
            href="#features-section"
            class="text-gray-700 hover:text-green-600 py-2"
            >Products</a
          >
          <a href="#" class="text-gray-700 hover:text-green-600 py-2"
            >Industries</a
          >
          <a href="#" class="text-gray-700 hover:text-green-600 py-2"
            >Resources</a
          >
          <a href="#" class="text-gray-700 hover:text-green-600 py-2"
            >Company</a
          >
          <a href="#" class="text-gray-700 hover:text-green-600 py-2">Login</a>
          <a
            href="#contact-section"
            class="bg-green-600 text-white text-center rounded-lg px-6 py-2.5 mt-2"
            >Book a free demo</a
          >
        </nav>
      </div>
    </header>

    <main id="main-content">
      <!-- Hero Section -->
      <section
        id="hero-section"
        class="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      >
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="max-w-xl">
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Compliance made effortless.
                <span class="text-green-600">Stay audit-ready every day.</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                4ES Hub helps organizations become audit-ready and prepared for
                ISO certification.
              </p>
              <div class="flex flex-wrap gap-4">
                <a
                  href="#contact-section"
                  class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 transition-all duration-200 shadow-lg shadow-green-600/20"
                >
                  Book a free demo
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
                <a
                  href="#ai-section"
                  class="inline-flex items-center border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold rounded-lg px-8 py-4 transition-all duration-200"
                >
                  See AI in Action
                </a>
              </div>
            </div>
            <div class="relative hidden lg:block">
              <div
                class="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              >
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
                    >
                      <i class="fa-solid fa-shield-halved text-green-600"></i>
                    </div>
                    <div class="flex-1">
                      <div class="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div class="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                    <div
                      class="w-20 h-6 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <span class="text-green-600 text-xs font-medium"
                        >Compliant</span
                      >
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <i class="fa-solid fa-clipboard-check text-blue-600"></i>
                    </div>
                    <div class="flex-1">
                      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div class="h-2 bg-gray-100 rounded w-2/5"></div>
                    </div>
                    <div
                      class="w-20 h-6 bg-blue-100 rounded-full flex items-center justify-center"
                    >
                      <span class="text-blue-600 text-xs font-medium"
                        >Audit Ready</span
                      >
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
                    >
                      <i class="fa-solid fa-robot text-purple-600"></i>
                    </div>
                    <div class="flex-1">
                      <div class="h-3 bg-gray-200 rounded w-4/5 mb-2"></div>
                      <div class="h-2 bg-gray-100 rounded w-3/5"></div>
                    </div>
                    <div
                      class="w-20 h-6 bg-purple-100 rounded-full flex items-center justify-center"
                    >
                      <span class="text-purple-600 text-xs font-medium"
                        >AI Powered</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- Background decoration -->
              <div
                class="absolute -top-4 -right-4 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60"
              ></div>
              <div
                class="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Standards Section -->
      <section id="standards-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              Multi-Standard Support
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              30+ standards. One platform.
            </h2>
            <p class="text-lg text-gray-600">
              Multiple standards don't have to mean 2x the chaos. Manage all
              your certifications from a single connected dashboard.
            </p>
          </div>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
          >
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img src="/iso-9001.svg" alt="ISO 9001" class="w-full h-full" />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 9001</h4>
            </div>
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img
                  src="/iso-45001.svg"
                  alt="ISO 4501"
                  class="w-full h-full"
                />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 45001:2018</h4>
            </div>
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img
                  src="/iso14001.svg"
                  alt="ISO 14001"
                  class="w-full h-full"
                />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 14001:2015</h4>
            </div>
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img
                  src="/iso13485.svg"
                  alt="ISO 13485"
                  class="w-full h-full"
                />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 13485</h4>
            </div>
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img src="/AS9100D.svg" alt="AS9100D" class="w-full h-full" />
              </div>
              <h4 class="font-semibold text-gray-900">AS9100D</h4>
            </div>
            <div
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img
                  src="/iso-17025.svg"
                  alt="ISO 17025"
                  class="w-full h-full"
                />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 17025</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Features Section -->
      <section id="ai-section" class="py-20 md:py-28 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              AI-Powered
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI QCG + 4es Compliance Intelligence That Works for You
            </h2>
            <p class="text-lg text-gray-600">
              The all-in-one platform for Quality, Compliance, and Governance
              (QCG)
            </p>
          </div>

          <!-- AI SQM Features -->
          <div class="mb-16">
            <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
              AI SQM Features
            </h3>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-rotate text-green-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  Automate the audit cycle
                </h4>
                <p class="text-gray-600 text-sm">
                  Create agendas, run desktop audits, capture evidence, and
                  re-evaluate suppliers on cadence.
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-circle-check text-blue-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  Close the loop on SCARs
                </h4>
                <p class="text-gray-600 text-sm">
                  Standard workflows drive supplier accountability from Raised →
                  Closure.
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i
                    class="fa-solid fa-shield-halved text-purple-600 text-xl"
                  ></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  Stay compliant by default
                </h4>
                <p class="text-gray-600 text-sm">
                  Certificate expiry alerts, version history, and complete audit
                  trails.
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-brain text-orange-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  See risks before they repeat
                </h4>
                <p class="text-gray-600 text-sm">
                  AI drafts checklists/reports from notes and highlights likely
                  nonconformities.
                </p>
              </div>
            </div>
          </div>

          <!-- Operations Module Features -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
              Operations Module
            </h3>
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-chart-line text-cyan-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  Product Lifecycle Monitoring
                </h4>
                <p class="text-gray-600 text-sm">
                  Monitor the entire product lifecycle with detailed lists,
                  process overviews, assigned responsibilities, and real-time
                  production data.
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-file-lines text-teal-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  eLogs & BMR
                </h4>
                <p class="text-gray-600 text-sm">
                  Record eLogs and create Batch Manufacturing Records (BMR) that
                  ensure traceability and a single source of truth.
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4"
                >
                  <i class="fa-solid fa-gauge-high text-amber-600 text-xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  Dynamic Dashboards
                </h4>
                <p class="text-gray-600 text-sm">
                  Stay on top of asset maintenance, inventory, and vendor
                  performance with dynamic dashboards.
                </p>
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
                class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
              >
                Why 4ES Hub
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Make your quality unbeatable. Win projects over your biggest
                competitors.
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                Compliance without the complexity. Unify quality and supplier
                performance with one platform.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Centralized compliance management across all
                    standards</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >AI-powered risk detection and nonconformity
                    prevention</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Real-time supplier performance tracking</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-green-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Automated audit trails and documentation</span
                  >
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 transition-all duration-200 mt-8"
              >
                Talk to our team
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div class="relative">
              <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white p-4 rounded-xl border border-gray-100">
                    <div class="text-3xl font-bold text-green-600 mb-1">
                      30+
                    </div>
                    <div class="text-sm text-gray-600">Standards Supported</div>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-100">
                    <div class="text-3xl font-bold text-blue-600 mb-1">
                      100%
                    </div>
                    <div class="text-sm text-gray-600">
                      Audit Trail Coverage
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-100">
                    <div class="text-3xl font-bold text-purple-600 mb-1">
                      50%
                    </div>
                    <div class="text-sm text-gray-600">
                      Time Saved on Audits
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-100">
                    <div class="text-3xl font-bold text-orange-600 mb-1">
                      24/7
                    </div>
                    <div class="text-sm text-gray-600">
                      Compliance Monitoring
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Implementation Process Section -->
      <section class="py-20 md:py-28 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              Implementation
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5-Step Implementation Process
            </h2>
            <p class="text-lg text-gray-600">
              Get started with 4ES Hub and achieve compliance readiness quickly.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <div class="relative text-center">
              <div
                class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                1
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Gap Assessment</h4>
              <p class="text-sm text-gray-600">
                Review policies, procedures, and worksheets for non-compliance
                opportunities
              </p>
              <div
                class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
              ></div>
            </div>
            <div class="relative text-center">
              <div
                class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                2
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">
                Awareness Training
              </h4>
              <p class="text-sm text-gray-600">
                Facilitate training to help teams understand required standards
              </p>
              <div
                class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
              ></div>
            </div>
            <div class="relative text-center">
              <div
                class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                3
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Documentation</h4>
              <p class="text-sm text-gray-600">
                Centralize and automate document management with version control
              </p>
              <div
                class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
              ></div>
            </div>
            <div class="relative text-center">
              <div
                class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                4
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Implementation</h4>
              <p class="text-sm text-gray-600">
                Support for implementing systems and maintaining compliance
              </p>
              <div
                class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
              ></div>
            </div>
            <div class="relative text-center">
              <div
                class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                5
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Internal Audit</h4>
              <p class="text-sm text-gray-600">
                Conduct audits to ensure readiness for certification or
                regulatory audits
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              Testimonials
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p class="text-lg text-gray-600">
              See what industry leaders are saying about 4ES Hub.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              class="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex gap-1 mb-4">
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "4ES Hub has revolutionized how we manage compliance in our
                drone operations. The platform seamlessly tracks all our
                certifications and regulatory requirements across multiple
                jurisdictions. What used to take our team days now happens
                automatically—we're always audit-ready."
              </p>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-green-600 font-semibold">AT</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Ali Taleb</h4>
                  <p class="text-sm text-gray-500">CEO, Vigelon</p>
                </div>
              </div>
            </div>
            <div
              class="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex gap-1 mb-4">
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "As a certification body, we've seen countless QMS platforms.
                4ES Hub stands out with its comprehensive approach to
                multi-standard compliance. It dramatically reduces the time we
                spend on audits and gives us real-time visibility into our
                clients' compliance status."
              </p>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-blue-600 font-semibold">KF</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Kassem Fawaz</h4>
                  <p class="text-sm text-gray-500">Managing Partner, SMG</p>
                </div>
              </div>
            </div>
            <div
              class="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex gap-1 mb-4">
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "In fintech, compliance isn't optional—it's existential. 4ES Hub
                gave us the infrastructure to manage SOC 2, ISO 27001, and
                multiple financial regulations from one dashboard. The
                AI-powered risk detection has caught issues before they became
                problems."
              </p>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-purple-600 font-semibold">DM</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Derek Manuge</h4>
                  <p class="text-sm text-gray-500">CTO, Railz AI</p>
                </div>
              </div>
            </div>
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
                class="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4"
              >
                Certification Partners
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get certified with our trusted partners
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                We've partnered with accredited certification bodies worldwide.
                Once you're audit-ready with 4ES Hub, we'll connect you with the
                right certifier to validate your compliance and issue your
                official ISO certificate.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Access to accredited certification bodies</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Streamlined audit process with pre-shared
                    documentation</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Faster certification timelines</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Support throughout the entire certification journey</span
                  >
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-all duration-200"
              >
                Connect with a certifier
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <p class="text-xs text-gray-500 mt-4">
                <i class="fa-solid fa-info-circle mr-1"></i>
                Note: 4ES Hub connects you with certification bodies but does
                not guarantee certification. Certification decisions are made
                independently by accredited auditors.
              </p>
            </div>
            <div class="relative">
              <div
                class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
              >
                <div class="text-center mb-8">
                  <div
                    class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <i
                      class="fa-solid fa-certificate text-blue-600 text-3xl"
                    ></i>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    How it works
                  </h3>
                  <p class="text-gray-600 text-sm">
                    From preparation to certification
                  </p>
                </div>
                <div class="space-y-4">
                  <div
                    class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div
                      class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    >
                      1
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Prepare with 4ES Hub
                      </h4>
                      <p class="text-sm text-gray-600">
                        Build your QMS and become audit-ready
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div
                      class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    >
                      2
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Connect with certifier
                      </h4>
                      <p class="text-sm text-gray-600">
                        We match you with an accredited body
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div
                      class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    >
                      3
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Pass your audit
                      </h4>
                      <p class="text-sm text-gray-600">
                        Auditors verify your compliance
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200"
                  >
                    <div
                      class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    >
                      <i class="fa-solid fa-trophy text-sm"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Get certified!
                      </h4>
                      <p class="text-sm text-gray-600">
                        Receive your official ISO certificate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 md:py-28 bg-green-600">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation and discover how 4ES Hub can transform your
            compliance management.
          </p>
          <a
            href="#contact-section"
            class="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-semibold rounded-lg px-8 py-4 transition-all duration-200 shadow-lg"
          >
            Book a free demo
            <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              Contact Us
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p class="text-lg text-gray-600">
              Ready to transform your compliance management? Contact us today.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-envelope text-green-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p class="text-gray-600">hello@4eshub.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-calendar text-blue-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Schedule a Call
                    </h4>
                    <p class="text-gray-600">
                      Book a free 30-minute consultation
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
                    href="https://www.linkedin.com/company/smartclick-solutions-inc"
                    target="_blank"
                    class="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-green-600 transition-all"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-green-600 transition-all"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="Tell us about your compliance needs"
                      required
                    ></textarea>
                  </div>
                  <div
                    v-if="submitStatus.message"
                    :class="{
                      'text-green-700 bg-green-50 p-3 rounded-lg':
                        submitStatus.success,
                      'text-red-700 bg-red-50 p-3 rounded-lg':
                        !submitStatus.success,
                    }"
                  >
                    {{ submitStatus.message }}
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? "Sending..." : "Send Message" }}
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
          <div class="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div class="col-span-1">
              <img
                src="/4es-full.png"
                alt="4ES Hub"
                class="h-10 mb-4 brightness-200"
              />
              <p class="text-sm leading-relaxed">
                The all-in-one platform for Quality, Compliance, and Governance.
              </p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Products</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Compliance Module</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Operations Module</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >AI QCG</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >AI SQM</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >OCTO</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Industries</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Aerospace</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Automotive</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Resources</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Blog</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Whitepaper</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Glossary</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Case Study</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Company</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >About Us</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Partners</a
                  >
                </li>
                <li>
                  <a
                    href="#contact-section"
                    class="hover:text-white transition-colors"
                    >Contact</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Integrations</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >Careers</a
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
                  href="https://www.linkedin.com/company/smartclick-solutions-inc"
                  target="_blank"
                  class="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all"
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
import { ref, onMounted } from "vue";

const mobileMenuOpen = ref(false);

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

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    const response = await $fetch("/api/contact", {
      method: "POST",
      body: { ...form.value, source: "landing_page" },
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
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});
</script>

<style scoped>
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
</style>
