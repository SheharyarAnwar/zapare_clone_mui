import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import style from "./style";

function Index() {
  const styles = style();
  const options = ["Home", "About us", "Services", "Career", "Contact"];
  const renderedOptions = options.map((val, i) => {
    return (
      <p key={i} className={i === 0 ? styles.static : styles.options}>
        {val}
      </p>
    );
  });
  return (
    <>
      <Grid
        container
        xs={12}
        item
        alignItems="center"
        justify="space-between"
        className={styles.root}
      >
        <Grid
          className={styles.logo}
          container
          item
          xs={11}
          sm={9}
          md={5}
          lg={4}
          alignItems="center"
        >
          <Logo width={65} />
          <Typography variant={"h3"}>Zapare Technologies</Typography>
        </Grid>
        <Grid container item justify="flex-end" xs={1} md={6} lg={5} xl={4}>
          <Hidden mdUp>
            <span className={styles.hamburger}></span>
          </Hidden>
          <Hidden smDown>
            <div className={styles.nav}>{renderedOptions}</div>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
