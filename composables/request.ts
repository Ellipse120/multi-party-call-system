import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useRequest<T>(url: string, options: UseFetchOptions<T> = {}) {
  const { token } = useAuth();
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.serverUrl,
    // cache request
    key: url,

    // set user token if connected
    headers: token ? { Authorization: `Bearer ${token}` } : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  };

  // set deep defaults
  const params = defu(options, defaults);

  return useFetch(url, params);
}
