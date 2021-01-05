import React from 'react'

export default function sidebar() {
    return (
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
    )
}
