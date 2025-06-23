import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./index.css";

const Home = () => (
  <section className="hero">
    <h1>Hi, I'm <span>John Doe</span></h1>
    <p>A passionate Frontend Developer</p>
    <Link to="/projects" className="btn">View My Work</Link>
  </section>
);
–
const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>I'm a frontend developer specializing in React, JavaScript, and UI/UX design.</p>
  </section>
);

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A personal website built with React and GitHub Pages.</p>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <p>Email: johndoe@example.com</p>
    <div className="social-links">
      {/* <a href="#"><FaGithub /></a>
      <a href="#"><FaLinkedin /></a>
      <a href="#"><FaEnvelope /></a> */}
    </div>
  </section>
)

export default Home