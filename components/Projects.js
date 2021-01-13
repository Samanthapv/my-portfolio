import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export default function Projects(props) {


  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="xl:h-sm md:h-screen w-screen bg-hero-bg4 bg-no-repeat bg-purple-lilac">
      <h1 className="fontmain wavy2 text-center pt-20"> projects </h1>

     
      <div className="flex flex-col items-center text-5xl mt-16 mb-5 ">

        <div className="flex flex-row mb-1 w-200  items-center ml-72" ref={ref}>
          <div className="text-center"  >
            <p className={`transform xl:-m-20 md:-mr-8 md:mr-18 rotate-90 text-xl font4 font-bold ${inView && "md:mt-48"}`}>
            full-stack app, marketplace  <br />
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://shareitapp.herokuapp.com/"
                target="_blank"
              >
               see it live
              </a>
            </p>{" "}
          </div>

          <Link href={`/shareit?${props.language}`}>
          <div className="cursor-pointer">
            
          <div ref={ref} className="md:mr-20">
               <motion.img
               animate={{
                y: inView ? 100 : 0,
              }} 
              src="/shareitpic.png"
                alt="shareit"
                className="z-30 xl:mb-48 xl:w-11/12" />
              
            </div>
          </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center mr-80 ml-20 -mt-20 items-center h-screen" ref={ref}>
          <div className="mr-12 cursor-pointer">
            <Link href={`/midori?${props.language}`}>
           <motion.img
               animate={{
                y: inView ? -100 : 0,
                
              }}
              src="/midoripic.png"
                alt="midori"
                className={`z-30 xl:mb-56 xl:w-11/12 ${inView && 'xl:shadow-2xl'}`} />
            </Link>
      
          </div>

          <div className="text-center"> 
              <p className={`transform -mr-64 md:-ml-60 md:mb-60 xl:mb-72 md:mr-18 rotate-90 text-xl font4 font-bold ${inView && "md:-mt-2"}`}>
            full-stack app,  marketplace  <br />
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://shareitapp.herokuapp.com/"
                target="_blank"
              >
               see it live
              </a>
            </p>{" "}
          </div>
          {inView && <img src="/sparkles.gif" alt="sparkles" className="xl:w-3/12  md:hidden"/>}
        </div>

      </div>
    </div>
  );
}
