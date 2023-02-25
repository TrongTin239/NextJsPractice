import { LayoutProps } from "pages/models/index.page";
import * as React from "react";
import Link from "next/link";

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
