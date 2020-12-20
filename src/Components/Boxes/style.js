import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    boxContainer: {
      padding: "3%",
    },
    smallBox: {
      width: "100%",
      height: "30%",
      [theme.breakpoints.down("sm")]: {
        height: "140px",
      },
      backgroundColor: theme.palette.yellow,
    },
  };
});
export default style;
