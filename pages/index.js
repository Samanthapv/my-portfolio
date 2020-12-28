import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Typical from "react-typical";

export default function Home() {
  let [message, setMessage] = useState("");
  let [typingState, setTypingState] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="fixed flex mt-12 flex-col justify-start items-center text-4xl m-auto text-gray-800">
        <div className="vl"></div>
        <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-indigo-200 hover:text-gray-800">
          <a href="http://linkedin.com/in/samantha-pinos/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-yellow-200 hover:text-gray-800">
          <a href="http://github.com/Samanthapv">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className=" text-white bg-gray-800 rounded-full px-3 py-2 hover:bg-green-200 hover:text-gray-800">
          <a href="mailto:spinosv@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="vl"></div>
      </div>

      <div className="flex justify-center items-center bg-hero-bg bg-no-repeat bg-cover h-screen px-1">
        <div>
          <p className="fontmain extra-loose m-auto text-7xl text-center specialunderline bg-highlightsize bg-highlightposition">
            hi I am <span className="wavy">samantha</span>,a <br />{" "}
            <span className=" font-bold">full-stack developer</span> <br /> and
            a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "language learner",
                1000,
                "traveller",
                1000,
                "knitter",
                1000,
                "music lover",
                1000,
              ]}
            />{" "}
            <br /> based in Spain.
          </p>
        </div>
      </div>

      <div className="h-screen w-screen bg-purple-lilac">
        <h1 className="fontmain wavy2 pt-10 text-center">{" "} projects </h1>

        <div className="flex flex-col justify-around items-center text-5xl mt-16 mb-10">
          <div className="flex flex-row justify-center mb-12 w-200">
            <div className="mr-12 border-dotted border-4 border-light-blue-500 w-80 h-72 px-5 py-5">
              <h3 className="text-center mt-3 font6 text-4xl ">shareIt app</h3>
              <p className="text-xl text-center px-2 py-2">
                {" "}
                Built collaboratively and remotely, a marketplace for lending and borrowing products. <br/>
              <a className="text-white hover:underline" href="https://midori-shop.herokuapp.com/">see it live</a> | 
              <Link  href="https://midori-shop.herokuapp.com/"> watch a demo</Link>

              </p>
            </div>
            <div>
              <img src="https://picsum.photos/300" alt="shareit" />
            </div>
          </div>

          <div className="flex flex-row justify-center mr-3">
            <div className="mr-12">
              <img src="https://picsum.photos/300" alt="midori" />
            </div>
            <div className="mr-12 border-dotted border-4 border-light-blue-500 w-80 h-72 mb-10 px-5 py-5">
              <h3 className="text-center px-2 py-2 font6 text-4xl ">midori</h3>
              <p className="text-xl text-center">
              Online clothing store with Stripe payment integration. <br/>
              <a className="text-white hover:underline" href="https://midori-shop.herokuapp.com/">See it live</a> <br/>
              <Link href="https://midori-shop.herokuapp.com/" className="text-white hover:underline">Watch a demo video</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bfb1d5"
          fill-opacity="1"
          d="M0,128L26.7,154.7C53.3,181,107,235,160,240C213.3,245,267,203,320,165.3C373.3,128,427,96,480,112C533.3,128,587,192,640,213.3C693.3,235,747,213,800,181.3C853.3,149,907,107,960,106.7C1013.3,107,1067,149,1120,181.3C1173.3,213,1227,235,1280,218.7C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
