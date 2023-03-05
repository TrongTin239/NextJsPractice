import HeaderDesktop from "./header-desktop.page";

import HeaderMobile from "./header-mobile.page";

export function Header() {
  // const token = sessionStorage.getItem("access_token") || "";

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
