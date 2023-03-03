import { getBlogList } from "@/utils/post";
import { Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { MainLayout } from "component/layout/main.page";
import { Post } from "models/post";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkPrism from "remark-prism";
import Script from "next/script";
export interface BlogPageProps {
  post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null;

  return (
    <Box>
      <Container>
        <h1>Post Detail Page</h1>

        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive" />
    </Box>
  );
}
PostDetailPage.Layout = MainLayout;
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

  // convert markdown to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "agenda" })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "blog detail page" })
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(post.mdContent || "");
  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
