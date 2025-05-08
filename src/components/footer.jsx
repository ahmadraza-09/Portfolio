import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-0">
      <div className="flex flex-row items-start justify-between p-5">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Menu</h3>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">What I Do</h3>
          <ul className="flex flex-col gap-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>API Integration</li>
            <li>Google SEO</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Social Media</h3>
        </div>
      </div>
      <div className="flex justify-between bg-slate-200 px-5 py-2">
        <span>Copyright © 2024 - 2025. Ahmad Raza.</span>
        <span>
          <span>Data Privacy | Privacy Policy | Terms of service</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
