<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}

:root {
  --color-brand: #253fa2;
  --color-brand-hover: #1e3282;
  --color-brand-light: #eef1fb;
  --color-text: #1d1d1f;
  --color-text-secondary: #6e6e73;
  --color-text-tertiary: #86868b;

  /* Base colors */
  --color-base: #ffffff;
  --color-base-50: #fbfbfd;
  --color-base-100: #f5f5f7;
  --color-base-200: #e8e8ed;
  --color-base-300: #d2d2d7;
  --color-base-400: #aeaeb2;
  --color-base-500: #86868b;
  --color-base-600: #6e6e73;
  --color-base-700: #424245;
  --color-base-800: #1d1d1f;
  --color-base-900: #000000;
  --color-base-content: #1d1d1f;

  /* Primary colors — brand #253fa2 */
  --color-primary: #253fa2;
  --color-primary-50: #eef1fb;
  --color-primary-100: #dce2f6;
  --color-primary-200: #b9c5ed;
  --color-primary-300: #8fa3e0;
  --color-primary-400: #5f7bd4;
  --color-primary-500: #3f5fc8;
  --color-primary-600: #253fa2;
  --color-primary-700: #1e3282;
  --color-primary-800: #182868;
  --color-primary-900: #121e4e;
  --color-primary-focus: #1e3282;
  --color-primary-content: #ffffff;

  /* Secondary colors */
  --color-secondary: #5f7bd4;
  --color-secondary-50: #eef1fb;
  --color-secondary-100: #dce2f6;
  --color-secondary-200: #b9c5ed;
  --color-secondary-300: #8fa3e0;
  --color-secondary-400: #5f7bd4;
  --color-secondary-500: #3f5fc8;
  --color-secondary-600: #253fa2;
  --color-secondary-700: #1e3282;
  --color-secondary-800: #182868;
  --color-secondary-900: #121e4e;
  --color-secondary-focus: #1e3282;
  --color-secondary-content: #ffffff;

  /* Accent colors */
  --color-accent: #253fa2;
  --color-accent-50: #eef1fb;
  --color-accent-100: #dce2f6;
  --color-accent-200: #b9c5ed;
  --color-accent-300: #8fa3e0;
  --color-accent-400: #5f7bd4;
  --color-accent-500: #3f5fc8;
  --color-accent-600: #253fa2;
  --color-accent-700: #1e3282;
  --color-accent-800: #182868;
  --color-accent-900: #121e4e;
  --color-accent-focus: #1e3282;
  --color-accent-content: #ffffff;

  /* Neutral colors */
  --color-neutral: #86868b;
  --color-neutral-50: #fbfbfd;
  --color-neutral-100: #f5f5f7;
  --color-neutral-200: #e8e8ed;
  --color-neutral-300: #d2d2d7;
  --color-neutral-400: #aeaeb2;
  --color-neutral-500: #86868b;
  --color-neutral-600: #6e6e73;
  --color-neutral-700: #424245;
  --color-neutral-800: #1d1d1f;
  --color-neutral-900: #000000;
  --color-neutral-focus: #424245;
  --color-neutral-content: #ffffff;

  /* Info colors */
  --color-info: #253fa2;
  --color-info-50: #eef1fb;
  --color-info-100: #dce2f6;
  --color-info-200: #b9c5ed;
  --color-info-300: #8fa3e0;
  --color-info-400: #5f7bd4;
  --color-info-500: #3f5fc8;
  --color-info-600: #253fa2;
  --color-info-700: #1e3282;
  --color-info-800: #182868;
  --color-info-900: #121e4e;
  --color-info-focus: #1e3282;
  --color-info-content: #ffffff;

  /* Success colors */
  --color-success: #10b981;
  --color-success-50: #ecfdf5;
  --color-success-100: #d1fae5;
  --color-success-200: #a7f3d0;
  --color-success-300: #6ee7b7;
  --color-success-400: #34d399;
  --color-success-500: #10b981;
  --color-success-600: #059669;
  --color-success-700: #047857;
  --color-success-800: #065f46;
  --color-success-900: #064e3b;
  --color-success-focus: #059669;
  --color-success-content: #ffffff;

  /* Warning colors */
  --color-warning: #f59e0b;
  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-200: #fde68a;
  --color-warning-300: #fcd34d;
  --color-warning-400: #fbbf24;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;
  --color-warning-800: #92400e;
  --color-warning-900: #78350f;
  --color-warning-focus: #d97706;
  --color-warning-content: #ffffff;

  /* Error colors */
  --color-error: #ef4444;
  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-200: #fecaca;
  --color-error-300: #fca5a5;
  --color-error-400: #f87171;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;
  --color-error-800: #991b1b;
  --color-error-900: #7f1d1d;
  --color-error-focus: #dc2626;
  --color-error-content: #ffffff;
}

.dark {
  --color-base: #1d1d1f;
  --color-base-50: #000000;
  --color-base-100: #1d1d1f;
  --color-base-200: #424245;
  --color-base-300: #6e6e73;
  --color-base-400: #86868b;
  --color-base-500: #aeaeb2;
  --color-base-600: #d2d2d7;
  --color-base-700: #e8e8ed;
  --color-base-800: #f5f5f7;
  --color-base-900: #fbfbfd;
  --color-base-content: #f5f5f7;

  --color-primary: #5f7bd4;
  --color-primary-50: #121e4e;
  --color-primary-100: #182868;
  --color-primary-200: #1e3282;
  --color-primary-300: #253fa2;
  --color-primary-400: #3f5fc8;
  --color-primary-500: #5f7bd4;
  --color-primary-600: #8fa3e0;
  --color-primary-700: #b9c5ed;
  --color-primary-800: #dce2f6;
  --color-primary-900: #eef1fb;
  --color-primary-focus: #5f7bd4;
  --color-primary-content: #1d1d1f;
}

*,
*::before,
*::after {
  font-family:
    -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  color: var(--color-text);
  background-color: #ffffff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-text);
  letter-spacing: -0.022em;
  font-weight: 600;
}

p,
li {
  letter-spacing: -0.011em;
}

/* Apple-style buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  background-color: var(--color-brand);
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.011em;
  padding: 0.6875rem 1.375rem;
  border-radius: 980px;
  border: none;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--color-brand-hover);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  background-color: transparent;
  color: var(--color-brand);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.011em;
  padding: 0.625rem 1.25rem;
  border-radius: 980px;
  border: 1.5px solid var(--color-brand);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  text-decoration: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: var(--color-brand-light);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-brand);
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.011em;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.btn-ghost:hover {
  opacity: 0.72;
}

.text-link {
  color: var(--color-brand);
  font-weight: 500;
  letter-spacing: -0.011em;
  transition: opacity 0.2s ease;
}

.text-link:hover {
  opacity: 0.72;
}

.nav-link {
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.011em;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link-active {
  color: var(--color-brand);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3125rem 0.75rem;
  background-color: var(--color-brand-light);
  color: var(--color-brand);
  border-radius: 980px;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.011em;
}

.section-label {
  display: inline-block;
  padding: 0.3125rem 0.75rem;
  background-color: var(--color-brand-light);
  color: var(--color-brand);
  border-radius: 980px;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.011em;
}
</style>
