import { useCookies } from "@vueuse/integrations/useCookies";

export const useAuth = () => {
  const cookies = useCookies();

  const token = ref(cookies.get("token"));

  const isLoggedIn = computed(() => !!token.value);

  const setToken = (v: any) => {
    cookies.set("token", v);
  };

  const doLogout = () => {
    cookies.remove("token");
    navigateTo("/login");
  };

  return {
    token,
    isLoggedIn,
    setToken,
    doLogout,
  };
};
