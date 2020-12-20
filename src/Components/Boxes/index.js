import { Grid } from "@material-ui/core";
import React from "react";

import style from "./style";
import clsx from "clsx";
const boxText = [
  "Revenue Cycle Management",
  "Staff Augmentation",
  "Payment Posting",
  "Reason Code Mapping",
  "Product Management",
  "Virtual Assistant",
  "Correspondence Management",
];

function Index() {
  const styles = style();

  const randamizeColors = () => {
    const ar = ["blue", "transparent", "yellow", "blueNavy", "white"];
    const randIndex = Math.floor(Math.random() * ar.length);
    return ar[randIndex];
  };

  const boxLines = boxText
    .map((val, i) => {
      const factor = 3;
      const extraSlicer = boxText.length - i;
      const slicer = (i + 1) % factor;
      if (slicer === 0) {
        return [boxText[i - 2], boxText[i - 1], boxText[i]];
      } else if (extraSlicer < factor) {
        const arr = [];
        for (let x = 0; x < extraSlicer; x++) {
          arr.push(boxText[i + x]);
        }

        return arr;
      }
    })
    .filter((val) => !!val);

  const renderedItems = boxLines.map((val, i) => {
    return (
      <Grid
        item
        container
        className={styles.boxContainer}
        sm={4}
        xs={6}
        style={{
          paddingTop: i * 80,
        }}
        direction="column"
        alignItems="center"
      >
        {val.map((item) => {
          return (
            <div className={clsx(styles.smallBox, styles[randamizeColors()])}>
              <h1 style={{ marginLeft: "80%" }}>{item[0]}</h1>
              <p style={{ margin: "10%" }}>{item}</p>
            </div>
          );
        })}
      </Grid>
    );
  });
  return (
    <>
      <Grid container item>
        {renderedItems}
      </Grid>
    </>
  );
}

export default Index;
