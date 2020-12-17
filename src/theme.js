import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    yellow: "#fdb811",
    grey: "#e1eefc",
    blue: "#003a78",
    black: "#212529",
    slate: "#4b4b4b",
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  custom: {
    headerPadding: {},
  },
});
theme.typography.h3 = {
  fontWeight: 600,
  color: theme.palette.blue,
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.33rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};

// theme = responsiveFontSizes(theme);
export default theme;
