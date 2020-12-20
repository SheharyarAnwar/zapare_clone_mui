import React from "react";
import Header from "../../Components/Header/index";
import BannerSection from "../../Sections/Banner/index";
import AboutSection from "../../Sections/About/index";
import ServiceSection from "../../Sections/Services/index";
import AdvantagesSection from "../../Sections/Advantages/index";
function Index() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <AdvantagesSection />
    </>
  );
}

export default Index;
