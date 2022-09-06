import React from "react";
import mainImage from "images/virginAus_main_image.png";
import Arrow2 from "components/Arrow2";
const Section1 = () => {
  return (
    <div className="section" id="section1">
      <div className="section1_content">
        <div className="section1_text">
          <div>virgin australia</div>
          <div>Virgin Australia welcome back international travellers</div>
          <div>
            time to travel
            <Arrow2 />
          </div>
        </div>
        <div className="section1_image">
          <img src={mainImage} alt="mainImage" />
        </div>
      </div>
      <div className="section1_blank">
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Section1;
