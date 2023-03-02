import { Box } from "@mui/material";
import SEO from "component/common/seo";
import FeatureWorks from "component/home/feature-works";
import { HeroSection } from "component/home/index.page";
import RecentPost from "component/home/recent-post.page";

import { MainLayout } from "component/layout/index.page";
import { images } from "constants/images.page";
import useDownloader from "react-use-downloader";

export interface indexProps {
  postList: any[];
}

export default function Home({ postList }: indexProps) {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "../../assets/CV_FE.pdf";
  const fileName = "NguyenTrongTin_FE_0348652767";
  return (
    <Box>
      <SEO
        data={{
          title: "NextJs Practice | Nguyễn Trọng Tín",
          description: "Learning Nextjs  to build a website by myself",
          thumbnailUrl:
            "https://res.cloudinary.com/dfnh1k50l/image/upload/v1677588784/nextjs/Rectangle_30_1_wqy457.jpg",
          url: "https://learn-nextjs-mibiz4rcc-trongtin239.vercel.app/",
        }}
      />
      <HeroSection download={download} fileUrl={fileUrl} filename={fileName} />
      <RecentPost />
      <FeatureWorks />
    </Box>
  );
}
Home.Layout = MainLayout;
