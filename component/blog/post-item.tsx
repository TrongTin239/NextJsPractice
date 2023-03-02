import { Box, Divider, Typography } from "@mui/material";
import { Post } from "models/post";
import * as React from "react";
import { format } from "date-fns";

export interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <Box>
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
          {format(new Date(post.publishedDate), "dd MMM yyyy")}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography> {post.tagList.join(", ")}</Typography>
      </Box>
      <Typography variant="body2"> {post.description} </Typography>
    </Box>
  );
}
