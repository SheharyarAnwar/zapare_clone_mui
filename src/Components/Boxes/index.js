import { Grid, useMediaQuery } from "@material-ui/core";
import React, { useMemo } from "react";

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
  const smMatch = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const randamizeColors = () => {
    const ar = ["blue", "transparent", "yellow", "blueNavy", "white"];
    const randIndex = Math.floor(Math.random() * ar.length);
    return ar[randIndex];
  };

  const boxLines = useMemo(() => {
    const arr = [];
    return boxText
      .map((val, i) => {
        let factor;
        !smMatch ? (factor = 3) : (factor = 4);
        const extraSlicer = boxText.length - i;
        const slicer = (i + 1) % factor;
        const arOne = [];
        if (slicer === 0) {
          for (let x = factor - 1; x >= 0; x--) {
            arOne.push(boxText[i - x]);
          }
          return arOne;
        } else if (extraSlicer < factor) {
          if (arr.length > 0) return;
          for (let x = 0; x < extraSlicer; x++) {
            arr.push(boxText[i + x]);
          }
          return arr;
        } else {
          return undefined;
        }
      })
      .filter((val) => !!val);
  }, [smMatch]);
  console.log(boxLines);
  const renderedItems = useMemo(
    () =>
      boxLines.map((val, i) => {
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
                <div
                  className={clsx(styles.smallBox, styles[randamizeColors()])}
                >
                  <h1 style={{ marginLeft: "80%" }}>{item[0]}</h1>
                  <p style={{ margin: "10%" }}>{item}</p>
                </div>
              );
            })}
          </Grid>
        );
      }),
    []
  );
  return (
    <>
      <Grid container item>
        {renderedItems}
      </Grid>
    </>
  );
}

export default Index;
