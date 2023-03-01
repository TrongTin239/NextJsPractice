import * as React from "react";
import { Box } from "@mui/system";
import { Icon, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/trong.tin.3532/",
    },
    {
      icon: Instagram,
      url: "https://www.facebook.com/trong.tin.3532/",
    },
    {
      icon: Twitter,
      url: "https://www.facebook.com/trong.tin.3532/",
    },
    {
      icon: LinkedIn,
      url: "https://www.facebook.com/trong.tin.3532/",
    },
  ];
  return (
    <Box component={"footer"} py="2" textAlign={"center"} height={180}>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        {socialLinks.map((item, index) => (
          <Box
            component="a"
            key={index}
            mx={2}
            my={2}
            target="_blank"
            rel="noopener noreferrer"
            href={item.url}
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>

      <Typography textAlign={"center"}>
        Copyright ©{new Date().getFullYear()} All rights reserved{" "}
      </Typography>
    </Box>
  );
}
