import React, { useState, useEffect} from "react";
import TypeWriter from './TypeWriter'


export default function Introduction(props) {


    return (
      <div className="bg-hero-bg bg-no-repeat bg-cover w-screen px-1">
        
        <div className="flex justify-center items-center h-screen ">
        <div>
        <TypeWriter /> 
        </div>
      </div>
      </div>
    )
}
