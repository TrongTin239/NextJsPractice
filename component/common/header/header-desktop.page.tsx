import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import { useAuth } from "hooks/use-auth.page";

import Link from "next/link";
import { useRouter } from "next/router";
import { ROUT_LIST } from "./route.page";
export interface HeaderDesktopProps {
  token?: string | null;
}

export default function HeaderDesktop({ token }: HeaderDesktopProps) {
  const router = useRouter();

  const { profile, Logout } = useAuth();
  const isLoggedIn = Boolean(profile?.username);

  const renderList = ROUT_LIST.filter(
    (route) => !route.requireLogin || isLoggedIn
  );
  console.log(isLoggedIn);
  return (
    <Box display={{ xs: "none", lg: "block" }} py={2}>
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent="flex-end"
          gap={3}
          sx={
            {
              // ".MuiLink-root": {
              //   "&::after": {
              //     content: "close-quote",
              //     position: "absolute",
              //     width: "100%",
              //     transform: "scaleX(0)",
              //     height: "2px",
              //     bottom: "0",
              //     left: "0",
              //     backgroundColor: "#FF6464",
              //     transformOrigin: "bottom right",
              //     transition: " transform 0.25s ease-out",
              //   },
              //   "&:hover::after": {
              //     transform: "scaleX(1)",
              //     transformOrigin: "bottom left",
              //   },
              // },
            }
          }
        >
          {renderList.map((route) => {
            return (
              <Box key={route.label} position="relative">
                <Link href={route.path} passHref>
                  <MuiLink
                    sx={{
                      fontWeight: "medium",
                    }}
                    className={clsx({
                      active: router.pathname === route.path,
                    })}
                  >
                    {route.label}
                  </MuiLink>
                </Link>
              </Box>
            );
          })}
          {!isLoggedIn && (
            <Link href="/login" passHref>
              <MuiLink
                sx={{
                  fontWeight: "medium",
                }}
              >
                Login
              </MuiLink>
            </Link>
          )}
          {isLoggedIn && (
            <MuiLink
              sx={{
                fontWeight: "medium",
                cursor: "pointer",
              }}
              onClick={Logout}
            >
              Log out
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
