import React, { useMemo } from "react";
import overlayImage from "../../Assets/overlay.png";
import SectionLayout from "../../Layout/SectionLayout/index";
import style from "./style";
import { Grid } from "@material-ui/core";

const list = [
  "US experienced management team",
  "Secure work environment",
  "Compliance driven process",
  "Data driven quality review",
  "Workforce management",
  "24x7 coverage",
];
function Index() {
  const styles = style();
  // const [boxesInView,setBoxesInView]=useState(false)
  const isIntersecting = (inView) => {};
  const settings = useMemo(
    () => ({
      rootClass: styles.root,
      left: {
        item: true,
        container: true,
        sm: 8,
        justify: "center",
        className: styles.pointers,
        alignItems: "center",
        children: (
          <>
            <div>
              <h2> Zapare Advantages.</h2>
              <Grid item container>
                {list.map((val) => (
                  <Grid
                    item
                    container
                    style={{ paddingRight: "15px" }}
                    alignItems="center"
                    sm={6}
                    xs={12}
                  >
                    <p>{val}</p>
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        ),
      },
      right: {
        item: true,
        container: true,
        sm: 4,
        className: styles.overlay,
        justify: "flex-start",
        alignItems: "center",
        children: (
          <>
            <img src={overlayImage} />
          </>
        ),
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
