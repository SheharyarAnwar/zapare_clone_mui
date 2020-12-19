import RichText from "../../Components/Common/RichText/index";
import React, { useMemo } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import { ReactComponent as Oval } from "../../Assets/oval.svg";
import style from "./style";

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
            <RichText
              heading={"Services."}
              content="We offer customized digital services and scalable operational
               strategies to prepare your Organization ride through the waves
                of uncertainty in the form of disruptive technology and 
                government regulations so you can deliver accelerated 
                and cost-effective services for your consumers"
              action={"Explore services"}
            />
          </>
        ),
      },
      left: {
        item: true,
        container: true,
        md: 7,
        className: styles.image,
        justify: "center",
        alignItems: "center",
        children: <Oval />,
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
