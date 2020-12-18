import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        marginTop: "8vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "4vh",
      },
    },
    illustration: {
      "& svg": {
        [theme.breakpoints.down("xl")]: {
          maxWidth: "630px",
        },
        [theme.breakpoints.down("lg")]: {
          maxWidth: "530px",
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "380px",
        },
      },
    },
    slider: {
      paddingLeft: "20px",
      maxHeight: "450px",
      [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        justifyContent: "center",
      },
    },
  };
});
export default style;
