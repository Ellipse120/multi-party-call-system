import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@vee-validate/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "vuetify/styles",
    "@unocss/reset/tailwind.css",
    "@/assets/main.css",
  ],

  runtimeConfig: {
    app: {
      serverUrl: "",
    },
  },

  plugins: ["~/plugins/vuetify.ts", "~/plugins/primevue.ts"],

  build: {
    transpile: ["primevue", "vuetify"],
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
