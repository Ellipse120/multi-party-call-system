export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("admin")) {
    return "/";
  }
});
