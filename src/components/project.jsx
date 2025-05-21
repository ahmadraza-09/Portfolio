import React from "react";
import { motion } from "framer-motion";
import DAB from "../assets/images/DAB.png";
import HotelWale from "../assets/images/hotelwale.png";

const Project = () => {
  return (
    <section className="sm:p-10 p-5 mt-10" id="project">
      <h1 className="uppercase font-bold text-lg after:[''] dark:after:bg-white after:block after:w-full *: after:h-1 after:bg-black">
        Projects
      </h1>

      <div className="md:flex md:items-center md:justify-around mt-10 gap-20 md:flex-row flex-col items-start ">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:w-[50%] w-full"
        >
          <h2 className="font-bold uppercase">HealthCare</h2>
          <a
            href="#"
            className="border-2 border-black relative group overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={DAB} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fi fi-sr-share-square text-white text-3xl"></i>
            </div>
          </a>

          <h3 className="font-semibold">Doctor Apointment Booking System</h3>
          <p>
            A web-based platform that allows patients to easily book,
            reschedule, or cancel doctor appointments online. The system
            includes features like doctor profiles, availability slots, secure
            patient login, and admin controls. Built with React.js, Node.js,
            Express, and MongoDB, it ensures a smooth and efficient experience
            for both patients and healthcare providers.
          </p>
          <div className="flex gap-4 flex-wrap">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Express.Js",
              "Node.Js",
              "MySql",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-slate-200 px-2 rounded py-1 font-medium dark:text-black"
              >
                {tech}
              </span>
            ))}
          </div>
          <button className="dark:bg-white dark:text-black w-fit px-2 py-1 font-semibold rounded">
            <a href="#" target="_blank">
              Live Preview <i className="fi fi-sr-share-square"></i>
            </a>
          </button>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:w-[50%] w-full mt-20 sm:mt-0"
        >
          <h2 className="font-bold uppercase">Hotel Wale</h2>
          <a
            href="https://hotelwale.com/"
            className="border-2 border-black relative group overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HotelWale} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fi fi-sr-share-square text-white text-3xl"></i>
            </div>
          </a>

          <h3 className="font-semibold">
            Hotel & Travel Package Booking Platform
          </h3>
          <p>
            HotelWale.com is a user-friendly web application for seamless hotel
            bookings and travel package reservations. Users can explore hotel
            listings, view detailed amenities, compare prices, and book
            personalized travel packages. Built using React.js, Node.js,
            Express, and MongoDB, it offers real-time availability, secure user
            authentication, and a smooth booking experience for travelers and
            admins.
          </p>
          <div className="flex gap-4 flex-wrap">
            {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.Js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-slate-200 px-2 rounded py-1 font-medium dark:text-black"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <button className="dark:bg-white dark:text-black w-fit px-2 py-1 font-semibold rounded">
            <a href="https://hotelwale.com/" target="_blank">
              Live Preview <i className="fi fi-sr-share-square"></i>
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
