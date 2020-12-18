import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down("xl")]: {
        textAlign: "left",
        position: "absolute",
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

      "& p": {
        fontWeight: 700,
        letterSpacing: "-0.4px",
        cursor: "pointer",
        position: "relative",
        display: "inline-block",
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 3vw) / 2.8)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc((1.4em + 0.5vw) / 1.5)",
          marginTop: "20px",
        },
      },
      "& span": {
        position: "absolute",
        content: '""',
        height: "20%",
        width: "100%",
        bottom: "-50%",
        left: 0,
        backgroundColor: theme.palette.yellow,
      },
      "& p::before": {
        position: "absolute",
        content: '""',
        height: "20%",
        width: "0%",
        bottom: "-50%",
        zIndex: 1,
        left: "50%",
        backgroundColor: theme.palette.blue,
        transition: "all 0.3s ease-in-out",
      },
      "& p::after": {
        position: "absolute",
        content: '""',
        height: "20%",
        width: "0%",
        bottom: "-50%",
        zIndex: 1,
        right: "50%",
        backgroundColor: theme.palette.blue,
        transition: "all 0.3s ease-in-out",
      },
      "& p:hover::before": {
        width: "50%",
      },
      "& p:hover::after": {
        width: "50%",
      },
    },

    sliderNav: {
      position: "absolute",
      bottom: "-15%",
      left: "300px",
      width: "30%",
      maxWidth: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
      width: "40%",
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
      width: "25%",
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
