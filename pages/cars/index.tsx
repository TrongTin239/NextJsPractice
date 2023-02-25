import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface CarProps {
  postList: any[];
}

export default function index({ postList }: CarProps) {
  return (
    <div>
      <h1>Static Props Home</h1>
      <ul>
        {postList?.map((post: any) => (
          <li key={post.id}>
            <Link href={`/cars/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<CarProps> = async (
  context: GetStaticPropsContext
) => {
  // Server Side
  // builde time

  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();

  return {
    props: {
      postList: data.data.map((x: any) => ({
        id: x.id,
        title: x.title,
      })),
    },
  };
};
