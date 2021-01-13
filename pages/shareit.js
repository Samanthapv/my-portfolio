import React from "react";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";

export default function shareit() {
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

         <head>
        <title>sam pinos</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="header text-center flex flex-row  justify-center mt-6">
        <h1 className="title animate-this wavy4 mt-5 fontmain lg:text-6xl lg:ml-20 sm:text-5xl">
          shareIt
        </h1>

        <p className="overflowy text-justify px-5 h-32 w-6/12 sm:text-sm md:text-base xl:w-5/12 font4 lg:w-5/12 text-gray-800">
          shareIt is a full-stack marketplace app that was built in three weeks,
          collaboratively and remotely along with developer Rosanne Kruithof.
    
          <br /> A marketplace for lending and borrowing products from people
          nearby, it has user authentication, integration with Google Maps,
          PayPal, in app chat, search function and several options to filter the
          products. Products can be requested from their owner, who then is able
          to accept or reject the request, and the borrower can then rate and
          review the product. <br />
          <br /> One of the biggest challenges of this project were the use of
          many new technologies and libraries, such as TailwindCSS, which we
          used for the first time to style the app. We were able to implement
          every single feature we had thought of, and due to this I learnt
          immensely during the short period of time in which the app was built.
          From the different features of the app in which I personally worked,
          the most challenging one was perhaps allowing the user to upload
          pictures, which was done with Multer and Firebase. <br />
          <br />
          Working with another developer and remotely was a very important
          learning experience especially during this time we’re living in, and
          besides the sometimes unavoidable git conflicts (which were very
          helpful to improve our Git skills) the workflow was very smooth, and
          we got the job done with the help of Zoom, Slack and Trello.
        </p>
      </div>
      <div classname="flex flex-row  ">
        <div className="flex xl:flex-row justify-center py-2 ">
          <iframe
            className="border-8 md:mx-3 xl:ml-60 lg:ml-56 rounded border-blue-light"
            width="900"
            height="700"
            src="https://www.loom.com/embed/38a9322267054843adb08ec95c7e5e87"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
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
                <span className="bg-gray-700 font4 border rounded px-2 my-2 text-white text-center">
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
