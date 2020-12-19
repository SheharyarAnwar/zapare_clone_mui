import { Box } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import Paragraph from "../Common/Paragraph/index";
import style from "./style";

function Index({ content }) {
  const [selectedSliderId, setSelectedSliderId] = useState(0);
  const styles = style();
  const arrowClicked = (direction) => {
    let incrementFactor = selectedSliderId + 1;
    let decrementFactor = selectedSliderId - 1;
    if (incrementFactor >= content.length) {
      incrementFactor = 0;
    }
    if (decrementFactor < 0) {
      decrementFactor = content.length - 1;
    }
    direction === "left"
      ? setSelectedSliderId(decrementFactor)
      : setSelectedSliderId(incrementFactor);
  };
  const renderedText = useMemo(
    () =>
      content.map((val, i) => {
        return (
          <>
            {val.h2.map((val) => (
              <Box component="h2">{val}</Box>
            ))}
            <Paragraph>{val.p}</Paragraph>
          </>
        );
      }),
    [content]
  );
  const renderedDots = useMemo(() =>
    renderedText.map((val, i) => {
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
    })
  );
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
