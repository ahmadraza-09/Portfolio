import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Import motion
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Youtube from "../assets/icons/youtube.png";
import LeetCode from "../assets/icons/leetcode.webp";
import GeeksForGeeks from "../assets/icons/GeeksforGeeks.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full p-0 dark:bg-gray-900 dark:text-white before:[''] dark:before:bg-white before:block before:w-full *: before:h-1 before:bg-black"
    >
      <div className="flex md:flex-row flex-col gap-10 md:items-start md:justify-between p-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-semibold text-lg">Menu</h3>
          <ul className="flex flex-col gap-2">
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
            <li className="cursor-pointer">
              <Link to="contact" smooth={true} duration={0}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-semibold text-lg">What I Do</h3>
          <ul className="flex flex-col gap-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>API Integration</li>
            <li>Google SEO</li>
            <li>Performance Optimization</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-semibold text-lg">Social Media</h3>
          <div className="flex gap-2 w-fit items-center">
            <a
              href="https://www.instagram.com/roneeey_09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="w-12 h-12 hover:scale-110 transition duration-300"
              />
            </a>
            <a href="#">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-10 h-10 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadraza09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Youtube}
                alt="Youtube"
                className="w-10 h-10 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadraza09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row text-center sm:justify-between bg-slate-200 px-5 py-2 dark:bg-white dark:text-black"
      >
        <span>Copyright © 2024 - 2025. Ahmad Raza.</span>
        <span>
          <span>Data Privacy | Privacy Policy | Terms of service</span>
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
