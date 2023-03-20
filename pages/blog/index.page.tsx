import { getBlogList } from "@/utils/post";
import { Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import PostItem from "component/blog/post-item";
import { MainLayout } from "component/layout/main.page";
import { Post } from "models/post";
import { GetStaticProps } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog List Page</h1>

        <Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>

              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // server-side
  // build-time

  const postList = await getBlogList();
  return {
    props: {
      posts: postList,
    },
  };
};
