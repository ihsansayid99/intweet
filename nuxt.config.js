export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'InTweet - Design kan Tweet Kamu',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Intweet.id Designkan Tweet Anda' },
      { name: 'description', content: 'Template Design Tweet terbaik se-indonesia' },
      { name: 'keywords', content: 'Tweet, Intweet, Intweet.id, Tweet Template, Stories Tweet, Template Design, Twitter Stories, Tweet Template, Tweet Design' },
      { name: 'author', content: 'Ihsan Sayid Muharrom' },
      { image: 'https://intweet.vercel.app/logo.svg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://intweet.vercel.app/' },
      { property: 'og:title', content: 'Intweet.id Designkan Tweet Anda' },
      { property: 'og:description', content: 'Template Design Tweet terbaik se-indonesia' },
      { property: 'og:image', content: 'https://intweet.vercel.app/logo.svg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://intweet.vercel.app/' },
      { property: 'twitter:title', content: 'Intweet.id Designkan Tweet Anda' },
      { property: 'twitter:description', content: 'Template Design Tweet terbaik se-indonesia' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/intweet.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap'},
    ],
    script: [
        {type: 'text/javascript', src: '//platform.twitter.com/widgets.js', async: true, defer: true },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          'data-ad-client': 'ca-pub-6712259079868297',
          async: true
        }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/html2canvas.js', ssr: false
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-Z12CPCN3CG'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/svg",
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {}
  },
  env: {
    bearerTwitter: process.env.BEARER_TOKEN_TWITTER
  },
  loading: {
    color: 'LightGreen',
    height: '5px'
  },
}
