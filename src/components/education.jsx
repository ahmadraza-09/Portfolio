import React from "react";
import JAC from "../assets/icons/jac logo.png";
import CCSU from "../assets/icons/ccsu logo.png";
import AMITY from "../assets/icons/amity.png";
import UNCODEMY from "../assets/icons/uncodemy.png";

const Education = () => {
  return (
    <section className="px-10 mt-10">
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        Education
      </h1>

      <div className="pt-4 flex flex-col gap-8">
        <div className="flex gap-2">
          <div>
            <img src={JAC} alt="" className="w-14 h-14" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">10th — Secondary School</h2>
            <span>2018 — 2019</span>
            <span>School — +2 RK High School, Haidar Nagar</span>
            <span>Marks — 81.20%</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src={JAC} alt="" className="w-14 h-14" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">12th — Secondary School</h2>
            <span>2019 — 2021</span>
            <span>School — +2 RK High School, Haidar Nagar</span>
            <span>Marks — 71%</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src={CCSU} alt="" className="w-14 h-14" />
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
        </div>
        <div className="flex gap-2">
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
        </div>
        <div className="flex gap-2">
          <div>
            <img src={AMITY} alt="" className="w-14 h-14" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">
              MCA — Amity University Online
            </h2>
            <span>2025 — 2027</span>
            <span>University — Amity University Online, Noida</span>
            <span>Present — Persuing </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
