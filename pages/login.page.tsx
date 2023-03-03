import { useAuth } from "hooks/index.page";
import * as React from "react";
import { authApi } from "../api-client";
import { useRouter } from "next/router";
import { LoginFrom } from "component/auth/loginForm";
import { MainLayout } from "component/layout/main.page";
import { LoginPayload } from "models/auth.page";

export default function LoginPage() {
  const router = useRouter();
  const { profile, Login, Logout } = useAuth({
    revalidateOnMount: false,
  });
  async function HandleLoginSubmit(payload: LoginPayload) {
    try {
      await Login(payload);
      // router.push("/about");
    } catch (error) {
      console.log("fail to login", error);
    }
  }
  // async function HandleLogoutClick() {
  //   try {
  //     await Logout();
  //     console.log("redirect to login page");
  //   } catch (error) {
  //     console.log("fail to logout", error);
  //   }
  // }
  // async function HandleGetProfileClick() {
  //   try {
  //     authApi.getProfile();
  //   } catch (error) {
  //     console.log("fail to get profile", error);
  //   }
  // }
  return (
    <div>
      <LoginFrom onSubmit={HandleLoginSubmit} />
    </div>
  );
}
LoginPage.Layout = MainLayout;
