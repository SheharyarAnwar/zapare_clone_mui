import classes from "./index.module.css";
import React from "react";
import { ReactComponent as Illustration } from "../../Assets/illustration.svg";
import Layout from "../../Layouts/Section/index";
import BannerSlider from "../../Components/BannerSlider/index";

function Index() {
  return (
    <Layout>
      <div className={classes.content}>
        <Illustration width={60} />
      </div>
      <div className={classes.content}>
        <BannerSlider />
      </div>
    </Layout>
  );
}

export default Index;
