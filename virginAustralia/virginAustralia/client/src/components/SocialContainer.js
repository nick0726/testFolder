import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagramSquare,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialContainer = () => {
  return (
    <div id="social">
      <FontAwesomeIcon icon={faFacebookF} size="lg" />
      <FontAwesomeIcon icon={faTwitter} size="lg" />
      <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
      <FontAwesomeIcon icon={faYoutube} size="lg" />
      <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
    </div>
  );
};

export default SocialContainer;
