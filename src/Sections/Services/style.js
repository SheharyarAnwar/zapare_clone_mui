import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        marginTop: "20vh",
      },
      [theme.breakpoints.down("lg")]: {
        marginTop: "45vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "6vh",
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
        display: "flex",
        justifyContent: "center",
      },
    },
    image: {
      "& svg": {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          width: "50%",
        },
      },
    },
    boxes: {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      [theme.breakpoints.down("xl")]: {
        width: "80%",
        height: "80%",
        top: "10%",
        left: "10%",
      },
      [theme.breakpoints.down("sm")]: {
        top: "5%",
        left: "27.5%",
        width: "45%",
        height: "90%",
      },
    },
  };
});
export default style;
