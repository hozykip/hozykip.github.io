import React from "react";

import facebook from "../../img/SM/facebook.png";
import github from "../../img/SM/github.png";
import linkedin from "../../img/SM/linkedin.png";
import twitter from "../../img/SM/twitter.png";

export default function QuickContact() {
  return (
    <div className="quick_contact">
      <a href="https://wa.me/254702127533/">
        <img src="images/whatsapp-48.png" alt="WhatsApp" />
      </a>
      <br />
      <a href="mailto: kiprutohosea05@gmail.com">
        <img src="images/gmail-48.png" alt="WhatsApp" />
      </a>
      <br />
      <a
        href="https://www.facebook.com/hozy.kip.1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook" />
      </a>
      <br />
      <a
        href="https://github.com/hozykip"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Github" />
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/hosea-kipruto-4956a7107"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <br />
      <a
        href="https://twitter.com/hozykip59"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
      </a>
      <br />
    </div>
  );
}
