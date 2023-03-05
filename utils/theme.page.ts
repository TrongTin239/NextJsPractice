import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: " 'Heebo', sans-serif;",
  },
  palette: {
    primary: {
      // main: "#FF6464",
      main: "#000",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#21243D",
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
    MuiChip: {
      variants: [
        {
          props: { color: "default" },
          style: {
            backgroundColor: "#142850",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        // root: {
        //   ".Mui-focused": {
        //     color: "black",
        //   },
        // },
      },
    },
  },
});
// theme.typography.h3 = {
//   fontSize: "2rem",
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };
theme = responsiveFontSizes(theme);
export default theme;
