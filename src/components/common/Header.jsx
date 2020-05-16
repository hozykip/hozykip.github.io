import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // eslint-disable-line
import Navigation from "./Navigation"; // eslint-disable-line

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("nav");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }

  handleLinkClick = (event) => {
    document.querySelector(".activeLink") &&
      document.querySelector(".activeLink").classList.remove("activeLink");

    if (event.target.parentElement.id === "logoTitle") {
      document.querySelector("#home_link").classList.add("activeLink");
      return;
    }
    event.target.classList.add("activeLink");
  };

  handleBurgerClick = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  };
  render() {
    return (
      <>
        <header>
          <nav>
            <div className="logo">
              <h2 id="logoTitle">
                <a href="#home" onClick={this.handleLinkClick}>
                  Hozy
                </a>
              </h2>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home" onClick={this.handleLinkClick} id="home_link">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a href="#about" id="about_link" onClick={this.handleLinkClick}>
                  About
                </a>
              </li>
              {/* <li>
                <a href="#skills" onClick={this.handleLinkClick}>
                  Skills
                </a>
              </li> */}
              <li>
                <a href="#job" onClick={this.handleLinkClick}>
                  Job
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={this.handleLinkClick}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.handleLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="burger" onClick={this.handleBurgerClick}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
