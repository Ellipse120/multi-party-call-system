import { useCookies } from '@vueuse/integrations/useCookies';

const key1 = 'token';
const key2 = 'user-info';

export const useAuth = () => {
  const cookies = useCookies();
  const userInfo = useState(key2, () => cookies.get(key2));

  const token = useState(key1, () => cookies.get(key1));

  const isLoggedIn = computed(() => !!token.value);

  const setToken = (v: any) => {
    cookies.set(key1, v);
    token.value = v;
  };

  const setUserInfo = (v: any) => {
    cookies.set(key2, v);
    userInfo.value = v;
  };

  const doLogout = () => {
    cookies.remove(key1);
    cookies.remove(key2);
    navigateTo('/login');
  };

  return {
    token,
    isLoggedIn,
    setToken,
    doLogout,
    setUserInfo,
  };
};
