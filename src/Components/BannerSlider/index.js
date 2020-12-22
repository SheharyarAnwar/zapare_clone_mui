import { Box } from "@material-ui/core";
import React, { useMemo, useState, useRef, createRef } from "react";
import Paragraph from "../Common/Paragraph/index";
import style from "./style";
import useAnimation from "./../../Hooks/useAnimation";

function Index({ content }) {
  let ref = useRef();
  const [selectedSliderId, setSelectedSliderId] = useState(0);
  const { setAnimation } = useAnimation();
  const styles = style();
  const arrowClicked = (origin, direction) => {
    if (origin) {
      setSelectedSliderId(origin);
    } else {
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
    }
    const targetElements = Array.from(
      renderedText[selectedSliderId].ref.current.children
    );
    setAnimation({
      trigger: true,
      settings: { type: "translate" },
      targets: targetElements,
    });
  };
  const renderedText = useMemo(
    () =>
      content.map((val, i) => {
        return (
          <div ref={ref}>
            {val.h2.map((val, i) => (
              <Box
                component="h2"
                style={{
                  backgroundColor: "white",
                  position: "relative",
                  zIndex: i,
                }}
              >
                {val}
              </Box>
            ))}
            <Paragraph>{val.p}</Paragraph>
          </div>
        );
      }),
    [content]
  );
  const renderedDots = useMemo(
    () =>
      renderedText.map((val, i) => {
        return (
          <div
            key={i}
            className={[
              styles.dot,
              i === selectedSliderId ? styles.blue : styles.lightblue,
            ].join(" ")}
            onClick={() => arrowClicked(i)}
          ></div>
        );
      }),
    [selectedSliderId]
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
                arrowClicked(null, "left");
              }}
            />
            <div
              className={styles.arrowRight}
              onClick={() => {
                arrowClicked(null, "right");
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
}

export default Index;
