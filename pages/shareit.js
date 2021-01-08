import React, { useState } from "react";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";

export default function shareit() {
  const [isHovered, setHovered] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      animate: { x: 50 },
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const techUsed = [
    "React",
    "React Router",
    "Node",
    "Express",
    "Sequelize",
    "MySQL",
    "Tailwind CSS",
    "Heroku",
    "Multer",
    "Axios",
    "JWT",
    "Bcrypt",
    "Pusher",
    "Google Maps API",
    "Firebase",
  ];

  return (
    <div className="h-screen">
      <SideBar />

      <div className="header text-center flex flex-row  justify-center mt-6">
        <h1 className="title animate-this wavy4 mt-5 fontmain">shareIt</h1>

        <p className="overflowy h-32 w-6/12">
        shareIt is a full-stack marketplace app that was built in three weeks, collaboratively and remotely with another developer. 
A marketplace for lending and borrowing products from people nearby, with user 
authentication, integration with Google Maps, PayPal, in app chat and several filter options.
        </p>
      </div>
      <div classname="flex flex-row ">
        <div className="flex justify-center py-2 ">
          <iframe
            className="border-8 rounded border-blue-light"
            width="800"
            height="600"
            src="https://www.loom.com/embed/38a9322267054843adb08ec95c7e5e87"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          ></iframe>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className={`flex flex-col items-center justify-center ml-5 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {techUsed.map((tech) => (
              <motion.li variants={item}>
                <span className="bg-gray-700 border rounded px-2 my-2 text-white text-center">
                  {tech}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
