import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
  return (
    <section className="about_page page" id="about">
      <main>
        <h1>Who am I?</h1>
        <div>
          <div className="about_img_container">
            <img
              src="images/profile2.jpg"
              alt="Hozy Kip"
              className="about_img"
            />
            <img
              src="images/profile1.jpg"
              alt="Hozy Kip"
              className="about_img_big"
            />
          </div>
          <article>
            <p>
              Hosea is a bright and ambitious software developer whose drive is
              in understanding client needs and developing extensive
              production-ready and well-tested applications. Starting as an
              android developer & graphics designer back in August 2018, I
              gained lots of knowledge in mobile app development, project
              management, and problem-solving. I now work as a Technical Consultant where I mostly develop and research on web and mobile applications.
              {/* <p>developer where I mostly use PHP and some of its frameworks,
              particularly Symfony and WordPress content manager.</p> */}
            </p>
            <p>
              My passion is to create unambiguously simplistic web systems to
              solve complex problems with minimal technical overhead for the
              user. I also advise on industry best practices and standards that
              ensure the resulting system is efficient and secure
            </p>
            <p>
              Contact me via the links on the left, or send a message using the{" "}
              <a href="/#contact" id="contact_link">
                contact form
              </a>
              . I'll be glad to receive your feedback.
            </p>

            <div className="school_div">
              <a
                href="https://www.chuka.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FontAwesomeIcon icon="graduation-cap" />
                </h3>
                <div>
                  <h4>Chuka University</h4>
                  <h5>Bachelor of Science in Applied Computer Science</h5>
                </div>
              </a>
            </div>
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
                <h2 className="text">C#</h2>
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
                        stroke: "#1881faad",
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
                <h2 className="text">Python</h2>
              </div>
            </div>
            {/* <div className="card">
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
                <h2 className="text">Django</h2>
              </div>
            </div> */}

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
