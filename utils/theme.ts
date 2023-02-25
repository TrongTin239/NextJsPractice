import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: " 'Heebo', sans-serif;",
  },
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthMd: {
          "@media (min-width: 900px)": {
            maxWidth: "860px",
          },
        },
        maxWidthSm: {
          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          // "&::after": {
          //   content: "close-quote",
          //   position: "absolute",
          //   width: "100%",
          //   transform: "scaleX(0)",
          //   height: "2px",
          //   bottom: "0",
          //   left: "0",
          //   backgroundColor: "#FF6464",
          //   transformOrigin: "bottom right",
          //   transition: " transform 0.25s ease-out",
          // },
          // "&:hover::after": {
          //   transform: "scaleX(1)",
          //   transformOrigin: "bottom left",
          // },
          "&:hover, &.active": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
            color: "primary",
          },
          style: {
            color: "white",
          },
        },
      ],
    },
  },
});

export default theme;
