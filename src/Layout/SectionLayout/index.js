import React from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import style from "./style";
function Index({ left, right, rootClass }) {
  const styles = style();
  return (
    <>
      <Grid container className={clsx(styles.root, rootClass)}>
        <Grid {...left} className={clsx(styles.left, left.className)} />
        <Grid {...right} className={clsx(styles.right, right.className)} />
      </Grid>
    </>
  );
}

export default Index;
