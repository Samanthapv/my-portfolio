import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Home() {
  let [number, setNumber] = useState("");

  useEffect(() => {
    changeFont();
  }, [])

  let changeFont = () => {
    setInterval(function(){
      setNumber(Math.floor(Math.random() * 6) + 1);  
   }, 3000);
  }

  return (
   
   <div className="">

<div className="flex h-screen justify-center items-center">
  <div className="flex flex-col">
     <p className="fontmain "> hi! I am <span>samantha!</span> a </p>
     <p className="fontmain"> <span className={`font${number} inline-block h-10 w-25`}> full-stack </span> <span className="mt-1"> developer </span>
    </p>
    <p className="fontmain"><span className="mt-1">based in Spain.</span>
    </p>
    </div>
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