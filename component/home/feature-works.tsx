import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import { Post } from "pages/models/post";
import { Work } from "pages/models/works";
import WorkList from "work/work-list";
import PostCard from "./post-card";

export interface RecentPostProps {}

export default function FeatureWorks(props: RecentPostProps) {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createAt: "1677322207417",
      tagList: ["Dashboard"],
      shortDiscription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      updateAt: "1677322207417",
      fullDiscription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dfnh1k50l/image/upload/v1677588784/nextjs/Rectangle_30_1_wqy457.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createAt: "1677322207417",
      tagList: ["Illustration"],
      shortDiscription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDiscription: "",
      updateAt: "1677322207417",
      thumbnailUrl:
        "https://res.cloudinary.com/dfnh1k50l/image/upload/v1677588784/nextjs/Rectangle_34_1_cpvfku.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createAt: "1677322207417",
      tagList: ["Typography"],
      shortDiscription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDiscription: "",
      updateAt: "1677322207417",
      thumbnailUrl:
        "https://res.cloudinary.com/dfnh1k50l/image/upload/v1677588784/nextjs/Rectangle_32_1_eccvbr.jpg",
    },
  ];
  return (
    <Box component={"section"} mt={3} pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={2}>
          Featured Works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
