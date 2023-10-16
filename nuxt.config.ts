// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    'nuxt-icon',

  ],
  swiper: {
    prefix: 'Swiper',
    modules: ['navigation', 'pagination'],
  },
  devServer: {
    port: 5555
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL
  },
  colorMode: {
    classSuffix: '',
  },

})
