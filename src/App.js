import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./reset_css.css";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import QuickContact from "./components/common/QuickContact";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <QuickContact />
      <AboutPage />
    </div>
  );
}

export default App;
