import React from "react";

const Introduction = () => {
  return (
    <section className="p-10">
      <div className="">
        <h1 className="text-5xl font-extrabold">Ahmad Raza</h1>
        <h4 className="text-base font-medium">
          A Passionate Software Developer.
        </h4>
      </div>
      <div className="flex gap-5 mt-8">
        <button className="bg-[#183B4E]  text-white px-2 rounded font-medium cursor-pointer">
          Hire
        </button>
        <button className="bg-[#183B4E] text-white px-2 rounded font-medium cursor-pointer">
          Resume
        </button>
      </div>
    </section>
  );
};

export default Introduction;
