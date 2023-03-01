import { Card, CardContent, Typography } from "@mui/material";
import { Post } from "models/post";
import React from "react";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { format } from "date-fns";
export type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight={"bold"}>
          {post.title}
        </Typography>
        <Box
          my={2}
          sx={{
            display: "flex",
          }}
          fontWeight={"regular"}
        >
          <Typography>
            {" "}
            {format(Number(post.publishedDate), "dd MMM yyyy")}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Typography> {post.tagList.join(", ")}</Typography>
        </Box>
        <Typography variant="body2"> {post.description} </Typography>
      </CardContent>
    </Card>
  );
}
