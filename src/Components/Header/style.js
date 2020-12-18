import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => {
  console.log(theme.custom.headerPadding);
  return {
    root: {
      [theme.breakpoints.down("xl")]: {
        padding: "45px 110px",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "40px 100px",
      },
      [theme.breakpoints.down("md")]: {
        padding: "20px 20px",
      },
      fontFamily: theme.typography.fontFamily,
    },
    logo: {
      "& h3": {
        marginLeft: "10px",
      },
    },
    options: {
      cursor: "pointer",
      transition: "color .3s ease-in-out",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        left: "-10px",
        top: 0,
        height: "100%",
        width: "0%",
        backgroundColor: "rgba(253, 184, 17, 0.48)",
        transition: "all .3s ease-in-out",
      },
      "&:hover": {
        color: theme.palette.blue,
      },
      "&:hover::before": {
        width: "60%",
      },
    },
    static: {
      cursor: "pointer",
      color: theme.palette.blue,
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        left: "-10px",
        top: 0,
        height: "100%",
        width: "60%",
        backgroundColor: "rgba(253, 184, 17, 0.48)",
      },
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      fontWeight: 400,
      fontSize: "1rem",
      color: theme.palette.slate,
    },
    hamburger: {
      height: "12px",
      width: "25px",
      border: ` solid ${theme.palette.slate}`,
      borderWidth: "2px 0px",
    },
  };
});
export default style;
