import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        marginTop: "12vh",
      },
      [theme.breakpoints.down("lg")]: {
        marginTop: "8vh",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
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

      "& p": {
        fontWeight: 400,
        lineHeight: 2,
        color: theme.palette.slate,
        display: "inline-block",
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc((1.2em + 2vw) / 2.6)",
          marginTop: "60px",
        },

        [theme.breakpoints.down("lg")]: {
          fontSize: "calc((1.2em + 3vw) / 2.6)",
          marginTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc((1.4em + 0.5vw) / 1.5)",
          marginTop: "20px",
        },
      },
      "& h2": {
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc(1.2em + 3vw)",
          textAlign: "left",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc(1.4em + 1.2vw)",
          textAlign: "center",
        },
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
