import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let projects = [
  {
    name: "la terraza*",
    description: "website for real restaurant group",
    built: "(nuxt.js & tailwindcss)",
    demo: false,
    live: "https://laterrazamontejaque.com/",
    pic: "/laterrazapic.png",
  },
  {
    name: "*shareIt",
    description: "full-stack app, marketplace",
    built: "(react, node, mysql & tailwindcss)",
    demo: "/shareit",
    live: "https://shareitapp.herokuapp.com/",
    pic: "/shareitpic.png",
  },
  {
    name: "midori*",
    description: "full-stack app, online shop ",
     built: "(react, node, mysql & bootstrap)",
    demo: `/midori`,
    live: "https://midori-shop.herokuapp.com/",
    pic: "midoripic.png",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <div className="h-lg 2xl:h-auto xl:pr-56 xl:h-auto md:h-sm sm:h-lg w-screen bg-hero-bg4 bg-no-repeat  bg-purple-lilac">
      <div className="flex flex-row justify-center w-screen">
        <h1 className="fontmain wavy2 pt-20 text-gray-800 2xl:text-7xl">
          {" "}
          projects{" "}
        </h1>
      </div>

      <div className="flex xl:pl-60 flex-col items-center text-5xl mt-16 2xl:-mt-18 mb-5 ">
        <div className=" flex flex-col " ref={ref}>
          {projects.map((x, index) =>
            index % 2 == 0 ? (
              
              <div class=" flex flex-row mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <a href={x.live}>
                <motion.img
                 animate={{
                    x: inView ? -30 : 0,
                  }}
                  src={x.pic}
                  className={` mt-24 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mb-0 z-30 xl:w-72 xl:h-72 lg:h-64 lg:w-64 md:w-56 md:h-56 sm:w-48 sm:h-48 w-36 h-36 lg:ml-10 lg:mb-30  ${
                    inView && "xl:shadow-2xl"
                  }`}
                /></a>
                <motion.div
                animate={{
                    y: inView ? 100 : 0,
                  }}> 
                  <p className="fontmain lg:text-5xl md:text-3xl text-xl">{x.name}</p>
                  <p className="font4 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg">{x.description}</p>
                   <p className="font4 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-sm -mb-3 text-sm">{x.built}</p>
                  <a className="font4 text-white wavy2 hover:underline mr-2 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg" href={x.live}>see it live</a>
                  {x.demo && <Link href={x.demo}><span className="font4 text-white wavy2 hover:underline mr-2 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg">watch a demo</span></Link>}
                </motion.div>
              </div>
            ) : (
              <div class=" flex flex-row  sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <motion.div animate={{
                    y: inView ? 100 : 0,
                  }} className="text-right -mr-8">
                  <p className="fontmain lg:text-5xl  md:text-3xl text-xl">{x.name}</p>
                  <p className="font4 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-sm text-lg">{x.description}</p>
                  <p className="font4 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-sm -mb-3 text-lg">{x.built}</p>
                  <a className="font4 text-white wavy2 hover:underline mr-2 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-sm text-lg" href={x.live}>see it live</a>
                  {x.demo && <Link href={x.demo}><span className="font4 text-white wavy2 hover:underline mr-2 xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-xl sm:text-sm text-lg">watch a demo</span></Link>}
                </motion.div>
                <a href={x.live}>
                <motion.img
                 animate={{
                    x: inView ? 30 : 0,
                  }}
                  src={x.pic}
                  className={` mt-24 ml-8 xl:ml-10 ml:mt-0 2xl:ml-10 xl:mt-0 2xl:mb-0 z-30 xl:w-72 xl:h-72 lg:h-64 lg:w-64 md:w-56 md:h-56 sm:w-48 sm:h-48 lg:ml-10 lg:mb-30 md:mb-30 w-36 h-36 lg:mt-12 md:mt-12 sm:mt-24 md:ml-10 sm:ml-14 ${
                    inView && "xl:shadow-2xl"
                  }`}
                /></a>
              </div>
            )
          )}

    
        </div>
      </div>
    </div>
  );
}
