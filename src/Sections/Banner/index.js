import React, { useMemo } from "react";
// import { Grid } from "@material-ui/core";
import { ReactComponent as Illustration } from "../../Assets/illustration.svg";
import BannerSlider from "../../Components/BannerSlider/index";
import SectionLayout from "../../Layout/SectionLayout/index";
import style from "./style";
const content = [
  {
    h2: ["Customized solutions", "to meet the needs of", "the changing market"],
    p: "Revenue Cycle Managment",
  },
  {
    h2: ["Scalable extended", "business office", "services"],
    p: "Staff Augmentation",
  },
  {
    h2: ["Innovative and", "intelligent technology", "solutions and services"],
    p: "Product Managment",
  },
];
function Index() {
  const styles = style();
  const settings = useMemo(() => ({
    left: {
      item: true,
      container: true,
      md: 6,
      justify: "center",
      className: styles.illustration,
      alignItems: "center",
      children: <Illustration />,
    },
    right: {
      item: true,
      container: true,
      md: 6,
      className: styles.slider,
      justify: "flex-start",
      alignItems: "center",
      children: <BannerSlider content={content} />,
    },
  }));
  return (
    <>
      <SectionLayout {...settings} />
    </>
  );
}

export default Index;
