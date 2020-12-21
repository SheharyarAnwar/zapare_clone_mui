import RichText from "../../Components/Common/RichText/index";
import React, { useMemo } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import aboutImage from "../../Assets/about-img.png";
import { ReactComponent as Talk } from "../../Assets/talk.svg";
import style from "./style";

function Index() {
  const styles = style();
  const settings = useMemo(
    () => ({
      rootClass: styles.root,
      right: {
        item: true,
        container: true,
        md: 6,
        className: styles.aboutText,
        alignItems: "center",
        children: (
          <>
            <RichText
              heading={"Talk to our experts about your requirements"}
              content="Contact us and know more about how our experts can help your business grow"
              action={"Enquire Now"}
              paraStyles={styles.para}
            />
          </>
        ),
      },
      left: {
        item: true,
        container: true,
        md: 6,
        className: styles.image,
        justify: "center",
        alignItems: "center",
        children: <Talk />,
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
