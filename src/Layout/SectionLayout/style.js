import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        marginTop: "8vh",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "4vh",
      },
    },
    left: {},
    right: {},
  };
});
export default style;
