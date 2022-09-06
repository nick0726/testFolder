import React from "react";
import Section1 from "components/Landingpage/Section1";
import Section2 from "components/Landingpage/Section2";
import Section3 from "components/Landingpage/Section3";
import Section4 from "components/Landingpage/Section4";
import Footer from "components/Landingpage/Footer";
const LandingPage = () => {
  return (
    <div className="landing">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default LandingPage;
