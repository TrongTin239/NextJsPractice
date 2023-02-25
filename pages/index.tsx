import { Box } from "@mui/material";
import HeroSection from "component/home/Hero";
import { MainLayout } from "component/layout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { useEffect, useState } from "react";

export interface indexProps {
  postList: any[];
}

export default function Home({ postList }: indexProps) {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}
Home.Layout = MainLayout;
