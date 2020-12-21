import React from "react";
import Paragraph from "../Paragraph/index";

import style from "./styles";
import clsx from "clsx";
function Index({ heading, content, action, paraStyles }) {
  const styles = style();
  return (
    <>
      <h2 className={styles.richTextHeading}>{heading}</h2>
      <p className={clsx(styles.richTextPara, paraStyles)}>{content}</p>
      <Paragraph>{action}</Paragraph>
    </>
  );
}

export default Index;
