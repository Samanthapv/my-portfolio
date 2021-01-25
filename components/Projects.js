import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export default function Projects(props) {


  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="h-lg xl:pr-56 xl:h-sm md:h-sm sm:h-lg w-screen bg-hero-bg4 bg-no-repeat  bg-purple-lilac">
      <div className="flex flex-row justify-center w-screen">
      <h1 className="fontmain wavy2 pt-20 text-gray-800 2xl:text-7xl"> projects </h1>
      </div>
     
      <div className="flex xl:pl-60 flex-col items-center text-5xl mt-16 2xl:mt-8 mb-5 ">

        <div className="flex flex-row mb-1 w-200 items-center ml-72" ref={ref}>
          <div className="text-center"  >
            <p className="transform -ml-96 mt-40 2xl:text-2xl  xl:mr-36 lg:-ml-96 xl:-ml-32 xl:mb-36 md:-mr-18 md:mr-18 xl:text-xl lg:text-xl  rotate-90 text-base font4 font-bold">
            full-stack app, <br /> marketplace  <br />
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://shareitapp.herokuapp.com/"
                target="_blank"
              >
               see it live
              </a>
            </p>{" "}
          </div>

          <Link href={`/shareit`}>
          <div className="cursor-pointer -ml-36">
            
          <div ref={ref} className="md:mr-20 ">
               <motion.img
               animate={{
                y: inView ? 100 : 0,
              }} 
              src="/shareitpic.png"
                alt="shareit"
                className={` z-30 w-64 h-64 xl:w-96 xl:h-96 lg:h-96 lg:w-96 md:w-96 md:h-96 lg:ml-10  xl:mb-48 lg:mb-30 ${inView && 'xl:shadow-2xl'}`} />
              
            </div>
          </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center mr-2 ml-32  items-center h-screen" ref={ref}>
          <div className="mr-12 cursor-pointer">
            <Link href={`/midori`}>
           <motion.img
               animate={{
                y: inView ? -100 : 0,
                
              }}
              src="/midoripic.png"
                alt="midori"
                className={`-ml-32 lg:h-96 lg:w-96 xl:-mt-36 xl:text-xl  z-30 w-auto h-auto xl:mr-64 xl:w-96 xl:h-96 xl:mb-56 sm:mb-30 lg:mr-60 ${inView && 'xl:shadow-2xl md:shadow-2xl lg:shadow-2xl'}`} />
            </Link>
      
          </div>

          <div className="text-center"> 
        <p className="transform -ml-60 -mt-36 xl:-mt-72 lg:-mt-24 lg:-ml-96 xl:-ml-96 xl:mb-36 md:-mr-18 md:mr-18 rotate-90 xl:text-xl 2xl:text-2xl lg:text-xl text-base font4 font-bold">
            full-stack app, <br /> online shop  <br />
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://midori-shop.herokuapp.com/"
                target="_blank"
              >
               see it live
              </a>
            </p>{" "}
          </div>
         
        </div>

      </div>
    </div>
  );
}
