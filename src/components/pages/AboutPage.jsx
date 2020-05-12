import React from "react";

export default function AboutPage() {
  return (
    <section className="about_page page" id="about">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptatibus voluptate laboriosam quibusdam inventore, atque aut
              in velit at exercitationem quis animi sint eos magnam! In atque,
              enim magnam ea voluptatem est. Et, sequi vero temporibus laborum
              adipisci ullam culpa?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsa recusandae quae aspernatur, et id. Repellat deserunt
              obcaecati, commodi totam nobis molestiae quae nemo quas nihil
              recusandae beatae quam sunt natus, inventore provident neque
              quisquam iure esse facere quod fuga veritatis ipsam! Nihil
              praesentium, accusamus nobis laborum autem modi iusto.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
}
