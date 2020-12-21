import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    blueWrapper: {
      display: "flex",
      height: "60vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 20%",
      borderBottom: "solid 2px rgba(255,255,255,.1)",
    },
    para: {},
    openings: {
      backgroundColor: theme.palette.blue,
      textAlign: "center",
      "& h2": {
        color: "white",
        textAlign: "center",
      },
      "& p": {
        color: "white",
      },
    },
    contact: {
      backgroundColor: theme.palette.blue,
      padding: "30vh 0",
      fontFamily: theme.typography.fontFamily,
      "& p": {
        display: "inline-block",
        color: "white",
        "&::before": {
          display: "none",
        },
        "&:hover": {
          color: "red",
        },
      },
    },
  };
});
export default style;
