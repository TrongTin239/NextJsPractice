import { Box, Divider, Stack } from "@mui/material";
import PostCard from "component/home/post-card";
import { Work } from "pages/models/works";
import * as React from "react";
import WorkCards from "./work-card";

export interface WorkListProps {
  workList: Work[];
}

export default function WorkList({ workList }: WorkListProps) {
  return (
    <Box>
      {workList.map((work) => (
        <React.Fragment key={work.id}>
          <WorkCards work={work} />
          <Divider
            sx={{
              mt: 1,
              mb: 2,
            }}
          />
        </React.Fragment>
      ))}
    </Box>
  );
}
