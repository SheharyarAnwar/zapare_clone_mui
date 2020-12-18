import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as Illustration } from "../../Assets/illustration.svg";
import BannerSlider from "../../Components/BannerSlider/index";
import style from "./style";

function Index() {
  const styles = style();
  return (
    <>
      <Grid container className={styles.root}>
        <Grid
          item
          container
          md={6}
          justify="center"
          className={styles.illustration}
          alignItems="center"
        >
          <Illustration />
        </Grid>
        <Grid
          item
          container
          md={6}
          className={styles.slider}
          justify="flex-start"
          alignItems="center"
        >
          <BannerSlider />
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
