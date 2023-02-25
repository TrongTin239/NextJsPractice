import { useAuth } from "hooks";
import * as React from "react";
import { authApi } from "../api-client";
import { useRouter } from "next/router";
export default function LoginPage() {
  const router = useRouter();
  const { profile, Login, Logout } = useAuth({
    revalidateOnMount: false,
  });
  async function HandleLoginClick() {
    try {
      await Login();
      router.push("/about");
    } catch (error) {
      console.log("fail to login", error);
    }
  }
  async function HandleLogoutClick() {
    try {
      await Logout();
      console.log("redirect to login page");
    } catch (error) {
      console.log("fail to logout", error);
    }
  }
  // async function HandleGetProfileClick() {
  //   try {
  //     authApi.getProfile();
  //   } catch (error) {
  //     console.log("fail to get profile", error);
  //   }
  // }
  return (
    <div>
      <h1>Login page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={HandleLoginClick}> login</button>

      <button onClick={HandleLogoutClick}> log out</button>
    </div>
  );
}
