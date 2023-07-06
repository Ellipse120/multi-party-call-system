import { useCookies } from "@vueuse/integrations/useCookies";
// import {
//   Loading,
//   LoadingBar,

//   // optional!, for example below
//   // with custom spinner
//   QSpinnerGears,
// } from "quasar";

export default defineNuxtRouteMiddleware((to, from) => {
  // LoadingBar.start();

  // Loading.show({
  //   // delay: 5000,
  //   spinnerColor: "red",
  //   spinner: QSpinnerGears,
  // });

  if (process.server) return;

  const cookies = useCookies();
  const token = cookies.get("token");

  // setTimeout(() => {
  //   Loading.hide();
  //   LoadingBar.stop();
  // }, 3000);

  if (!token) {
    return navigateTo("/login");
  }
});
