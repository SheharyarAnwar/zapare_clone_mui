import RichText from "../../Components/Common/RichText/index";
import SquareBoxes from "../../Components/Boxes/index";
import React, { useMemo } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import { ReactComponent as Oval } from "../../Assets/oval.svg";
import style from "./style";
import { Box } from "@material-ui/core";

function Index() {
  const styles = style();
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
            <Box>
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
        alignItems: "center",
        children: (
          <Box className={styles.ovalAndBoxContainer} width="100%">
            <Oval />
            <Box className={styles.boxes}>
              <SquareBoxes />
            </Box>
          </Box>
        ),
      },
    }),
    []
  );
  return (
    <>
      <SectionLayout {...settings} />
    </>
  );
}

export default Index;
