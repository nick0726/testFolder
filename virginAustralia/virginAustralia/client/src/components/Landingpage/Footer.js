import React from "react";
import logo from "images/virgin_logo.png";
import SocialContainer from "components/SocialContainer";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer_logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer_contents">
        <div className="link_container">
          <div>
            <p>Contact Virgin</p>
            <p>Web Terms of Use</p>
            <p>Web Privacy Policy</p>
            <p>Web Cookie Policy</p>
            <p>Report a Scam</p>
          </div>
          <div>
            <p>Virgin Modern Slavery Statement</p>
            <p>Virgin Tax Strategy Statement</p>
            <p>Virgin Corporate Governance</p>
            <p>Virgin Group FAQs</p>
            <p>Newletter</p>
          </div>
        </div>
        <div className="quote_container">
          <p className="quote">
            “When I was a boy my nickname was 'Letsgo'. At Virgin
          </p>
          <p> this morphed into 'Doctor Yes'.”</p>
          <p className="attribution">Richard Branson</p>
        </div>
      </div>
      <div className="social_container">
        <SocialContainer />
      </div>
      <div className="footer_copyright">
        © Virgin 2021. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
