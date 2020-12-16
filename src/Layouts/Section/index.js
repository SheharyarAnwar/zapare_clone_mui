import React from "react";
import classes from "./index.module.css";
function Index(props) {
  return <div className={classes.sectionWrapper}>{props.children}</div>;
}

export default Index;
