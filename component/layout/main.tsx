// tsrpfc export dạng name
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "component/common/footer";
import Header from "component/common/header";

import { LayoutProps } from "pages/models";

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={"100vh"}>
      <Header></Header>

      <Box component={"main"} flexGrow="1">
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
