import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Typical from 'react-typical';


export default function Home() {
  
let [message, setMessage] = useState("");
let [typingState, setTypingState] = useState(false);

  useEffect(() => {
  
  }, [])

  return (
   
   <div className="">

  <div className="flex justify-center items-center bg-hero-bg bg-no-repeat bg-cover h-screen">
     <p className="fontmain m-auto text-7xl text-center"> 
     hi I am samantha,  <br /> a <span className="font-bold">full-stack developer</span> <br /> and a  {" "} <Typical
        loop={Infinity}
        wrapper="b"
        steps={['language learner', 1000, 'traveller', 1000, 'knitter', 1000, 'music lover', 1000]}
      /> <br /> based in Spain.

    </p>

   </div>

   <div className="m-72">
      <motion.h1 layoutId="header" className="mb-20 font-custom4 text-7xl">My projects</motion.h1>
      <div className="object-cover mt-50 container flex flex-row justify-around">
        {[{name: "midori", color: "blue"}, {name: "shareit", color: ""}].map((product) => (
          <Link href={product}>
            <a>
              <motion.img
                layoutId={product.name}
                className={`border rounded ${"shadow-sm" + product.color} mr-10 w-1/2`}
                src={product.name + ".png"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
           
            </a>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}