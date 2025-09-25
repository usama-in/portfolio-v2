import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import "./styles/animations.css";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="relative  min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
