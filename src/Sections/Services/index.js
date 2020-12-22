import RichText from "../../Components/Common/RichText/index";
import SquareBoxes from "../../Components/Boxes/index";
import React, { useMemo, useState, useRef } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import { ReactComponent as Oval } from "../../Assets/oval.svg";
import style from "./style";
import { Box } from "@material-ui/core";
import useAnimation from "../../Hooks/useAnimation";

function Index() {
  const styles = style();
  const { setAnimation } = useAnimation();
  const [boxesInView, setBoxesInView] = useState(false);
  const ref = useRef();
  const textRef = useRef();
  const isIntersecting = (val) => {
    if (val) {
      setBoxesInView(true);
      setAnimation({
        trigger: true,
        settings: { type: "smoothUp" },
        targets: [textRef.current],
      });
    }
  };

  const settings = useMemo(
    () => ({
      rootClass: styles.root,
      right: {
        item: true,
        container: true,
        md: 5,
        className: styles.aboutText,
        alignItems: "center",
        children: (
          <>
            <Box ref={textRef}>
              <RichText
                heading={"Services."}
                content="We offer customized digital services and scalable operational
               strategies to prepare your Organization ride through the waves
                of uncertainty in the form of disruptive technology and 
                government regulations so you can deliver accelerated 
                and cost-effective services for your consumers"
                action={"Explore services"}
              />
            </Box>
          </>
        ),
      },
      left: {
        item: true,
        container: true,
        md: 7,
        className: styles.image,
        justify: "flex-start",

        children: (
          <Box ref={ref} className={styles.ovalAndBoxContainer} width="100%">
            <Oval />
            <Box className={styles.boxes}>
              <SquareBoxes runAnimation={boxesInView} />
            </Box>
          </Box>
        ),
      },
    }),
    [boxesInView]
  );
  return (
    <>
      <SectionLayout triggerIntersection={isIntersecting} {...settings} />
    </>
  );
}

export default Index;
