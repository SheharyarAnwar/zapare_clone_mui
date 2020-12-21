import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(6),
      position: "relative",
      height: "100vh",
      width: "100%",
      backgroundColor: theme.palette.blue,
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down("xl")]: {
        textAlign: "left",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",

        position: "unset",
      },
      color: "white",

      fontSize: "13.2px",
      [theme.breakpoints.down("xl")]: {
        marginTop: "8vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "4vh",
      },
      "& svg": {
        zIndex: 0,
        width: "45%",
        position: "absolute",
        top: "12%",
        right: "5%",
      },
      "& h2": {
        fontWeight: 400,
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc(1.2em + 2.4vw)",
          textAlign: "left",
        },
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          fontSize: "calc(1.4em + 1.2vw)",
          textAlign: "center",
        },
      },
    },
    headingContainer: {
      zIndex: 2,
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
    paraContainer: {
      zIndex: 2,
      paddingRight: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        paddingRight: theme.spacing(0),
      },
      "& h5": {
        fontWeight: 700,

        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 3vw) / 2.8)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          fontSize: "calc((1.4em + 0.5vw) / 1.5)",
          marginTop: "20px",
        },
      },
      "& p": {
        fontWeight: 400,
        color: theme.palette.lightBlue,

        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 3vw) / 3.5)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          fontSize: "calc((1.4em + 0.5vw) /1.6)",
          marginTop: "20px",
        },
      },
    },
  };
});
export default style;
