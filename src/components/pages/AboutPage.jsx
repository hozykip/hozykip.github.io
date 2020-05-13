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

        <div className="skills_container">
          <h2>Skills</h2>

          <div className="skills">
            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#55b36e",
                        strokeDashoffset: "calc(310 - (310 * 85) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      85<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">HTML5 & CSS</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#1881faad",
                        strokeDashoffset: "calc(310 - (310 * 90) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Core PHP</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#4c6e94",
                        strokeDashoffset: "calc(310 - (310 * 80) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      80<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">JavaScript</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#8c5865",
                        strokeDashoffset: "calc(310 - (310 * 90) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Symfony</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#6d6d03",
                        strokeDashoffset: "calc(310 - (310 * 80) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      80<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">React</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#105652",
                        strokeDashoffset: "calc(310 - (310 * 90) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Java SE</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#edc2efb0",
                        strokeDashoffset: "calc(310 - (310 * 90) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">JQUERY</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#d45e0787",
                        strokeDashoffset: "calc(310 - (310 * 80) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      80<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Database administration</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#712b9ecc",
                        strokeDashoffset: "calc(310 - (310 * 75) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      75<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Wordpress</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#ff253a85",
                        strokeDashoffset: "calc(310 - (310 * 75) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      75<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Android</h2>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="50" />
                    <circle
                      cx="70"
                      cy="70"
                      r="50"
                      style={{
                        stroke: "#57062ccc",
                        strokeDashoffset: "calc(310 - (310 * 70) / 100)",
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2 className="num_percentage">
                      70<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className="text">Linux server administration</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
