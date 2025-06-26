import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: true,
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    '~/assets/css/main.css',                 // فایل اصلی CSS که Tailwind داخلشه
    '@fortawesome/fontawesome-free/css/all.css',
    '~/pages/responcive.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),    // اگر واقعا نیاز داری این پلاگین رو اینجا باشه
    ],
  },
});
