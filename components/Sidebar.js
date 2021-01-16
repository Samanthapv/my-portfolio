import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function sidebar() {
  const routes = ["/midori", "/shareit"];
  const router = useRouter();

  return (
    <div className="fixed z-50">
      <div 
      className={` mt-4 flex flex-row justify-center  xl:justify-center xl:mt-20 gap-1 sm:items-center items-baseline  md:items-center sm:flex-col md:flex-col lg:flex-col xl:flex-col   xl:items-center sm:mt-20 text-xl sm:text-2xl md:mt-30 lg:mt-26 xl:text-4xl md:text-3xl ${
        routes.includes(router.pathname) ? "xl:mt-3 -mr-20 -mt-16 ml-10 sm:ml-4 md:ml-2 xl:ml-3"  : "xl:mt-12 ml-20 sm:ml-4 md:ml-2 xl:ml-3" 
      } text-gray-800`}>
      {routes.includes(router.pathname) && (
        <div className="text-white bg-gray-800 rounded-full px-3 py-2 hover:bg-pink-salmon hover:text-gray-800">
          <Link href="/">
            <a>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
          </Link>
          <a href="index.html"></a>
        </div>
      )}
      <div className="bg-gray-700 h-1 w-24  xl:w-1 xl:h-36 md:w-1 md:h-36 lg:w-1 lg:h-36 sm:w-1 sm:h-36"></div>
      <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-blue-light hover:text-gray-800">
        <a href="http://linkedin.com/in/samantha-pinos/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-yellow-200 hover:text-gray-800">
        <a href="http://github.com/Samanthapv" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className=" text-white bg-gray-800 rounded-full px-3 py-2 hover:bg-blue-600 hover:text-gray-800">
        <a href="mailto:spinosv@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
     <div className="bg-gray-700 h-1 w-24  xl:w-1 xl:h-36 md:w-1 md:h-36 lg:w-1 lg:h-36 sm:w-1 sm:h-36"></div>
     </div>
    </div>
  );
}
