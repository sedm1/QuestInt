// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [[ '@nuxtjs/google-fonts', {families: { Roboto: true, Inter: true }}], '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
          additionalData: '@import "@/assets/styles/main.sass"',
        },
      },
    },
  }
})
