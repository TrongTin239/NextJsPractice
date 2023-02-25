import {
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
export interface ParamsProps {
  query: any;
  post: any;
}

export default function Params({ post, query }: ParamsProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Params Car - {JSON.stringify(router.query)}</h1>
      <ul>
        <li> {post?.title} </li>
      </ul>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader("Cache-Control", "s-maxage=5");
  await new Promise((res) => setTimeout(res, 2000));
  const postId = context.query.id;
  if (!postId) return { props: { query: context.query } };
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts?_page=${postId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      query: context.query,
      post: data,
    },
  };
}
