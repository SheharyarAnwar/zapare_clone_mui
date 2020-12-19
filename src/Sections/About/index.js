import Paragraph from "../../Components/Common/Paragraph/index";
import React, { useMemo } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import aboutImage from "../../Assets/about-img.png";
import style from "./style";

function Index() {
  const styles = style();
  const settings = useMemo(() => ({
    rootClass: styles.root,
    left: {
      item: true,
      container: true,
      md: 6,
      className: styles.aboutText,
      alignItems: "center",
      children: (
        <>
          <h2>We Are</h2>
          <p>
            A highly specialized Management team with over 20 combined years of
            experience in the Healthcare industry with proven ability to
            optimally combine digital technology, skilled resources and
            efficient business processes to implement creative as well as proven
            market solutions to suit an ever-evolving market. Our forte has been
            to successfully tailor our solutions to support your needs whether
            it is in the space of Consulting, Product Management or Service
            Delivery
          </p>
        </>
      ),
    },
    right: {
      item: true,
      container: true,
      md: 6,
      className: styles.image,
      justify: "center",
      alignItems: "center",
      children: <img src={aboutImage} />,
    },
  }));
  return (
    <>
      <SectionLayout {...settings} />
    </>
  );
}

export default Index;
