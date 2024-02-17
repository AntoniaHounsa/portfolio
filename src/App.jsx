import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import texts from "./resources/texts";
function App() {
  return (
   <>
    <Navbar/>
    <div className="container">
      <Hero/>
    </div>

    <Skills skills={texts.skillsSection}/>
   </>
  );
}

export default App;
