import React from "react";
import Header from "../../Components/Header/index";
import BannerSection from "../../Sections/Banner/index";
import AboutSection from "../../Sections/About/index";
import ServiceSection from "../../Sections/Services/index";
import AdvantagesSection from "../../Sections/Advantages/index";
import SolutionsSection from "../../Sections/Solutions/index";
import TalkSection from "../../Sections/Talk/index";
import FooterSection from "../../Sections/Footer/index";
function Index() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <AdvantagesSection />
      <SolutionsSection />
      <TalkSection />
      <FooterSection />
    </>
  );
}

export default Index;
