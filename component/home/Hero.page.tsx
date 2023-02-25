import { Box, Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { images } from "constants/images.page";

import Image from "next/image";

export function HeroSection() {
  const CV = require("../../assets/CV_FE.pdf");

  return (
    <Box component={"section"} pt={{ md: 18, xs: 4 }} pb={{ md: 9, sx: 7 }}>
      <Container
        sx={{
          ".MuiContainer-root": {
            px: "-24px",
          },
        }}
      >
        <Stack
          gap={"30px"}
          flexDirection={{ md: "row", xs: "column-reverse" }}
          alignItems={{ md: "flex-start", xs: "center" }}
          justifyContent={"center"}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              component={"h1"}
              variant="h3"
              fontWeight={"bold"}
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am Tin, <br />
              Front-end Developer
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              Now currently graduated from Hutech university. I want to find a
              working environment that is suitable to the knowledge I have
              learned and I want to learn from experience and develop more in
              the future
            </Typography>
            <Button size="large" variant="contained">
              <Typography component={"a"} download href={CV}>
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
