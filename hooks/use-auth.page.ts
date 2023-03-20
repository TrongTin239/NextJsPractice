import { LOCAL_KEY } from "constant";
import { LoginPayload, UserProfile } from "models/auth.page";
import { useEffect } from "react";

import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../api-client";

function getUserInfo(): UserProfile | null {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY.USEER_INFO) || "");
  } catch (error) {
    return null;
  }
}

export function useAuth(options?: Partial<PublicConfiguration>) {
  //quản lí profile
  // reusable
  useEffect(() => {}, []);
  const time = 60 * 60 * 100;

  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: time,
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess(data) {
      localStorage.setItem(LOCAL_KEY.USEER_INFO, JSON.stringify(data));
    },
    onError(err) {
      Logout();
      localStorage.removeItem(LOCAL_KEY.USEER_INFO);
    },
  });

  const firstLoading = profile === undefined && error === undefined;
  async function Login(payload: LoginPayload) {
    await authApi.login(payload);

    await mutate();
  }
  async function Logout() {
    await authApi.logout();
    mutate({}, false);
    localStorage.removeItem(LOCAL_KEY.USEER_INFO);
  }

  return {
    profile,
    error,
    Login,
    Logout,
    firstLoading,
  };
}
