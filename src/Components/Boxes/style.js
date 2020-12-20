import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    boxContainer: {
      [theme.breakpoints.down("xl")]: {
        //padding: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "5px",
      },
      "& p": {
        fontWeight: 700,
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 2.5vw) / 2.8)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc((1.4em + 0.5vw) / 1.5)",
          marginTop: "20px",
        },
      },
    },
    smallBox: {
      width: "85%",
      borderRadius: "20px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      [theme.breakpoints.down("xl")]: {
        height: "250px",
        margin: "10px",
      },
      [theme.breakpoints.down("lg")]: {
        height: "190px",
      },
      [theme.breakpoints.down("md")]: {
        height: "150px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "140px",
        margin: "5px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      backgroundColor: theme.palette.yellow,
    },
    blue: {
      backgroundColor: theme.palette.blue,
      "& h1": {
        color: theme.palette.lightBlue,
      },
      "& p": {
        color: "white",
      },
    },
    white: {
      backgroundColor: "white",
      "& h1": {
        color: theme.palette.lightBlue,
      },
      "& p": {
        color: theme.palette.blue,
      },
    },
    blueNavy: {
      backgroundColor: theme.palette.navyBlue,
      "& h1": {
        color: theme.palette.slate,
      },
      "& p": {
        color: "white",
      },
    },
    yellow: {
      backgroundColor: theme.palette.yellow,
      "& h1": {
        color: theme.palette.slate,
      },
      "& p": {
        color: "white",
      },
    },
    transparent: {
      backgroundColor: "transparent",
      border: `3px solid ${theme.palette.lightBlue}`,
      "& h1": {
        color: theme.palette.slate,
      },
      "& p": {
        color: theme.palette.lightBlue,
      },
    },
  };
});
export default style;
