import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    richTextPara: {
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
    richTextHeading: {
      [theme.breakpoints.down("xl")]: {
        fontSize: "calc(1.2em + 3vw)",
        textAlign: "left",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "calc(1.4em + 1.2vw)",
        textAlign: "center",
      },
    },
  };
});
export default style;
