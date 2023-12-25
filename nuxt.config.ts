// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/ynt_yonatie',
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Yossakorn Napeang Web Portfolio"
    }
  },
  css: [
      'vuetify/lib/styles/main.sass',
      '@/assets/css/global.css',
      '@/assets/scss/_variables.scss'
    ],
    
  build: {
    transpile: ['vuetify']
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Overpass: [300, 500, 700]
    },
    useStylesheet: true
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    },
  }
})
