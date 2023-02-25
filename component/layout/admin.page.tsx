import { LayoutProps } from "pages/models/index.page";
import * as React from "react";
import Link from "next/link";
import { Auth } from "component/common/index.page";
import { useAuth } from "hooks/index.page";
import { useRouter } from "next/dist/client/router";
export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { Logout, profile } = useAuth();
  const router = useRouter();
  async function HandleLogoutClick() {
    try {
      await Logout();
      console.log("redirect to login page");
      router.push("/login");
    } catch (error) {
      console.log("fail to logout", error);
    }
  }
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        {JSON.stringify(profile)}
        <button onClick={HandleLogoutClick}>Logout</button>
        <Link href="/">
          <a> Home</a>
        </Link>
        <Link href="/about">
          <a> About</a>
        </Link>
        <div>{children}</div>
      </div>
    </Auth>
  );
}
