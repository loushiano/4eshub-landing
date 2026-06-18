<template>
  <div id="page-container" class="min-h-screen flex flex-col bg-white">
    <!-- Header/Navigation -->
    <header
      id="header"
      class="sticky top-0  bg-white border-b border-gray-100 z-50"
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
          <NuxtLink
            to="/iso-9001"
            class="text-gray-700 hover:text-green-600 font-medium py-2"
          >
            ISO 9001
          </NuxtLink>
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
                <NuxtLink
                  to="/blog"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Blog</NuxtLink
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
                  href="#pricing-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Pricing</a
                >
                <a
                  href="#contact-section"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Contact</a
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
                  href="https://app.4eshub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >North America</a
                >
                <a
                  href="https://4es.smartclick.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >Middle East</a
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
          <NuxtLink
            to="/iso-9001"
            class="text-gray-700 hover:text-green-600 py-2"
            >ISO 9001</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="text-gray-700 hover:text-green-600 py-2"
            >Blog</NuxtLink
          >
          <a
            href="#pricing-section"
            class="text-gray-700 hover:text-green-600 py-2"
            >Pricing</a
          >
          <a
            href="#contact-section"
            class="text-gray-700 hover:text-green-600 py-2"
            >Contact</a
          >
          <a
            href="https://app.4eshub.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 hover:text-green-600 py-2"
            >Login — North America</a
          >
          <a
            href="https://4es.smartclick.solutions"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 hover:text-green-600 py-2"
            >Login — Middle East</a
          >
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
              <span
                class="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-5"
              >
                ISO 9001 experts + QMS software
              </span>
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                From zero to ISO certification.
                <span class="text-green-600">Stay audit-ready every day.</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                4ES Hub helps you build your QMS in software, get connected with
                certification body and consultant partners, and move from no
                formal system to audit-ready evidence.
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
                  href="#partners-section"
                  class="inline-flex items-center border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold rounded-lg px-8 py-4 transition-all duration-200"
                >
                  See zero-to-certified path
                </a>
              </div>
              <div
                class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700"
              >
                <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <i class="fa-solid fa-user-tie text-green-600 mb-2"></i>
                  <p class="font-semibold">Consultant support</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <i class="fa-solid fa-certificate text-blue-600 mb-2"></i>
                  <p class="font-semibold">Certification body access</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <i class="fa-solid fa-list-check text-purple-600 mb-2"></i>
                  <p class="font-semibold">QMS built in 4ES Hub</p>
                </div>
              </div>
            </div>
            <div class="relative hidden lg:block">
            
             <img src="/screen.png" alt="4ES Hub" class="w-full h-full" />
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
            <NuxtLink
              to="/iso-9001"
              class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto mb-3"
              >
                <img src="/iso-9001.svg" alt="ISO 9001" class="w-full h-full" />
              </div>
              <h4 class="font-semibold text-gray-900">ISO 9001</h4>
            </NuxtLink>
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
            <!-- <div
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
            </div> -->
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing-section" class="py-20 md:py-28 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4"
            >
              Pricing
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plans that scale with your compliance program
            </h2>
            <p class="text-lg text-gray-600">
              Start with the modules you need, or unlock the full platform with
              AI and premium support.
            </p>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
          >
            <!-- Per-module -->
            <div
              class="flex flex-col bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-2">Module access</h3>
              <p class="text-gray-600 text-sm mb-6">
                Pay per module—core QMS workflows without AI.
              </p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-gray-900">$100</span>
                <span class="text-gray-600"> / module</span>
              </div>
              <p class="text-sm text-gray-500 mb-4">
                Includes access only to the modules you choose. No AI features.
              </p>
              <ul class="text-sm text-gray-700 space-y-2 mb-8 flex-1">
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Documents</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Risk management</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Knowledge</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Trainings</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Audit</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Survey</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Management review</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Performance indicators</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Non-conformities &amp; OFI</span>
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex justify-center items-center w-full border-2 border-gray-300 hover:border-green-600 text-gray-800 hover:text-green-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Get started
              </a>
            </div>

            <!-- Platform -->
            <div
              class="flex flex-col bg-white p-8 rounded-2xl border-2 border-green-600 shadow-lg shadow-green-600/10 relative lg:scale-[1.02] lg:z-10"
            >
              <span
                class="absolute top-0 right-6 -translate-y-1/2 inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full"
                >Most popular</span
              >
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Full platform
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Every module, AI included, with support and ongoing enhancements.
              </p>
              <div class="mb-2">
                <span class="text-4xl font-bold text-gray-900">$799</span>
                <span class="text-gray-600"> / month</span>
              </div>
              <p class="text-sm text-gray-600 mb-6">
                AI usage included up to
                <strong class="text-gray-800">10M tokens</strong>
                ; then
                <strong class="text-gray-800">$0.50 per million</strong>
                tokens.
              </p>
              <ul class="text-sm text-gray-700 space-y-3 mb-8 flex-1">
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>All modules and AI features</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Dedicated support</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>2 Custom AI agents for automation</span>
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex justify-center items-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Book a demo
              </a>
            </div>

            <!-- Enterprise / custom -->
            <div
              class="flex flex-col bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Custom &amp; AI agents
              </h3>
              <p class="text-gray-600 text-sm mb-6">
                Everything in Full platform, plus tailored AI agents across your
                workflows.
              </p>
              <div class="mb-6">
                <span class="text-3xl font-bold text-gray-900">Custom</span>
                <p class="text-gray-600 text-sm mt-2">Let's scope your rollout.</p>
              </div>
              <ul class="text-sm text-gray-700 space-y-3 mb-8 flex-1">
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Everything in the $799 / mo plan</span>
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span
                    >Implementation of AI agents to help your team use every
                    tool in the app</span
                  >
                </li>
                <li class="flex gap-2">
                  <i
                    class="fa-solid fa-check text-green-600 mt-0.5 flex-shrink-0"
                  ></i>
                  <span>Volume pricing &amp; enterprise terms</span>
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex justify-center items-center w-full border-2 border-gray-300 hover:border-green-600 text-gray-800 hover:text-green-700 font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section id="blog-section" class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span
              class="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4"
            >
              Blog
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Practical compliance advice for audit-ready teams
            </h2>
            <p class="text-lg text-gray-600">
              Field notes on simplifying documentation, quality workflows, and
              certification readiness.
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
                    class="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold"
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
                  class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
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
              class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 transition-all duration-200"
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
                class="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4"
              >
                Zero to Certified
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experts, certification partners, and QMS software in one path
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                If you are starting ISO 9001 from scratch, 4ES Hub can help you
                get the right support from day one. We connect organizations with
                certification body and consultant partners, then help implement
                the QMS inside 4ES Hub so documents, audits, training, risks,
                nonconformities, and management review evidence stay organized.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Introductions to ISO 9001 consultant and certification body
                    partners</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >QMS implementation workflows for documents, audits,
                    training, risks, and corrective actions</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Audit-ready evidence created as your team works</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <i class="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700"
                    >Support from initial gap assessment through certification
                    readiness and ongoing surveillance audits</span
                  >
                </li>
              </ul>
              <a
                href="#contact-section"
                class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-all duration-200"
              >
                Start from zero to certified
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <p class="text-xs text-gray-500 mt-4">
                <i class="fa-solid fa-info-circle mr-1"></i>
                Note: 4ES Hub provides software and partner introductions but
                does not guarantee certification. Certification decisions are
                made independently by the certification body.
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
                    From no formal QMS to certification-ready
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
                        Assess the gap
                      </h4>
                      <p class="text-sm text-gray-600">
                        Understand your scope, timeline, and missing QMS pieces
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
                        Build in 4ES Hub
                      </h4>
                      <p class="text-sm text-gray-600">
                        Set up documents, owners, training, audits, and actions
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
                        Connect with experts
                      </h4>
                      <p class="text-sm text-gray-600">
                        Work with consultant and certification body partners
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
                        Get certification-ready
                      </h4>
                      <p class="text-sm text-gray-600">
                        Go into the audit with organized evidence and workflows
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
            Ready to move from zero to certified?
          </h2>
          <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation and see how 4ES Hub can help you build your
            QMS, connect with experts, and prepare for ISO certification.
          </p>
          <a
            href="#contact-section"
            class="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-semibold rounded-lg px-8 py-4 transition-all duration-200 shadow-lg"
          >
            Start your certification path
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
              Talk to us about ISO certification
            </h2>
            <p class="text-lg text-gray-600">
              Tell us where you are today, and we will help map the path from
              QMS implementation to certification readiness.
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
                    <p class="text-gray-600">afawaz@4eshub.com</p>
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
                    href="https://www.linkedin.com/company/4es-hub"
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
                      placeholder="Tell us whether you are starting ISO 9001 from scratch, preparing for audit, or looking for certification support"
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
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1">
              <img
                src="/4es-logo.png"
                alt="4ES Hub"
                class="h-10 mb-4 brightness-200"
              />
              <p class="text-sm leading-relaxed">
                The all-in-one platform for Quality, Compliance, and Governance.
              </p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Standards</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <NuxtLink
                    to="/iso-9001"
                    class="hover:text-white transition-colors"
                    >ISO 9001</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Resources</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <NuxtLink
                    to="/blog"
                    class="hover:text-white transition-colors"
                    >Blog</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Company</h4>
              <ul class="space-y-3 text-sm">
                <li>
                  <a
                    href="#pricing-section"
                    class="hover:text-white transition-colors"
                    >Pricing</a
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
import { getRecentBlogPosts } from "~/utils/blogPosts";

const recentBlogPosts = getRecentBlogPosts(3);

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

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
const homeUrl = `${siteUrl}/`;

useSeoMeta({
  title: "ISO 9001 Certification Help & QMS Software | 4ES Hub",
  description:
    "4ES Hub helps organizations move from zero to ISO certification with QMS software, audit-ready workflows, and certification body and consultant partner introductions.",
  ogTitle: "4ES Hub | From Zero to ISO Certification",
  ogDescription:
    "Build your QMS in software, connect with certification and consultant partners, and prepare for ISO audits with organized evidence.",
  ogUrl: homeUrl,
  ogImage: `${siteUrl}/4es-logo.png`,
  twitterCard: "summary_large_image",
  twitterTitle: "4ES Hub | ISO 9001 Certification Help",
  twitterDescription:
    "QMS software plus partner support to move from zero to certification-ready.",
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
          "4ES Hub provides QMS software and partner introductions for organizations working toward ISO certification.",
        sameAs: [
          "https://www.linkedin.com/company/4es-hub",
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
          "ISO certification help, QMS implementation software, and audit readiness workflows for growing organizations.",
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

.text-green-100 {
  color: #dbeafe;
}

.text-green-600,
.hover\:text-green-600:hover {
  color: #2563eb;
}

.text-green-700 {
  color: #1d4ed8;
}

.bg-green-50,
.hover\:bg-green-50:hover {
  background-color: #eff6ff;
}

.bg-green-100,
.hover\:bg-green-100:hover {
  background-color: #dbeafe;
}

.bg-green-400 {
  background-color: #60a5fa;
}

.bg-green-600,
.hover\:bg-green-600:hover {
  background-color: #2563eb;
}

.hover\:bg-green-700:hover {
  background-color: #1d4ed8;
}

.hover\:border-green-300:hover {
  border-color: #93c5fd;
}

.hover\:border-green-600:hover,
.focus\:border-green-500:focus {
  border-color: #2563eb;
}

.focus\:ring-green-500:focus {
  --tw-ring-color: #3b82f6;
}

.shadow-green-600\/20 {
  --tw-shadow-color: rgb(37 99 235 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
</style>
