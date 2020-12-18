import { Box } from "@material-ui/core";
import React, { useState } from "react";
import style from "./style";
const textObj = [
  {
    h2First: "Customized solutions",
    h2Second: "to meet the needs of",
    h2Third: "the changing market",
    p: "Revenue Cycle Managment",
  },
  {
    h2First: "Scalable extended",
    h2Second: "business office",
    h2Third: "services",
    p: "Staff Augmentation",
  },
  {
    h2First: "Innovative and",
    h2Second: "intelligent technology",
    h2Third: "solutions and services",
    p: "Product Managment",
  },
];
function Index() {
  const [selectedSliderId, setSelectedSliderId] = useState(0);
  const styles = style();
  const renderedText = textObj.map((val, i) => {
    return (
      <>
        <Box component="h2">{val.h2First}</Box>
        <Box component="h2">{val.h2Second}</Box>
        <Box component="h2">{val.h2Third}</Box>
        <Box component="p">
          {val.p}
          <span />
        </Box>
      </>
    );
  });
  const renderedDots = renderedText.map((val, i) => {
    return (
      <div
        className={[
          styles.dot,
          i === selectedSliderId ? styles.blue : styles.lightblue,
        ].join(" ")}
        onClick={() => setSelectedSliderId(i)}
      ></div>
    );
  });
  return (
    <>
      <Box className={styles.root} component="div">
        {renderedText[selectedSliderId]}
        <div className={styles.sliderNav}>
          <div className={styles.dotWrapper}>{renderedDots}</div>
          <div className={styles.arrows}>
            <div className={styles.arrowLeft} />
            <div className={styles.arrowRight} />
          </div>
        </div>
      </Box>
    </>
  );
}

export default Index;
