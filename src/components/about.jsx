import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="sm:p-10 p-5"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        About
      </h1>
      <br />
      <p>
        I'm a Software Developer from Delhi, India, working in Web & Software
        Development. I enjoy turning complex problems into simple, beautiful and
        intuitive designs.
      </p>
      <br />
      <p>
        My job is to build website & softwares so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
    </motion.section>
  );
};

export default About;
