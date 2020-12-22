import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "6vh",
        flexDirection: "column-reverse",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "10vh",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "30vh",
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

    image: {
      position: "relative",
      "& img": {
        marginTop: "10%",
        [theme.breakpoints.down("xl")]: {
          position: "absolute",
          paddingLeft: "10%",
          bottom: "-30%",
          right: "-10%",
        },
        [theme.breakpoints.down("lg")]: {
          position: "absolute",
          paddingLeft: "10%",
          bottom: "-30%",
          right: "-25%",
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "80%",
          position: "unset",
        },
      },
    },
  };
});
export default style;
