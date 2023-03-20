// tsrpfc export dạng name
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Footer } from "component/common/index.page";
import { LayoutProps } from "models/common.page";
import dynamic from "next/dynamic";
export interface MainLayoutProps {}
const Header = dynamic(
  () => import("../common/header/index.page").then((mod) => mod.Header),
  { ssr: false }
);
export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={"100vh"}>
      <Header />

      <Box component={"main"} flexGrow="1">
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
