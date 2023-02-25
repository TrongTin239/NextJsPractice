import { Menu } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "next/dist/client/link";
import * as React from "react";
import { ROUT_LIST } from "./route.page";
type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: "100vw",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box textAlign={"right"} pr={2} onClick={toggleDrawer("right", false)}>
          {" "}
          <CloseIcon
            fontSize="large"
            sx={{
              cursor: "pointer",
            }}
          />{" "}
        </Box>
        {ROUT_LIST.map((text, index) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton>
              <Link href={text.path}>
                <ListItemText primary={text.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        textAlign: "right",
        display: { lg: "none", md: "block" },
      }}
    >
      <Menu
        onClick={toggleDrawer("right", true)}
        sx={{ cursor: "pointer", marginRight: 2 }}
        fontSize={"large"}
      />
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <Box display={"none"} key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Box>
      ))}
    </Box>
  );
}
