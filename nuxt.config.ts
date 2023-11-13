// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-headlessui',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/ui',

  ],
  swiper: {
    prefix: 'Swiper',
    modules: ['navigation', 'pagination'],
  },
  devServer: {
    port: 5555
  },
  colorMode: {
    classSuffix: '',
  },

})
