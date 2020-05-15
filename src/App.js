import React, { useEffect } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./reset_css.css";
import "./App.css";
import "./components/pages/Portfolio.css";
import Header from "./components/common/Header";
import HomePage from "./components/pages/HomePage";
import QuickContact from "./components/common/QuickContact";
import AboutPage from "./components/pages/AboutPage";
import WorkPage from "./components/pages/WorkPage";
import $ from "jquery"; //eslint-disable-line
import SmoothScroll from "smooth-scroll";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    //implement jQuery smooth scroll
    // $(".nav-links a").on("click", function (e) {
    //   if (this.hash) {
    //     e.preventDefault();
    //     const hash = this.hash;
    //     $("html, body").animate(
    //       {
    //         scrollTop: $(hash).offset().top,
    //       },
    //       800
    //     );
    //   }
    // });

    //implement smooth scroll using smooth-scroll library
    const smooth = new SmoothScroll( // eslint-disable-line
      '.nav-links a[href*="#"], .logo a[href*="#"]',
      {
        speed: 600,
      }
    );
  });
  return (
    <div className="App">
      <Header />
      <HomePage />
      <QuickContact />
      <AboutPage />
      <WorkPage />
      <ProjectsPage />
      <ContactPage />
      <ToastContainer autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default App;
