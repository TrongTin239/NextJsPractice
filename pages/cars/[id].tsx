import { NOTFOUND } from "dns";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface CarDetailPageProps {
  post: any;
}
export default function Car({ post }: CarDetailPageProps) {
  const router = useRouter();
  if (!post) return null;
  return (
    <div>
      <h1>Car detail page</h1>
      <p> {post.title} </p>
      <p> {post.author}</p>
      <p> {post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();

  return {
    paths: data.data.map((post: any) => ({
      params: { id: post.id },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  // Server Side
  // builde time
  console.log("\nGet static props", context.params?.id);
  const id = context.params?.id;
  if (!id) return { NOTFOUND: true };
  const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
}
