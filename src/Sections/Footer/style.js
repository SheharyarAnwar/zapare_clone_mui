import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    blueWrapper: {
      display: "flex",
      height: "60vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 20%",
      borderBottom: "solid 2px rgba(255,255,255,.1)",
    },
    para: {},
    openings: {
      backgroundColor: theme.palette.blue,
      textAlign: "center",
      "& h2": {
        color: "white",
        textAlign: "center",
      },
      "& p": {
        color: "white",
      },
    },
    credits: {
      position: "absolute",
      bottom: "10%",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
      },
      "& p": {
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1em + 3vw) / 3.5)",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc((1.2em + 0.5vw) /1.6)",
        },
      },
    },
    yolo: {
      position: "relative",
      height: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      backgroundColor: theme.palette.blue,
    },
    navContainer: {
      "& p": {
        display: "inline-block",
        color: "#bcccdd",
        "&::before": {
          display: "none",
        },
        "&:hover": {
          color: "white",
        },
      },
    },
    contact: {
      fontFamily: theme.typography.fontFamily,

      "& p": {
        display: "inline-block",
        color: "#bcccdd",
      },
    },
  };
});
export default style;
