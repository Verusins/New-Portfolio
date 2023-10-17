import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Palette.css";

function Divider() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
    setTimeout(() => {
      setExpanded(true);
    }, 100);
  }, []);

  return <div className={`divider ${expanded ? "expanded" : ""}`}></div>;
}

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <section className="about" id="about"></section>
        <Divider />
        <section className="featured" id="featured"></section>
        <Divider />
        <section className="projects" id="projects"></section>
        <Divider />
        <section className="contact" id="contact"></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
