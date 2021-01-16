import React from "react";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";

export default function midori() {
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
    "Stripe API",
  ];

  return (
   <div className="h-screen">
      
      <SideBar />


         <head>
        <title>sam pinos</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="header text-center flex flex-row  justify-center mt-20">
        <h1 className="title animate-this wavy5 mt-5 fontmain lg:text-6xl lg:ml-20 sm:text-5xl">
          midori
        </h1>

        <p className="overflowy text-justify font4 h-32 w-6/12 sm:text-sm md:text-base xl:w-5/12 lg:w-5/12 text-gray-800">
          Midori is a full-stack online shop built individually as an MVP in one
          week. It has Stripe integration for the payments, user authentication
          with JWT and Bcrypt and users can see their purchase history on their
          account page. Users can search and filter the products by color or
          category. <br />
          <br /> The biggest challenge while building this app was possibly
          working with the url queries so the selected filters are shown in the
          url and therefore users can refresh the page or send it to someone
          else without losing their selection. Besides this, the filters also
          took some thinking. <br />
          <br /> The user authentication and account page were built outside of
          the original week, when I went back to it to improve it and keep
          practising my skills.
        </p>
      </div>
      <div classname="flex flex-row  ">
        <div className="flex xl:flex-row justify-center py-2 ">
          <iframe
            className="border-8 md:mx-3 xl:ml-60 lg:ml-56 rounded border-green-lightGreen"
            src="https://player.vimeo.com/video/500615809"
            width="940"
            height="620"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col text-center items-center justify-center xl:ml-5 md:mr-10 
          "
          >
            {techUsed.map((tech) => (
              <motion.p variants={item}>
                <span className="bg-gray-700 border rounded font4 px-2 my-2 text-white text-center">
                  {tech}
                </span>
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
