import { useTitle } from "@vueuse/core";

export default defineNuxtRouteMiddleware((to) => {
  useTitle(
    `${to.name || to?.meta?.title || ""} - ${useAppConfig().corporation}`
  );
});
