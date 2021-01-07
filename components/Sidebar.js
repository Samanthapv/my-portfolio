import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function sidebar() {
  const routes = ["/midori", "/shareit"];
  const router = useRouter();

  return (
    <div
      className={`fixed flex flex-col justify-start ml-3 items-center text-4xl ${
        routes.includes(router.pathname) ? "mt-3" : "mt-12"
      } text-gray-800`}
    >
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
      <div className="vl"></div>
      <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-indigo-200 hover:text-gray-800">
        <a href="http://linkedin.com/in/samantha-pinos/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div className="text-white mb-4 bg-gray-800 rounded-full px-3 py-2 hover:bg-yellow-200 hover:text-gray-800">
        <a href="http://github.com/Samanthapv" target="_blank">
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
  );
}
