import { Box } from "@mui/material";
import { HeroSection } from "component/home";

import { MainLayout } from "component/layout";

export interface indexProps {
  postList: any[];
}

export default function Home({ postList }: indexProps) {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}
Home.Layout = MainLayout;
