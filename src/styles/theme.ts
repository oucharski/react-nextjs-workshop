import { createTheme } from "@mui/material";

import { orange, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: orange[500],
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: grey[800],
      marginBottom: "1rem",
    },
  },
  shape: {
    borderRadius: 3,
  },
});
