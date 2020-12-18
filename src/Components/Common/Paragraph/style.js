import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.blue,
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
    },
    leftPlank: {
      position: "absolute",
      content: '""',
      height: "20%",
      width: "0%",
      bottom: "-50%",
      zIndex: 1,
      left: "50%",
      backgroundColor: theme.palette.blue,
    },
    rightPlank: {
      position: "absolute",
      content: '""',
      height: "20%",
      width: "0%",
      bottom: "-50%",
      zIndex: 1,
      right: "50%",
      backgroundColor: theme.palette.blue,
    },
  };
});
export default style;
