import React from "react";
import GvCloud from "../assets/icons/gvcloud.png";
import RCHR from "../assets/icons/RCHR.webp";
import { motion } from "framer-motion";

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="sm:p-10 p-5 mt-10" id="experience">
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        Experience
      </h1>

      <div className="pt-4 flex flex-col gap-8">
        <motion.div
          className="flex gap-2"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <img src={GvCloud} alt="" className="h-8" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Frontend Developer Intern</h2>
            <span>Jan-2024 — July-2024</span>
            <span>Company — GvCloud Secure Pvt. Ltd.</span>
            <span>
              Resposbility — Develope new functionality using React.Js and
              maintain code.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-2"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <img src={RCHR} alt="" className="h-8" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Full Stack Developer</h2>
            <span>Sep-2024 — Feb-2025</span>
            <span>Company — Royal Collection Hotels & Resorts Pvt. Ltd.</span>
            <span>
              Resposbility — Maintain previous websites and create new websites
              on need, add new features on company website to help travellers
              find best hotels. Also working on SEO & Performance Optimization
              to rank across India.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
