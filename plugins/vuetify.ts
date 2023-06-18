import { createVuetify } from "vuetify";
import { zhHans } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: "zhHans",
      messages: {
        zhHans,
      },
    },
    defaults,
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },
  });

  app.vueApp.use(vuetify);
});
