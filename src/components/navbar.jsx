import React from "react";
import ThemeButton from "./themebutton";

const Navbar = () => {
  return (
    <nav className="h-50 w-full flex items-center justify-between bg-white dark:bg-gray-900 text-black dark:text-white p-5">
      <div className="text-2xl font-bold mb-4">Logo</div>
      <ul className="flex items-center justify-center gap-4 font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Education</li>
        <li className="cursor-pointer">Experience</li>
        <li className="cursor-pointer">Project</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
