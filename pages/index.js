import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Home() {
  let [message, setMessage] = useState("");

  useEffect(() => {
    changeFont();
  }, [])

  let changeMessage = () => {

    let messages = ["dog", "cat", "giraffe", "bird"]

    //nothing in the beggining, set state to be the first word, appearing letter by letter
    // when word is complete take letters from the tail of the word one by one
    //when there's nothing jump to next word, show it 

    setInterval(function(){

      for (let i= 0; i < messages.length; i++) {
        let currentWord = messages[i]

        
      }


      setMessage();  
   }, 3000);
  }

  return (
   
   <div className="">

<div className="flex h-screen justify-center items-center">
  <div className="flex flex-col">
     <p className="fontmain "> hi! I am <span>samantha!</span> a full-stack developer and a <span>{message}</span> based in Spain.
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