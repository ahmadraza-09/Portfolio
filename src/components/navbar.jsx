import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "./themebutton";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`w-full h-[60px] flex items-center justify-between px-6 py-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 shadow-md w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-150 backdrop-contrast-100 h-[60px]"
          : "relative bg-transparent"
      }`}
    >
      <div className="text-2xl font-bold">Portfolio</div>

      {/* ✅ Desktop Nav */}
      <ul className="hidden md:flex items-center gap-4 font-medium">
        <li className="cursor-pointer">
          <Link to="home" smooth={true} duration={0}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="education" smooth={true} duration={0}>
            Education
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="experience" smooth={true} duration={0}>
            Experience
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="project" smooth={true} duration={0}>
            Project
          </Link>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => navigate("/mini-projects")}
        >
          Mini Projects
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={0}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ✅ Theme Button (desktop only) */}
      <div className="hidden md:block">
        <ThemeButton />
      </div>

      {/* ✅ Hamburger (mobile only) */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white dark:bg-black text-black dark:text-white px-6 py-4 md:hidden z-40">
          <ul className="flex flex-col gap-4 font-medium">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={0}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="education" smooth={true} duration={0}>
                Education
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="experience" smooth={true} duration={0}>
                Experience
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="project" smooth={true} duration={0}>
                Project
              </Link>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/mini-projects")}
            >
              Mini Projects
            </li>
            <li className="cursor-pointer">
              <Link to="contact" smooth={true} duration={0}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <ThemeButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
