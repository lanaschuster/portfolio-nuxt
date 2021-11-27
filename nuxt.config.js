export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lana Schuster :: Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Precisa de um desenvolvedor para o seu projeto? Entre em contato!' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Lana Schuster :: Portfolio' },
      { property: 'og:description', content: 'Precisa de um desenvolvedor para o seu projeto? Entre em contato!' },
      { property: 'og:url', content: process.env.baseUrl },
      { property: 'og:image', content: process.env.baseUrl + '/img/favicon.ico' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.css',
    '@/assets/style/font.css',
    '@/assets/style/swiper-bundle.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{
    path: '@/components',
    pathPrefix: false
  }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.STRAPI_GQL_URL || 'http://localhost:1337/graphql',
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
    strapiGql: process.env.STRAPI_GQL_URL || 'http://localhost:1337/graphql',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
