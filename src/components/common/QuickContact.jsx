import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuickContact() {
  return (
    <div className="quick_contact">
      <a href="whatsapp://254702127533">
        <img src="images/whatsapp-48.png" alt="WhatsApp" />
      </a>
      <br />
      <a href="mailto: kiprutohosea05@gmail.com">
        <img src="images/gmail-48.png" alt="WhatsApp" />
      </a>
      {/* <a href="https://git">
        <FontAwesomeIcon
          icon="apple"
          // style={{ backgroundColor: "white", color: "red" }}
        />
      </a> */}
    </div>
  );
}
