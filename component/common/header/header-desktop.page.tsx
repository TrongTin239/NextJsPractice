import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUT_LIST } from "./route.page";
export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();

  return (
    <Box display={{ xs: "none", lg: "block" }} py={2}>
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent="flex-end"
          gap={3}
          sx={{
            ".MuiLink-root": {
              "&::after": {
                content: "close-quote",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: "#FF6464",
                transformOrigin: "bottom right",
                transition: " transform 0.25s ease-out",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            },
          }}
        >
          {ROUT_LIST.map((route) => {
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
        </Stack>
      </Container>
    </Box>
  );
}
