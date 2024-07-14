// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ["@nuxt/ui", "@nuxt/fonts"],
  compatibilityDate: "2024-07-09",
  runtimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
});