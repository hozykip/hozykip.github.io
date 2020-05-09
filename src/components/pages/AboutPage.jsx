import React from "react";

export default function AboutPage() {
  return (
    <section className="about_page page">
      <main>
        <h1>Who am I?</h1>
        <div>
          <div className="about_img_container">
            <img
              src="images/hozy_prof.jpg"
              alt="Hozy Kip"
              className="about_img"
            />
            <img
              src="images/hozy_prof.jpg"
              alt="Hozy Kip"
              className="about_img_big"
            />
          </div>
          <article>
            <p>
              React is a JavaScript library, and so we’ll assume you have a
              basic understanding of the JavaScript language. If you don’t feel
              very confident, we recommend going through a JavaScript tutorial
              to check your knowledge level and enable you to follow along this
              guide without getting lost. It might take you between 30 minutes
              and an hour, but as a result you won’t have to feel like you’re
              learning both React and JavaScript at the same time.
            </p>
            <p>
              React is a JavaScript library, and so we’ll assume you have a
              basic understanding of the JavaScript language. If you don’t feel
              very confident, we recommend going through a JavaScript tutorial
              to check your knowledge level and enable you to follow along this
              guide without getting lost. It might take you between 30 minutes
              and an hour, but as a result you won’t have to feel like you’re
              learning both React and JavaScript at the same time.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
}
