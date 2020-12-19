import Paragraph from "../../Components/Common/Paragraph/index";
import React, { useMemo } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import style from "./style";

function Index() {
  const styles = style();
  const settings = useMemo(() => ({
    left: {
      item: true,
      container: true,
      md: 6,
      justify: "center",
      className: styles.aboutText,
      alignItems: "center",
      children: <p>Yolo</p>,
    },
    right: {
      item: true,
      container: true,
      md: 6,
      className: styles.image,
      justify: "flex-start",
      alignItems: "center",
      children: <p>Yolo 2</p>,
    },
  }));
  return (
    <>
      <SectionLayout {...settings} />
    </>
  );
}

export default Index;
