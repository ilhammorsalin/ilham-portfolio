import elamDP from "../assets/elamDP.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../sections/HomeSection.jsx";
import About from "../sections/AboutSection.jsx";
import Projects from "../sections/ProjectsSection.jsx";
import Contact from "../sections/ContactSection.jsx";

function Header() {
  return (
    <header className="bg-white shadow p-6 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-20 h-20 mr-3" src={elamDP} alt="elam dp" />
        <h1 className="text-2xl font-bold text-gray-800">Ilham's Portfolio</h1>
      </div>
      <nav className="space-x-6">
        <a href="/" className="text-gray-600 hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="text-gray-600 hover:text-blue-500">
          About
        </a>
        <a href="#projects" className="text-gray-600 hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
