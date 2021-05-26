import { Grid } from "@material-ui/core";
import React from "react";
import style from "./style";
import { ReactComponent as FB } from "../../Assets/facebook.svg";
import { ReactComponent as LinkedIn } from "../../Assets/linkedin.svg";
import RichText from "../../Components/Common/RichText/index";
import Navbar from "../../Components/Header/Navbar/index";
function Index() {
  const styles = style();

  return (
    <>
      <Grid container>
        <Grid item className={styles.openings} xs={12}>
          <div className={styles.blueWrapper}>
            <RichText
              paraStyles={styles.para}
              heading={"Care To Join Us?"}
              content={
                "Embark on an exciting career with us to learn and grow alongside the best in the industry"
              }
              action={"View current openings"}
            />
          </div>
        </Grid>

        <Grid
          container
          xs={12}
          className={styles.contact}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={styles.yolo}>
            <Grid
              item
              xs={10}
              sm={8}
              md={5}
              container
              className={styles.navContainer}
            >
              <Navbar />
            </Grid>
            <Grid
              container
              item
              xs={6}
              sm={4}
              md={2}
              justify="space-between"
              alignItems="center"
            >
              <p>Follow Us :</p>
              <FB fill="white" width={15} height={15} />
              <LinkedIn fill="white" width={15} height={15} />
            </Grid>
            <Grid xs={8}></Grid>
            <Grid
              container
              className={styles.credits}
              justify="space-between"
              xs={10}
            >
              <p>Designed by: Sheharyar Anwar</p>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
