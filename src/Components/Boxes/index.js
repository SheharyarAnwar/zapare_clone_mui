import { Grid } from "@material-ui/core";
import React from "react";
import style from "./style";
const boxText = [
  "Revenue Cycle Management",
  "StaffAugmentation",
  "Payment Posting",
  "Reason Code Mapping",
  "Product Management",
  "Virtual Assistant",
  "Correspondence Management",
];

function Index() {
  const styles = style();
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

  const renderedItems = boxLines.map((val) => {
    return (
      <Grid
        item
        container
        className={styles.boxContainer}
        xs={4}
        direction="column"
        justify="space-around"
      >
        {val.map((item) => {
          return (
            <div className={styles.smallBox}>
              <p>{item[0]}</p>
              <p>{item}</p>
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
