import React from "react";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Youtube from "../assets/icons/youtube.png";
import LeetCode from "../assets/icons/leetcode.webp";
import GeeksForGeeks from "../assets/icons/GeeksforGeeks.png";

const Footer = () => {
  return (
    <footer className="w-full p-0 dark:bg-gray-900 dark:text-white before:[''] dark:before:bg-white before:block before:w-full *: before:h-1 before:bg-black">
      <div className="flex md:flex-row flex-col gap-10 md:items-start md:justify-between p-5">
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
          <div className="flex gap-2 w-fit items-center">
            <a href="https://www.instagram.com/roneeey_09/" target="_blank">
              <img src={Instagram} alt="" className="w-12 h-12" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/ahmadraza09/" target="_blank">
              <img src={Youtube} alt="" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/ahmadraza09/" target="_blank">
              <img src={LinkedIn} alt="" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center md:justify-between bg-slate-200 px-5 py-2 dark:bg-white dark:text-black">
        <span>Copyright © 2024 - 2025. Ahmad Raza.</span>
        <span>
          <span>Data Privacy | Privacy Policy | Terms of service</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
