import { Grid } from "@material-ui/core";
import React from "react";
import style from "../style";

const options = ["Home", "About us", "Services", "Career", "Contact"];
function Index() {
  const styles = style();
  const renderedOptions = options.map((val, i) => {
    return (
      <p key={i} className={i === 0 ? styles.static : styles.options}>
        {val}
      </p>
    );
  });
  return (
    <Grid className={styles.nav} xs={12}>
      {renderedOptions}
    </Grid>
  );
}

export default Index;
