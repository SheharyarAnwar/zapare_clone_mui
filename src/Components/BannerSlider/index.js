import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Paragraph from "../Common/Paragraph/index";
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
  const arrowClicked = (direction) => {
    let incrementFactor = selectedSliderId + 1;
    let decrementFactor = selectedSliderId - 1;
    if (incrementFactor >= textObj.length) {
      incrementFactor = 0;
    }
    if (decrementFactor < 0) {
      decrementFactor = textObj.length - 1;
    }
    direction === "left"
      ? setSelectedSliderId(decrementFactor)
      : setSelectedSliderId(incrementFactor);
  };
  const renderedText = textObj.map((val, i) => {
    return (
      <>
        <Box component="h2">{val.h2First}</Box>
        <Box component="h2">{val.h2Second}</Box>
        <Box component="h2">{val.h2Third}</Box>
        <Paragraph>{val.p}</Paragraph>
      </>
    );
  });
  const renderedDots = renderedText.map((val, i) => {
    return (
      <div
        key={i}
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
            <div
              className={styles.arrowLeft}
              onClick={() => {
                arrowClicked("left");
              }}
            />
            <div
              className={styles.arrowRight}
              onClick={() => {
                arrowClicked("right");
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
}

export default Index;
