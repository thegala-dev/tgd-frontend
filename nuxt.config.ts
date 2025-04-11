// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    viewer: true,
    exposeConfig: false,
  },
  //vite: {
  //  server: {
  //    allowedHosts: ['5514-93-71-128-188.ngrok-free.app'],
  //  }
  //}
})