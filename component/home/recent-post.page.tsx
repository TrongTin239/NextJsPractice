import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import PostCard from "./post-card";

export interface RecentPostProps {}

export default function RecentPost(props: RecentPostProps) {
  return (
    <Box component={"section"} bgcolor="secondary.light" py={4}>
      <Container>
        <Stack flexDirection={"row"}>
          <Typography>Recent Posts</Typography>
          <Link passHref href={"/blog"}>
            <Typography> View all</Typography>
          </Link>
        </Stack>
        <Stack
          flexDirection={"row"}
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
          <Box>
            <PostCard />
          </Box>

          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
