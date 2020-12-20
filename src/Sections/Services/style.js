import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        marginTop: "20vh",
        padding: "2%",
      },
      [theme.breakpoints.down("lg")]: {
        marginTop: "45vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "6vh",
        padding: "5%",
      },
    },
    aboutText: {
      zIndex: 1,
      [theme.breakpoints.down("xl")]: {
        padding: "5% 2% 0 5%",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        textAlign: "center",
        padding: "5% 8%",
      },
    },
    ovalAndBoxContainer: {
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        // display: "flex",
        // justifyContent: "flex-start",
      },
    },
    image: {
      "& svg": {
        width: "100%",
        zIndex: "-5",
        left: 0,
        top: 0,
        position: "absolute",
        [theme.breakpoints.down("sm")]: {
          minWidth: "85%",
          top: "-10%",
        },
        [theme.breakpoints.down("xs")]: {
          minWidth: "800px",
        },
      },
    },
    boxes: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",

      [theme.breakpoints.down("sm")]: {
        width: "60%",
        display: "contents",
      },
    },
  };
});
export default style;
