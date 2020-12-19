import React from "react";
import Paragraph from "../Paragraph/index";
import style from "./styles";
function Index({ heading, content, action }) {
  const styles = style();
  return (
    <>
      <h2 className={styles.richTextHeading}>{heading}</h2>
      <p className={styles.richTextPara}>{content}</p>
      <Paragraph>{action}</Paragraph>
    </>
  );
}

export default Index;
