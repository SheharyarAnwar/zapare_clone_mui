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

    sliderNav: {
      position: "absolute",
      bottom: "10%",
      left: "80%",
      width: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        bottom: "20%",
      },
      [theme.breakpoints.down("sm")]: {
        position: "unset",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        marginTop: "40px",
      },
    },
    dotWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "60px",
    },
    dot: {
      cursor: "pointer",
      width: "10px",
      height: "10px",
      transform: "rotate(45deg)",
    },
    arrows: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "60px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    arrowRight: {
      cursor: "pointer",
      width: "15px",
      height: "15px",
      border: `solid rgba(112,112,112,.56)`,
      borderWidth: "2px 2px 0px 0px",
      transform: "rotate(45deg)",
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        borderColor: theme.palette.blue,
      },
    },
    arrowLeft: {
      cursor: "pointer",
      width: "15px",
      height: "15px",
      border: `solid rgba(112,112,112,.56)`,
      borderWidth: "2px 2px 0px 0px",
      transform: "rotate(-135deg)",
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        borderColor: theme.palette.blue,
      },
    },
    lightblue: {
      backgroundColor: theme.palette.lightBlue,
    },
    blue: {
      backgroundColor: theme.palette.blue,
    },
  };
});
export default style;
