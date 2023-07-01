// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "nuxt-quasar-ui",
  ],
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "@unocss/reset/tailwind.css",
    "@/assets/main.css",
  ],

  runtimeConfig: {
    app: {
      serverUrl: "",
      anyRtcAppId: "b3d40bc2dbd808f1edb6b36c0519022b",
    },
  },

  plugins: ["~/plugins/primevue.ts"],

  build: {
    transpile: ["primevue"],
  },

  quasar: {
    lang: "zh-CN",
    iconSet: "mdi-v7",
    plugins: ["Loading", "LoadingBar"],
    config: {
      loading: {},
    },
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
