import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as Illustration } from "../../Assets/illustration.svg";
import BannerSlider from "../../Components/BannerSlider/index";
import style from "./style";
const content = [
  {
    h2: ["Customized solutions", "to meet the needs of", "the changing market"],
    p: "Revenue Cycle Managment",
  },
  {
    h2: ["Scalable extended", "business office", "services"],
    p: "Staff Augmentation",
  },
  {
    h2: ["Innovative and", "intelligent technology", "solutions and services"],
    p: "Product Managment",
  },
];
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
          <BannerSlider content={content} />
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
