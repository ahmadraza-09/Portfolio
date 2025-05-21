import React from "react";
import JAC from "../assets/icons/jac logo.png";
import CCSU from "../assets/icons/ccsu logo.png";
import AMITY from "../assets/icons/amity.png";
import UNCODEMY from "../assets/icons/uncodemy.png";
import { motion } from "framer-motion";

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section className="mt-10 sm:p-10 p-5" id="education">
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        Education
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
            <img src={JAC} alt="" className="sm:w-14 sm:h-14 w-12 h-10" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">10th — Secondary School</h2>
            <span>2018 — 2019</span>
            <span>School — +2 RK High School, Haidar Nagar</span>
            <span>Marks — 81.20%</span>
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
            <img src={JAC} alt="" className="sm:w-14 sm:h-14 w-12 h-10" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">12th — Secondary School</h2>
            <span>2019 — 2021</span>
            <span>School — +2 RK High School, Haidar Nagar</span>
            <span>Marks — 71%</span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-2"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <img src={CCSU} alt="" className="sm:w-14 sm:h-14 w-16 h-10" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">
              BCA — Chaudhary Charan Singh University
            </h2>
            <span>2021 — 2024</span>
            <span>
              College — Harlal Institute Of Management & Technology, Greater
              Noida
            </span>
            <span>Grade — 6.5 CGPA</span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-2"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div>
            <img src={UNCODEMY} alt="" className="w-14 h-14" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">
              Training — MERN Stack Developement
            </h2>
            <span>2023 — 2024</span>
            <span>Institute — Uncodemy, Noida</span>
            <span>
              Skills — HTML, CSS, Tailwind CSS, React.Js, Node.Js, Express.Js,
              MongoDB, MySql.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-2"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div>
            <img src={AMITY} alt="" className="sm:w-14 sm:h-14 w-10 h-10" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">
              MCA — Amity University Online
            </h2>
            <span>2025 — 2027</span>
            <span>University — Amity University Online, Noida</span>
            <span>Present — Persuing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
