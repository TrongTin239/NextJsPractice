import useSWR, { useSWRConfig } from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../api-client";

export function useAuth(options?: Partial<PublicConfiguration>) {
  //quản lí profile
  // reusable
  const time = 60 * 60 * 100;
  const { dedupingInterval, revalidateOnFocus } = useSWRConfig();

  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: time,
    revalidateOnFocus: false,
    ...options,
  });
  const firstLoading = profile === undefined && error === undefined;
  async function Login() {
    await authApi.login({
      username: "test1",
      password: "123123",
    });
    await mutate();
  }
  async function Logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    Login,
    Logout,
    firstLoading,
  };
}
