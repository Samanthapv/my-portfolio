import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SideBar from "../components/Sidebar";

const list = { hidden: { opacity: 0 } };
const item = { hidden: { x: -10, opacity: 0 } };



export default function About() {

const [isHovered, setHovered] = useState("");

  return (
    <div className="h-screen">
      <SideBar />

      <div className="header text-center flex flex-row justify-center my-5">
        <h1 className="title animate-this wavy3 fontmain">shareIt</h1>

        <h1 className="overflow-y-auto auto h-24 w-6/12">
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
        </h1>
      </div>
      <div classname="flex flex-row ">
        <div className="flex justify-center py-5 ">
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

          <motion.ul>
          
            <motion.li initial={false} animate={{ x: isHovered ? 30 : 0}} className="triangle-isosceles left" className="bg-gray-700">jejejeje</motion.li>
            <motion.li initial={false} animate={{ x: isHovered ? 70 : 0}}>jejejeje</motion.li>
            <motion.li initial={false} animate={{ x: isHovered ? 100 : 0}}>jejejeje</motion.li>
          </motion.ul>
        </div>

        <div class="animate-this button">
          <Link href="/">
            <a>go back to home</a>
          </Link>
          <a href="index.html"></a>
        </div>
      </div>
    </div>
  );
}
