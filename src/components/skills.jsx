import React from "react";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import Tailwind from "../assets/icons/tailwind.png";
import JQuery from "../assets/icons/jquery.png";
import BootStrap from "../assets/icons/bootstrap.png";
import JavaScript from "../assets/icons/javascript.png";
import ReactJs from "../assets/icons/react-js.png";
import Express from "../assets/icons/express-js.png";
import Node from "../assets/icons/node-js.png";
import MongoDB from "../assets/icons/mongo-db.png";
import MySql from "../assets/icons/mysql.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Tailwind CSS", image: Tailwind },
    { name: "BootStrap", image: BootStrap },
    { name: "JQuery", image: JQuery },
    { name: "JavaScript", image: JavaScript },
    { name: "React.Js", image: ReactJs },
    { name: "Express.Js", image: Express },
    { name: "Node.Js", image: Node },
    { name: "MongoDB", image: MongoDB },
    { name: "MySql", image: MySql },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
      },
    }),
  };

  return (
    <section className="sm:p-10 p-5 mt-10" id="skills">
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        Skills
      </h1>

      <div className="flex items-center justify-center text-center pt-10 gap-6 flex-wrap">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img src={skill.image} alt={skill.name} className="sm:w-20 w-14" />
            <h3 className="font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
