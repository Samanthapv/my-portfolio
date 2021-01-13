import React, { useState, useEffect} from "react";
import TypeWriter from './TypeWriter'


export default function Introduction(props) {


    return (
      <div className="bg-hero-bg bg-no-repeat bg-cover w-screen px-1">
        <p className="text-center xl:text-5xl sm:text-indigo-500 md:text-red-400 lg:text-yellow-300 xl:text-green-400">ughh</p>
        <div className="flex justify-center items-center h-screen ">
        <div>
        <TypeWriter /> 
        </div>
      </div>
      </div>
    )
}
