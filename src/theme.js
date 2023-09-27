// theme.js

import { createTheme } from "@mui/material";

export const createCustomTheme = (mode) => {
    return createTheme({
    palette: {
      primary: {
        main: "#01579B",
        light: "skyblue",
      },
      secondary: {
        main: "#01579B",
      },
      otherColor: {
        main: "#0000000",
      },
      mode: mode,
    }, // Set the theme mode based on the parameter
  });
};