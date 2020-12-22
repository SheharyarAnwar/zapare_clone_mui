import React, { useEffect } from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import style from "./style";
import { useInView } from "react-intersection-observer";
function Index({ left, right, rootClass, triggerIntersection }) {
  const styles = style();
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    inView && triggerIntersection(inView);
  }, [entry]);
  return (
    <>
      <Grid container ref={ref} className={clsx(styles.root, rootClass)}>
        <Grid {...left} className={clsx(styles.left, left.className)} />
        <Grid {...right} className={clsx(styles.right, right.className)} />
      </Grid>
    </>
  );
}

export default Index;
