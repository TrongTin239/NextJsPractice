import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "component/layout/main.page";

import { useAuth } from "hooks/use-auth.page";
import * as React from "react";
import useSWR from "swr";
import { authApi } from "../api-client";
export interface ProfileProps {}

export default function Profile(props: ProfileProps) {
  //   async function HandleGetProfileClick() {
  //     try {
  //       authApi.getProfile();
  //     } catch (error) {
  //       console.log("fail to get profile", error);
  //     }
  //   }
  const { data } = useSWR("/profile");
  console.log(data);
  const handleLogOut = async () => {
    await authApi.logout();
  };
  const isLoggedIn = Boolean(data?.username);
  React.useEffect(() => {}, [isLoggedIn]);
  return (
    <Container>
      Get Profile
      <Typography>
        {" "}
        {isLoggedIn ? `${data.username}` : "You still not Login"}{" "}
      </Typography>
      <Button variant="outlined" onClick={handleLogOut}>
        {" "}
        Log out{" "}
      </Button>
    </Container>
  );
}
Profile.Layout = MainLayout;
