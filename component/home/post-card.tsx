import { Card, CardContent } from "@mui/material";
import PostItem from "component/blog/post-item";
import { Post } from "models/post";
export type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
