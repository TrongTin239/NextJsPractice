import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import * as React from "react";

export interface RecentPostProps {}

export default function RecentPost(props: RecentPostProps) {
  return (
    <Box component={"section"}>
      <Container>
        <Stack>
          <Typography>Recent Posts</Typography>
          <Link passHref href={"/blog"}>
            <Typography> View all</Typography>
          </Link>
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
}
