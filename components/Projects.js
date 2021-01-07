import React from 'react';
import Link from "next/link";

export default function Projects() {
    return (
     
        <div className="h-sm w-screen bg-purple-lilac">
        <h1 className="fontmain wavy2 text-center pt-36">{" "} projects </h1>

        <div className="flex flex-col justify-around items-center text-5xl mt-16 mb-10">
          <div className="flex flex-row justify-center mb-12 w-200">
            <div className="mr-12 border-dotted border-4 border-light-blue-500 w-80 h-auto px-5 py-5">
              <h3 className="text-center mt-3 font1 text-5xl mb-2">shareIt app</h3>
              <p className="text-xl text-center px-2 py-2 mb-5">
                {" "}
                App built collaboratively and remotely, a marketplace for lending and borrowing products. <br/>
                <div className="text-white text-center flex flex-row justify-center mt-2 mb-4">
              <a className="text-white wavy2 hover:underline mr-2" href="https://shareitapp.herokuapp.com/" target="_blank">see it live</a> |
              <div className="wavy2 hover:underline ml-2"><Link  href="/shareit"> watch a demo</Link></div>
              </div>
                <span className="bg-gray-800 text-white font4 text-base px-1">React</span>,  <span className="bg-gray-800 text-white font4 text-base px-1"> React Router </span> ,
                 <span className="bg-gray-800 text-white font4 text-base px-1">Node</span> , <span className="bg-gray-800 text-white font4 text-base px-1"> Express </span> , 
                 <span className="bg-gray-800 text-white font4 text-base px-1">Sequelize</span> , <span className="bg-gray-800 text-white font4 text-base px-1">MySQL</span> , 
                 <span className="bg-gray-800 text-white font4 text-base px-1">Tailwind CSS</span> , <span className="bg-gray-800 text-white font4 text-base px-1">Heroku</span> , 
                 <span className="bg-gray-800 text-white font4 text-base px-1">Multer</span>, <span className="bg-gray-800 text-white font4 text-base px-1">Axios </span>, 
                 <span className="bg-gray-800 text-white font4 text-base px-1"> JWT </span>, <span className="bg-gray-800 text-white font4 text-base px-1"> Bcrypt </span> ,
                  <span className="bg-gray-800 text-white font4 text-base px-1"> Pusher </span> , <span className="bg-gray-800 text-white font4 text-base px-1">Google Maps API</span>, 
                  <span className="bg-gray-800 text-white font4 text-base px-1">Firebase</span>
                
              </p>
            </div>
            <div>
              <img src="/shareitpic.png" alt="shareit" className="z-30" />
              <img src="/gif1.gif" alt="shareit2" className= "z-10 transform rotate-12 h-80 w-100 -mt-72 pl-64" />
            </div>
          </div>

          <div className="flex flex-row justify-center mr-3 h-screen">

            <div className="mr-12">
              <img src="/midoripic.png" alt="midori"/>
              <img src="/gif2.gif" alt="midori2" className= "z-0 transform -rotate-12 h-80 w-100 -mt-72" />
            </div>

            <div className="mr-12 border-dotted border-4 border-light-blue-500 w-80 h-96 mb-10 px-5 py-5">
              <h3 className="text-center mt-3 font1 text-5xl mb-2 ">midori</h3>
              <p className="text-xl text-center pb-8">
              Online clothing store with Stripe payment integration. <br/>
              <div className="text-white text-center flex flex-row justify-center mt-2 mb-4">
              <a className="text-white wavy2 hover:underline mr-2" href="https://midori-shop.herokuapp.com/" target="_blank">see it live</a> |
              <div className="wavy2 hover:underline ml-2"><Link  href="/midori"> watch a demo</Link></div>
              </div>

              <span className="bg-gray-800 text-white font4 text-base px-1">React</span>,  <span className="bg-gray-800 text-white font4 text-base px-1"> React Router </span> ,
                 <span className="bg-gray-800 text-white font4 text-base px-1">Node</span> , <span className="bg-gray-800 text-white font4 text-base px-1"> Express </span> , 
                 <span className="bg-gray-800 text-white font4 text-base px-1">MySQL</span> , <span className="bg-gray-800 text-white font4 text-base px-1">Bootstrap</span>, <span className="bg-gray-800 text-white font4 text-base px-1"> JWT </span>, <span className="bg-gray-800 text-white font4 text-base px-1"> Bcrypt </span>, <span className="bg-gray-800 text-white font4 text-base px-1">Stripe API</span>. 


              </p>
            </div>
          </div>
          <svg className="-mt-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bfb1d5"
          fill-opacity="1"
          d="M0,128L26.7,154.7C53.3,181,107,235,160,240C213.3,245,267,203,320,165.3C373.3,128,427,96,480,112C533.3,128,587,192,640,213.3C693.3,235,747,213,800,181.3C853.3,149,907,107,960,106.7C1013.3,107,1067,149,1120,181.3C1173.3,213,1227,235,1280,218.7C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
        </div>
  
      </div>
     
    )
}
