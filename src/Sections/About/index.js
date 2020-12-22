import RichText from "../../Components/Common/RichText/index";
import React, { useMemo, useEffect, useRef } from "react";
import SectionLayout from "../../Layout/SectionLayout/index";
import { useInView } from "react-intersection-observer";
import aboutImage from "../../Assets/about-img.png";
import style from "./style";
import useAnimation from "../../Hooks/useAnimation";

function Index() {
  const styles = style();
  const { setAnimation } = useAnimation();
  const ref = useRef();
  const textRef = useRef();
  const isIntersecting = (val) => {
    if (val) {
      console.log(textRef.current);
      setAnimation({
        trigger: true,
        settings: { type: "smoothUp" },
        targets: [ref.current, textRef.current],
      });
    }
  };

  const settings = useMemo(
    () => ({
      rootClass: styles.root,
      left: {
        item: true,
        container: true,
        md: 6,
        className: styles.aboutText,
        alignItems: "center",
        children: (
          <div ref={textRef}>
            <RichText
              heading={"We Are"}
              content="A highly specialized Management team with over 20 combined years of
            experience in the Healthcare industry with proven ability to
            optimally combine digital technology, skilled resources and
            efficient business processes to implement creative as well as proven
            market solutions to suit an ever-evolving market. Our forte has been
            to successfully tailor our solutions to support your needs whether
            it is in the space of Consulting, Product Management or Service
            Delivery"
              action={"About us"}
            />
          </div>
        ),
      },
      right: {
        item: true,
        container: true,
        md: 6,
        className: styles.image,
        justify: "center",
        alignItems: "center",
        children: <img ref={ref} src={aboutImage} />,
      },
    }),
    []
  );
  return (
    <>
      <SectionLayout triggerIntersection={isIntersecting} {...settings} />
    </>
  );
}

export default Index;
