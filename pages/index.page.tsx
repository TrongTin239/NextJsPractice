import { Box } from "@mui/material";
import FeatureWorks from "component/home/feature-works";
import { HeroSection } from "component/home/index.page";
import RecentPost from "component/home/recent-post.page";

import { MainLayout } from "component/layout/index.page";

export interface indexProps {
  postList: any[];
}

export default function Home({ postList }: indexProps) {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
      <FeatureWorks />
    </Box>
  );
}
Home.Layout = MainLayout;
