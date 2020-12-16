import React, { createRef } from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import classes from "./index.module.css";
function Index() {
  const ref = createRef();
  const mouseOutOptionsHandler = (e) => {
    let hoveredElement = e.target;
    let placeHolder = hoveredElement;
    if (hoveredElement.tagName === "P") {
      placeHolder = hoveredElement.childNodes[0];
    }
    const computedWidth = getComputedStyle(placeHolder).width;
    placeHolder.parentNode.style.color = "var(--black)";
    placeHolder.animate([{ width: computedWidth }, { width: 0 }], {
      duration: 400,
      easing: "linear",
    }).onfinish = () => {
      placeHolder.style.width = 0;
    };
  };
  const mouseOverOptionsHandler = (e) => {
    let hoveredElement = e.target;
    let placeHolder = hoveredElement;
    if (hoveredElement.tagName === "P") {
      placeHolder = hoveredElement.childNodes[0];
    }
    placeHolder.parentNode.style.color = "var(--blue)";
    placeHolder.animate([{ width: 0 }, { width: "60%" }], {
      duration: 400,
      easing: "cubic-bezier(0.775, 0.290, 0.885, 0.410)",
    }).onfinish = () => {
      placeHolder.style.width = "60%";
    };
  };
  const navRendered = [
    "Home",
    "About us",
    "Services",
    "Careers",
    "Contact",
  ].map((val, i) => {
    return (
      <p
        key={i}
        onMouseEnter={mouseOverOptionsHandler}
        onMouseLeave={mouseOutOptionsHandler}
      >
        <span className={classes.placeHolder} />
        {val}
      </p>
    );
  });
  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <Logo width={65} />
            <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>
              Zapare Technologies
            </p>
          </div>
          <div className={classes.navbar} ref={ref}>
            {navRendered}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
