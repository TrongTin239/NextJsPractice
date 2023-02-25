// tsrpfc export dạng name
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Footer, Header } from "component/common/index.page";

import { LayoutProps } from "pages/models/index.page";

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
