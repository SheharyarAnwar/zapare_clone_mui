import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      padding: "0 5%",
      [theme.breakpoints.down("xs")]: {
        margin: "6vh 0",
        justifyContent: "center",
      },
    },
    pointers: {
      "& h2": {
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc(1.5em + 3vw)",
          textAlign: "left",
          marginRight: "60%",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc(1.4em + 1.2vw)",
        },
      },
      "& p": {
        position: "relative",
        marginLeft: "5%",
        color: theme.palette.slate,
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 3vw) / 2.8)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc((1.4em + 0.5vw) / 1.5)",
          marginTop: "20px",
        },
        "&::before": {
          position: "absolute",
          content: '""',
          cursor: "pointer",
          width: "10px",
          height: "10px",
          transform: "rotate(45deg)",
          top: "calc(50% - 5px)",
          left: "-20px",
          backgroundColor: theme.palette.lightBlue,
        },
      },
    },
    overlay: {
      "& img": {
        [theme.breakpoints.down("sm")]: {
          width: "700px",
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  };
});
export default style;
