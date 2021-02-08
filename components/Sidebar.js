import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function sidebar() {
  const routes = ["/midori", "/shareit"];
  const router = useRouter();

  return (
    <div className="flex flex-row 2xl:h-screen 2xl:fixed justify-center sm:justify-start 2xl:justify-start 2xl:items-center">
    <div className="fixed z-50">
      <div
        className={` mt-4 flex flex-row justify-center 2xl:justify-center  xl:justify-center xl:mt-24 gap-1 sm:items-center items-baseline  md:items-center sm:flex-col md:flex-col lg:flex-col xl:flex-col   xl:items-center sm:mt-20 text-xl sm:text-2xl md:mt-30 lg:mt-26 xl:text-4xl md:text-3xl 2xl:text-7xl `}
      >
        {routes.includes(router.pathname) && (
          <div className="text-white bg-gray-800 rounded-full px-3 py-2 2xl:px-5 2xl:py-4 hover:bg-pink-salmon hover:text-gray-800">
            <Link href="/">
              <a>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </a>
            </Link>
            <a href="index.html"></a>
          </div>
        )}
        <div className="bg-gray-700 h-1 w-24  xl:w-1 xl:h-36 md:w-1 md:h-36 lg:w-1 lg:h-36 sm:w-1 sm:h-36"></div>
        <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 2xl:px-5 2xl:py-4 hover:bg-blue-light hover:text-gray-800">
          <a href="http://linkedin.com/in/samantha-pinos/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 2xl:px-5 2xl:py-4 hover:bg-yellow-200 hover:text-gray-800">
          <a href="http://github.com/Samanthapv" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className=" text-white bg-gray-800 rounded-full px-3 py-2 2xl:px-5 2xl:py-4 hover:bg-blue-600 hover:text-gray-800">
          <a href="mailto:spinosv@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="bg-gray-700 h-1 w-24  xl:w-1 xl:h-36 md:w-1 md:h-36 lg:w-1 lg:h-36 sm:w-1 sm:h-36"></div>
      </div>
    </div>
    </div>
  );
}
