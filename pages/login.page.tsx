import { Box, Paper, Typography } from "@mui/material";
import { LoginFrom } from "component/auth/loginForm";
import { MainLayout } from "component/layout/main.page";
import { useAuth } from "hooks/index.page";
import { LoginPayload } from "models/auth.page";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { profile, Login, Logout } = useAuth({
    revalidateOnMount: false,
  });
  async function HandleLoginSubmit(payload: LoginPayload) {
    try {
      await Login(payload);

      router.push("/");
    } catch (error) {
      console.log("fail to login", error);
    }
  }
  // async function HandleLogoutClick() {
  //   try {
  //     await Logout();
  //     console.log("redirect to login page");
  //   } catch (error) {
  //     console.log("fail to logout", error);
  //   }
  // }

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          margin: "auto",
          mt: 8,
          p: 4,
          maxWidth: 480,
        }}
      >
        <Typography component={"h1"} variant={"h5"} textAlign="center">
          Login
        </Typography>
        <LoginFrom onSubmit={HandleLoginSubmit} />
      </Paper>
    </Box>
  );
}
LoginPage.Layout = MainLayout;
