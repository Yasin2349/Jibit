import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  components: true,
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});