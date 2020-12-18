import React, { createRef } from "react";
import style from "./style";
function Index(props) {
  const leftPlankRef = createRef();
  const rightPlankRef = createRef();
  const styles = style();

  const animatePara = (status) => {
    const width = status === "in" ? "50%" : "0%";
    const frames = [
      {
        width: width,
      },
    ];
    const options = { duration: 300 };
    const left = leftPlankRef.current;
    const right = rightPlankRef.current;
    const elmentsToBeAnimated = [left, right];
    elmentsToBeAnimated.forEach((val) => {
      val.animate(frames, options).onfinish = () => {
        val.style.width = width;
      };
    });
  };

  const mouseIn = () => {
    animatePara("in");
  };
  const mouseOut = () => {
    animatePara("out");
  };
  return (
    <>
      <div className={[styles.root, props.className].join(" ")}>
        <p onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
          <span />
          {props.children}
          <i ref={leftPlankRef} className={styles.leftPlank} />
          <i ref={rightPlankRef} className={styles.rightPlank} />
        </p>
      </div>
    </>
  );
}

export default Index;
