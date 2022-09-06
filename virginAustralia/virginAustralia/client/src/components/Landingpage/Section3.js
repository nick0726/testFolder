import React from "react";
import { scoopList } from "components/Landingpage/Section3/scoopList";
import SocialContainer from "components/SocialContainer";
const Section3 = () => {
  return (
    <div className="section" id="section3">
      <div className="section3_text">
        Get the inside scoop
        <span>.</span>
      </div>
      <div className="section3_scoop">
        <div className="scoop_contents">
          {scoopList.map((el, idx) => {
            return (
              <div className="scoop_item" key={idx}>
                <div>
                  <img src={el.thumbnail} alt="" />
                  <div>{el.part}</div>
                </div>
                <div>{el.title}</div>
                <div>{`${el.date}`}</div>
              </div>
            );
          })}
        </div>
        <div className="scoop_button">
          <div>View more from Virgin</div>
        </div>
      </div>
      <div className="section3_social">
        <div className="social_logo">
          <img
            src="https://www.virgin.com/img/virgin-logo-on-red.png?fl=progressive&q=80&w=160&h=160&fit=fill"
            alt=""
          />
        </div>
        <div>Reach us on social</div>
        <div>Be part of the conversation on our latest ventures</div>
        <SocialContainer />
      </div>
    </div>
  );
};

export default Section3;
