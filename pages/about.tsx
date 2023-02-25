import { Box } from "@mui/material";
import { MainLayout } from "component/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export interface aboutProps {}

// const Header = dynamic(() => import("component/common/header"), { ssr: false });
export default function About(props: aboutProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  const page = router.query?.page;

  useEffect(() => {
    if (!page) return;
    (async () => {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await res.json();
      setPostList(data.data);
    })();
  }, [page]);

  const handleNextClick = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return <Box>About page</Box>;
}
About.Layout = MainLayout;
export function getStaticProps() {
  console.log("get static props");
  return {
    props: {},
  };
}
