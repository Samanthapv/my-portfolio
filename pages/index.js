import Link from "next/link";
import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import SideBar from "../components/Sidebar";


export default function Home() {

  useEffect(() => {
    
  }, [])

  return (
    <div>

      {/* sidebar */}

   <SideBar/>

    {/* first screen*/}

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
                "knitting pro",
                1000,
                "music lover",
                1000,
                "dog person",
                1000,
              ]}
            />{" "}
            <br /> based in Spain.
          </p>
        </div>
      </div>

      {/* second screen*/}
  
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
     
      {/* third screen*/}

     <div className="h-screen text-gray-800 bg-white">

    <div className="flex flex-col justify-center ">
     <div className="flex flex-row justify-center">
     <p className="fontmain text-6xl mt-72 text-center"><span className="text-yellow-lightYellow mb-10">*</span>about me</p>
     <img src="dashed-line.png" className="h-20 w-auto mt-72" alt="line" />
     <img src="dashed-line.png" className="h-20 w-auto mt-72" alt="line" />
    </div>
    

    <div className="flex justify-center">
    <p className="text-justify text-lg w-8/12 mb-10">
      After 7 years working in the travel and customer service industries I decided to follow my passion and turn my career towards technology. I have experience building full stack apps both on my own and in collaborative remote team environments, and my previous job experience has helped me to develop great soft skills such as  teamwork, adaptability or good communication skills.
    </p> 
    </div>


    <div className="flex flex-col justify-center"></div>

    <div className="flex flex-row justify-center gap-x-3 mt-6">

    <div>
    <h1 className="fontmain text-4xl text-center fontmain mb-5">technical skills</h1>

    <div className="flex flex-row justify-center text-center">

    <ul className="text-2xl font6">

  <li> javascript </li>
  <li>react.js</li>
  <li>node.js</li>
  <li>express</li>
  <li>mysql</li>

    </ul>

    <ul className="text-2xl font6">

  <li>git</li>
  <li>mocha</li>
  <li>chai</li>
  <li>tailwindcss</li>
  <li>sequelize</li>

    </ul>

    </div>

    </div>

    <div className="vl"></div>

    <div>
    <h1 className="fontmain text-4xl text-center ">education</h1>
    <h3 className="mt-5 text-xl">codeop</h3>
    <h5>full stack development bootcamp</h5>
    <p>Barcelona, 09/2020 - 11/2020 (550 hours)</p>

    <h3>university of Greenwich</h3>
    <h5>erasmus programme</h5>
    <p>London, 2011 - 2012 </p>

    <h3>universidad de Málaga</h3>
    <h5>BA in translation and interpreting (English)</h5>
    <p>Málaga, class of 2013</p>

    </div>

    <div className="vl"></div>

    <div>
    <h1 className="fontmain text-4xl text-center ">work experience</h1>
     
     <ul>
     <li>senior guest specialist - booking.com (2018 - 2020)</li>
     <li>guest specialist - booking.com (2016 - 2018)</li>
     <li>onstar advisor - general motors (2015 - 2016) </li>
     </ul>
     </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0e0a2" fill-opacity="1" d="M0,192L26.7,202.7C53.3,213,107,235,160,229.3C213.3,224,267,192,320,165.3C373.3,139,427,117,480,122.7C533.3,128,587,160,640,165.3C693.3,171,747,149,800,128C853.3,107,907,85,960,106.7C1013.3,128,1067,192,1120,197.3C1173.3,203,1227,149,1280,133.3C1333.3,117,1387,139,1413,149.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>

    </div>

  
    

    </div>
 
{/* fourth screen */}

<div className="h-screen bg-yellow-lightYellow mt-64">

</div>

    </div>
  );
}
