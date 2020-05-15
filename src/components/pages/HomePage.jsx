import React from "react";

export default function HomePage() {
  return (
    <section
      id="home"
      className="home_page page"
      style={{ backgroundImage: `url(images/code.jpg)` }}
    >
      <div className="home_content">
        <h1 id="home_name">HOSEA KIPRUTO</h1>
        <div>SOFTWARE ENGINEER</div>
      </div>
    </section>
  );
}
