import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  typography: {
    h1: {},
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        fontSize: "100rem",
      },
    },
  },
});
export default globalTheme;
