import React from "react";
import { useNavigate } from "react-router-dom";

const MiniProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Calculator",
      path: "/mini-projects/calculator",
      description: "Simple calculator using React",
    },
    // Add more projects here
  ];

  return (
    <section className="sm:p-10 p-5 min-h-screen">
      <h1 className="text-center uppercase font-bold text-3xl dark:text-white text-black mb-10">
        Mini Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-60 p-4 rounded-xl bg-slate-800 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 duration-300 transition-all cursor-pointer"
            onClick={() => navigate(project.path)}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-200 text-sm">{project.description}</p>
            <span className="inline-block mt-4 text-blue-300 hover:underline">
              Preview →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniProjects;
