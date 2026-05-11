// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    publicKey: process.env.PUBLIC_KEY,
    secretKey: process.env.SECRET_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://4eshub.com",
    },
  },
  devServer: {
    port: 8000,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s | 4ES Hub",
      title: "Your ISO Certification Partner",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "4ES Hub helps teams centralize compliance documentation, manage ISO readiness, and stay audit-ready every day.",
        },
        {
          name: "keywords",
          content:
            "ISO certification software, compliance management, audit readiness, QMS software, supplier quality management, document control",
        },
        { name: "author", content: "4ES Hub" },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large",
        },
        { name: "theme-color", content: "#2563eb" },
        { property: "og:site_name", content: "4ES Hub" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://4eshub.com/4es-logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://4eshub.com/4es-logo.png" },
      ],
      link: [
        { rel: "icon", type: "image/ico", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/4es-logo.png" },
      ],
    },
  },
});
