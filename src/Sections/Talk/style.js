import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        margin: "20vh 0",
      },
      [theme.breakpoints.down("lg")]: {
        margin: "15vh 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "8vh 0",
        flexDirection: "column-reverse",
      },
    },
    aboutText: {
      zIndex: 1,
      [theme.breakpoints.down("xl")]: {
        padding: "5%",
        paddingLeft: "3%",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "5% 8%",
      },
      "& h2": {
        lineHeight: 1.2,
        [theme.breakpoints.down("xl")]: {
          fontSize: "calc(1.2em + 2.4vw)",
          textAlign: "left",
          marginRight: 0,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "calc(1.4em + 1.2vw)",
          textAlign: "center",
        },
      },
    },
    para: {
      fontWeight: 400,
      color: theme.palette.blue,

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

    image: {
      "& svg": {
        [theme.breakpoints.down("xl")]: {
          maxWidth: "630px",
        },
        [theme.breakpoints.down("lg")]: {
          maxWidth: "530px",
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "380px",
        },
      },
    },
  };
});
export default style;
