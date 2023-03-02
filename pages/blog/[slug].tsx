import { getBlogList } from "@/utils/post";
import { Post } from "models/post";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface BlogPageProps {
  post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>
      <p>{post.mdContent}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getBlogList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getBlogList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
  };
};
