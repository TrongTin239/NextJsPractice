// tsrpfc export dạng name
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Footer, Header } from "component/common";

import { LayoutProps } from "pages/models";

export interface MainLayoutProps {}

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
