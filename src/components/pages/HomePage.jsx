import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  function handleClick() {
    document.querySelector(".activeLink") &&
      document.querySelector(".activeLink").classList.remove("activeLink");
    let aboutLink = document.querySelector("#about_link");
    aboutLink.classList.add("activeLink");
  }
  return (
    <section
      id="home"
      className="home_page page"
      style={{ backgroundImage: `url(images/code.jpg)` }}
    >
      <div className="home_content">
        <div>
          <h1 id="home_name">HOSEA KIPRUTO</h1>
          <div id="home_title">SOFTWARE ENGINEER</div>
        </div>

        <a id="home_about_link" href="#about" onClick={handleClick}>
          <FontAwesomeIcon icon="arrow-circle-down" />
        </a>
      </div>
    </section>
  );
}
