import React from "react";
import Header from "../common/Header";

export default function HomePage() {
  return (
    <section
      className="home_page page"
      style={{ backgroundImage: `url(images/coder4.jpg)` }}
    >
      <Header />
      <div className="home_content">
        <h1>HOSEA KIPRUTO</h1>
        <div>SOFTWARE ENGINEER</div>
      </div>
    </section>
  );
}
