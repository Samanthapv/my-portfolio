import React, { useState } from "react";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";

export default function midori() {
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
    "MySQL",
    "Bootstrap",
    "Heroku",
    "JWT",
    "Bcrypt",
  ];

  return (
    <div className="h-screen">
      <SideBar />

      <div className="header text-center flex flex-row justify-center mt-6">
        <h1 className="title animate-this wavy3 mt-5 fontmain">midori</h1>

        <p className="overflowy h-32 w-6/12">
          Lorem fistrum torpedo torpedo sexuarl qué dise usteer la caidita
          mamaar está la cosa muy malar condemor por la gloria de mi madre
          torpedo. De la pradera al ataquerl hasta luego Lucas torpedo tiene
          musho peligro por la gloria de mi madre benemeritaar. Por la gloria de
          mi madre al ataquerl sexuarl la caidita no puedor papaar papaar no te
          digo trigo por no llamarte Rodrigor hasta luego Lucas. Ese hombree
          tiene musho peligro por la gloria de mi madre se calle ustée te va a
          hasé pupitaa. Hasta luego Lucas pecador ese que llega hasta luego
          Lucas la caidita tiene musho peligro. Por la gloria de mi madre fistro
          ese hombree ese pedazo de por la gloria de mi madre me cago en tus
          muelas papaar papaar sexuarl hasta luego Lucas diodenoo. Diodeno a
          gramenawer me cago en tus muelas me cago en tus muelas amatomaa
          amatomaa qué dise usteer qué dise usteer papaar papaar.
        </p>
      </div>
      <div classname="flex flex-row ">
        <div className="flex justify-center py-2 ">
          <iframe
            className="border-8 rounded border-green-lightGreen"
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
            className={`flex flex-col items-center justify-center ml-5 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {techUsed.map((tech) => (
              <motion.li
                variants={item}
                className="bg-gray-700 border rounded text-white text-center my-1"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </div>
  );
}
