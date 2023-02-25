import { Box, Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { images } from "constants/images";

import Image from "next/image";

export default function HeroSection() {
  return (
    <Box component={"section"} pt={18} pb={9}>
      <Container
        sx={{
          ".MuiContainer-root": {
            px: "-24px",
          },
        }}
      >
        <Stack gap={"30px"} flexDirection={"row"} alignItems={"flex-start"}>
          <Box
            sx={{
              paddingLeft: "-24px",
            }}
          >
            <Typography
              component={"h1"}
              variant="h3"
              fontWeight={"bold"}
              mb={5}
            >
              Hi, I am Tin, <br />
              Front-end Developer
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button size="large" variant="contained">
              <Typography component={"a"} download href={images.CV}>
                Download Resume
              </Typography>
            </Button>
          </Box>
          <Box
            minWidth={"240px"}
            sx={{
              borderRadius: "100%",
              overflow: "hidden",
              width: "240px",
              height: "240px",
              boxShadow: "-5px 15px ",
              color: "secondary.light",
            }}
          >
            <Image
              src={images.AVATAR}
              alt="..."
              objectFit="cover"
              width="240px"
              height="240px"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
