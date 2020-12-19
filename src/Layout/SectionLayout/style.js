import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down("xl")]: {
        textAlign: "left",
        // position: "absolute",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        position: "unset",
      },
      color: theme.palette.blue,
      //minWidth: "500px",
      fontSize: "13.2px",
      [theme.breakpoints.down("xl")]: {
        marginTop: "8vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "4vh",
      },
      "& h2": {
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc(1.2em + 2.4vw)",
          textAlign: "left",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc(1.4em + 1.2vw)",
          textAlign: "center",
        },
      },
    },
    left: {},
    right: {},
  };
});
export default style;
