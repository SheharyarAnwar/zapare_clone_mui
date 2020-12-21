import React, { useMemo } from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as Sign } from "../../Assets/zSign.svg";
import style from "./style";
const text = [
  {
    title: "Improved efficiency",
    content:
      "By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.",
  },
  {
    title: "Reduced Cost",
    content:
      "Our solutions are crafted to bring effective change in your business by ensuring cost-effective and reliable operation methodologies",
  },
  {
    title: "Overarching Impact",
    content:
      "By ensuring quality process management we can ensure a comprehensive impact on your business.",
  },
];
function Index() {
  const styles = style();
  return (
    <>
      <Grid container item className={styles.root} alignItems="center">
        <Sign />
        <Grid item className={styles.headingContainer}>
          <h2>Economical,</h2>
          <h2>dynamic and managed business solutions</h2>
        </Grid>
        <Grid item container>
          {text.map((val) => {
            return (
              <>
                <Grid item xs={12} md={4} className={styles.paraContainer}>
                  <h5>{val.title}</h5>
                  <p>{val.content}</p>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
