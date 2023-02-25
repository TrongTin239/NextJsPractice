import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import { Post } from "pages/models/post";
import PostCard from "./post-card";

export interface RecentPostProps {}

export default function RecentPost(props: RecentPostProps) {
  const postList: Post[] = [
    {
      id: "1",
      title: "Making a design system from scratch",
      publishedDate: "1677322207417",
      tagList: ["Figma", "Icon Design"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "2",
      title: "Creating pixel perfect icons in Figma",
      publishedDate: "1677322207417",
      tagList: ["Design", "Pattern"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <Box component={"section"} bgcolor="secondary.light" mt={3} pt={2} pb={4}>
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={{ md: "space-between", xs: "center" }}
          mb={3}
          alignItems={"center"}
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref href={"/blog"}>
            <Typography>
              <MuiLink
                sx={{
                  cursor: "pointer",
                  display: { xs: "none", md: "block" },
                }}
              >
                View all
              </MuiLink>
            </Typography>
          </Link>
        </Stack>
        <Stack
          flexDirection={{
            md: "row",
            xs: "column",
          }}
          gap={2.5}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          {postList.map((post) => {
            return (
              <Box key={post.id}>
                <PostCard post={post} />
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
