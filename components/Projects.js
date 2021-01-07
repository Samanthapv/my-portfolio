import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-sm w-screen bg-purple-lilac">
      <h1 className="fontmain wavy2 text-center pt-16"> projects </h1>

      <div className="flex flex-col items-center text-5xl mt-16 mb-5 ">
        <div className="flex flex-row mb-1 w-200  items-center ml-72">
          <div className="text-center">
            <p className="transform -mr-20 rotate-90 text-xl">
              full-stack app, marketplace <br />{" "}
              <a
                className="text-white wavy2 hover:underline mr-2 "
                href="https://shareitapp.herokuapp.com/"
                target="_blank"
              >
                see it live
              </a>
            </p>{" "}
          </div>

          <Link href="/shareit">
          <div className="cursor-pointer">
            
              <img
                src="/shareitpic.png"
                alt="shareit"
                className="z-30"
              />
           
            <img
              src="/gif1.gif"
              alt="shareit2"
              className="z-10 transform rotate-12 h-80 w-100 -mt-72 pl-64"
            />
          </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center mr-80 -mt-20 items-center h-screen">
          <div className="mr-12">
            <Link href="/midori">
              <img
                className="cursor-pointer"
                src="/midoripic.png"
                alt="midori"
              />
            </Link>
            <img
              src="/gif2.gif"
              alt="midori2"
              className="z-0 transform -rotate-12 h-80 w-100 -mt-72"
            />
          </div>

          <div className="text-center">
            <p className="transform -ml-28 rotate-90 text-xl">
              full-stack app, online shop <br />{" "}
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