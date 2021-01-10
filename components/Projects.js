import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export default function Projects(props) {


  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="h-sm w-screen bg-purple-lilac">
      <h1 className="fontmain wavy2 text-center pt-20"> {props.language == 'EN' ? "projects"  : props.language == "ES" ? "proyectos" : "portugués"}  </h1>

     
      <div className="flex flex-col items-center text-5xl mt-16 mb-5 ">

        <div className="flex flex-row mb-1 w-200  items-center ml-72" ref={ref}>
       { inView && <img src="squiggle.gif" alt="squiggle" className="transform rotate-45 " /> }
          <motion.div className="text-center"  animate={{
                x: inView ? 25 : 0,
                
                }}>
            <p className="transform -mr-20 rotate-90 text-xl font4 font-bold">
            {props.language == 'EN' ? "full-stack app, marketplace"  : props.language == "ES" ? "app full-stack, marketplace" : "portugués"}  <br />{" "}
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://shareitapp.herokuapp.com/"
                target="_blank"
              >
               {props.language == 'EN' ? "see it live"  : props.language == "ES" ? "visítala" : "portugués"}
              </a>
            </p>{" "}
          </motion.div>

          <Link href={`/shareit?${props.language}`}>
          <div className="cursor-pointer">
            
          <div ref={ref}>
              <motion.img
               animate={{
                x: inView ? 25 : 0,
              }}
                src="/shareitpic.png"
                alt="shareit"
                className="z-30"
              />
            </div>
          </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center mr-80 ml-20 -mt-20 items-center h-screen" ref={ref}>
          <motion.div className="mr-12" animate={{
                x: inView ? -25 : 0,
                //rotate: inView ? -10 : 0
                }}>
            <Link href={`/midori?${props.language}`}>
              <img
                className="cursor-pointer"
                src="/midoripic.png"
                alt="midori"
              />
            </Link>
      
          </motion.div>

          <motion.div className="text-center"  animate={{
                x: inView ? -25 : 0,
                //rotate: inView ? -5 : 0
                }}>
            <p className="transform -ml-28 rotate-90 text-xl">
            {props.language == 'EN' ? "full-stack app, online shop"  : props.language == "ES" ? "app full-stack, tienda online" : "portugués"} <br />{" "}
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://midori-shop.herokuapp.com/"
                target="_blank"
              >
                 {props.language == 'EN' ? "see it live"  : props.language == "ES" ? "visítala" : "portugués"}
              </a>
            </p>
          </motion.div>
          {inView && <img src="/sparkles.gif" alt="sparkles" className="w-3/12"/>}
        </div>

      </div>
    </div>
  );
}
