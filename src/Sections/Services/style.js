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

    image: {
      "& svg": {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          width: "50%",
        },
      },
    },
    // boxes:{
    //     position:'absolute',
    //     width:'20px',
    //     height:'20px',
    //     backgroundColor:'red',
    //     top:'0',
    //     left:'50%'
    // }
  };
});
export default style;
