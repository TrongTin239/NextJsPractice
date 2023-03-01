import { Chip, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Work } from "models/works";
import * as React from "react";
import { CldImage } from "next-cloudinary";
export interface WorkCardsProps {
  work: Work;
}

export default function WorkCards({ work }: WorkCardsProps) {
  return (
    <Stack direction={{ sm: "row", xs: "column" }} gap={2}>
      <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width="246px"
          height={"180px"}
          alt={work.thumbnailUrl}
          layout="responsive"
        />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={"bold"}>
          {" "}
          {work.title}{" "}
        </Typography>
        <Stack direction={"row"} gap={4.5} my={2}>
          <Chip
            color="default"
            label={new Date(Number.parseInt(work.createAt)).getFullYear()}
            size="small"
          ></Chip>
          <Typography color="GrayText"> {work.tagList.join(", ")} </Typography>
        </Stack>
        <Typography> {work.shortDiscription} </Typography>
      </Box>
    </Stack>
  );
}
