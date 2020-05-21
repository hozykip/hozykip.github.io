import React from "react";

function handlePortfolioCLick(event) {
  const flippedElements = document.querySelectorAll(".portfolio_flip");
  flippedElements.forEach((el, index) => {
    el !== event.target.closest(".portfolio") &&
      el.classList.remove("portfolio_flip");
  });
  event.target.closest(".portfolio").classList.add("portfolio_flip");
}

function handleMouseOut(event) {
  event.target.closest(".portfolio").classList.remove("portfolio_flip");
}

export default function ProjectsPage() {
  return (
    <section className="projects_page page" id="portfolio">
      <main>
        <h1>Portfolio</h1>
        <div className="portfolio_container">
          <div
            className="portfolio"
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
          >
            <div className="front">
              <img src="images/portfolio/sura-portfolio.png" alt="SuraImages" />
              <div className="project_title">Sura Images</div>
            </div>
            <div className="back">
              <div>
                <h2 className="proj_title">Sura Images</h2>
                <div>
                  <p>
                    A stock photography system that handles images and video
                    processing.
                  </p>
                  <p>Build on Symfony, jQuery & MySQL</p>
                </div>
              </div>

              <a
                href="https://suraimages.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out
              </a>
            </div>
          </div>
          <div
            className="portfolio"
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
          >
            <div className="front">
              <img
                src="images/portfolio/afc-portfolio.png"
                alt="Africa Fairtrade Convention website"
              />
              <div className="project_title">
                {" "}
                Africa Fairtrade Convention website
              </div>
            </div>
            <div className="back">
              <div>
                <h2 className="proj_title">
                  Africa Fairtrade Convention website
                </h2>
                <p>
                  <p>A wordpress re-design</p>
                </p>
              </div>
              <a
                href="https://africafairtradeconvention.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out
              </a>
            </div>
          </div>

          <div
            className="portfolio"
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
          >
            <div className="front">
              <img
                src="images/portfolio/ngoma2.png"
                alt="Africa Fairtrade Convention Ngoma Portal"
              />
              <div className="project_title">
                <span>Africa Fairtrade Convention</span>
                <span>Ngoma Awards Portal</span>
              </div>
            </div>
            <div className="back">
              <div>
                <h2 className="proj_title">
                  Africa Fairtrade Convention Ngoma Portal
                </h2>
                <div>
                  <p>An awards submissions portal.</p>
                  <p>Build on Symfony, jQuery & MySQL</p>
                </div>
              </div>
              <a
                href="https://ngoma.africafairtradeconvention.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
