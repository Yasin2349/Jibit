import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: true,
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/main.css',               
    '@fortawesome/fontawesome-free/css/all.css',
    '~/pages/responcive.css',
    '@/assets/scss/theme.scss'
  ],
  vite: {
    plugins: [
      tailwindcss(),    
    ],
  },
});
