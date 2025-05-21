import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      id="home"
      className="sm:p-10 p-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-5xl text-4xl font-extrabold">Ahmad Raza</h1>
        <h4 className="text-base font-medium">
          A Passionate Software Developer.
        </h4>
      </motion.div>

      <motion.div
        className="flex gap-5 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#183B4E]  text-white px-2 rounded font-medium cursor-pointer">
          <Link to="contact" smooth={true} duration={0}>
            Hire
          </Link>
        </button>
        <button className="bg-[#183B4E] text-white px-2 rounded font-medium cursor-pointer">
          <a
            href="/Ahmad-Raza-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Introduction;
