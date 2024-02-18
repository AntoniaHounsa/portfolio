import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import texts from "./resources/texts";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import { inject } from "@vercel/analytics";


function App() {
  inject();
  return (
   <>
    <Navbar/>
    <div className="container">
      <Hero/>
    </div>

    <Skills skills={texts.skillsSection}/>
    <Projects projects={texts.projects}/>
    <Certifications certifications={texts.certifications} />
    <Footer/>
   </>
  );
}

export default App;
