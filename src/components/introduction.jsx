import React from "react";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <section className="sm:p-10 p-5" id="home">
      <div className="">
        <h1 className="sm:text-5xl text-4xl font-extrabold">Ahmad Raza</h1>
        <h4 className="text-base font-medium">
          A Passionate Software Developer.
        </h4>
      </div>
      <div className="flex gap-5 mt-8">
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
      </div>
    </section>
  );
};

export default Introduction;
