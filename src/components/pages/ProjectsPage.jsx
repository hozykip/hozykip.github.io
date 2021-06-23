import React from "react";
import ProjectCard from "../common/ProjectCard";

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
          
          <ProjectCard 
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
            frontTitle="Sura Images"
            backTitle="Sura Images"
            alt = "Sura Images"
            link="https://suraimages.com"
            img="images/portfolio/sura-portfolio.png"
            description="A stock photography system that handles images and video processing. Build on Symfony, jQuery & MySQL. Leverages on image and video processing libraries."         
          />

          <ProjectCard 
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
            frontTitle="Africa Fairtrade Convention website"
            backTitle="Africa Fairtrade Convention website"
            alt = "Africa Fairtrade Convention website"
            link="https://africafairtradeconvention.com/"
            img="images/portfolio/afc-portfolio.png"
            description="A wordpress re-design"         
          />



          <ProjectCard 
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
            frontTitle="Africa Fairtrade Convention Ngoma Portal"
            backTitle="Africa Fairtrade Convention, Ngoma Awards Portal"
            alt = "Africa Fairtrade Convention Ngoma Portal"
            link="https://ngoma.africafairtradeconvention.com/login"
            img="images/portfolio/ngoma2.png"
            description="An awards submissions portal. Build on Symfony, jQuery & MySQL"         
          />

          <ProjectCard 
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
            frontTitle="Moi University Pension Portal"
            backTitle="Moi University Pension Portal"
            subTitle="Member Self Service"
            alt = "MUPS Pension"
            link="https://portal.mups.co.ke/"
            img="images/portfolio/MUPS Screenshot.png"
            description="Pension Member, Trustee and Sponsor portal built on ASP.NET MVC & Dynamics NAV"         
          />
          
          <ProjectCard 
            onClick={handlePortfolioCLick}
            onMouseOver={handlePortfolioCLick}
            onMouseLeave={handleMouseOut}
            frontTitle="Liaison Pension Portal"
            backTitle="Liaison Pension Portal"
            subTitle="Member Self Service"
            alt = "Liaison Pension"
            link="https://pensiontest.liaisongroup.net/"
            img="images/portfolio/Liaison Admin Dashboard.PNG"
            description="Pension Member, Trustee and Sponsor portal built on ASP.NET MVC & Dynamics NAV"         
          />
          


        </div>
      </main>
    </section>
  );
}
