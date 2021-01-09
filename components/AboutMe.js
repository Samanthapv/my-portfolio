import React, { useState } from "react";
import Modal from './Modal'



export default function AboutMe() {

  const [isOpen, setIsOpen] = useState(false)

  let handleOpenModal = () => {

    !isOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="h-screen text-gray-800 bg-white">
      <svg
        className="-mb-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#bfb1d5"
          fill-opacity="1"
          d="M0,128L26.7,154.7C53.3,181,107,235,160,240C213.3,245,267,203,320,165.3C373.3,128,427,96,480,112C533.3,128,587,192,640,213.3C693.3,235,747,213,800,181.3C853.3,149,907,107,960,106.7C1013.3,107,1067,149,1120,181.3C1173.3,213,1227,235,1280,218.7C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>

      <Modal 
          isOpen={isOpen}
          onRequestClose={handleOpenModal}
        />

      <div className="flex flex-col justify-center ">
        <div className="flex flex-row justify-center">
          <p className="fontmain text-6xl text-center">
            <span className="text-yellow-lightYellow -mt-10 mb-10">*</span>about me
          </p>
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
        </div>

        <div className="flex justify-center font4 ">
          <p className="text-justify text-lg w-9/12 ">
            After 7 years working in the travel and customer service industries
            I decided to follow my passion and turn my career towards
            technology. I enjoy building functional and aesthetic products and 
            consider myself a creative and resorceful person who really enjoys
             creating, working in a team and solving problems. I strive to make the web a beautiful place🖤. <br />
            I have experience building full stack apps both on my
            own and in collaborative remote team environments, and my previous
            job experience has helped me to develop great soft skills such as
            teamwork, adaptability or good communication skills. <br />
           
          </p>
        </div>

        <div className="flex flex-col justify-center"></div>

        <div className="flex flex-row justify-center gap-x-3 mt-6">
          <div>
            <h1 className="fontmain text-3xl text-center fontmain mb-5">
              technical skills
            </h1>

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
                <li>next.js</li>
                <li>mocha / chai</li>
                <li>tailwindcss</li>
                <li>sequelize</li>
              </ul>
            </div>
          </div>

          <div className="vl2"></div>

          <div className="font4 text-center"> 
            <h1 className="fontmain text-3xl text-center ">education</h1>
            <h3><span className="font-black text-2xl text-green-lightGreen">*</span> <span onClick={handleOpenModal} className="italic underline text-lg  hover:text-green-lightGreen cursor-pointer">codeop</span></h3>
            <h5>full stack development bootcamp</h5>
            <p>Barcelona, 09/2020 - 11/2020 (550 hours)</p>

            <h3><span className="font-black text-2xl text-green-lightGreen">*</span> <span className="italic text-lg">university of greenwich</span></h3>
            <h5>erasmus programme (2011 - 2012)</h5>
 
            <h3><span className="font-black text-2xl text-green-lightGreen">*</span> <span className="italic text-lg">universidad de málaga, class of 2013</span></h3>
            <h5>BA in translation and interpreting (english)</h5>
        
          </div>

          <div className="vl2"></div>

          <div className="mb-10">
            <h1 className="fontmain text-3xl text-center mb-4">recent work experience</h1>

            <ul className="font4 text-lg text-center">
              <li><span className="font-black text-2xl text-green-lightGreen">*</span> <span className="italic">senior guest specialist</span> (booking.com)</li>
              <li className="mb-2">barcelona, spain (2018 - 2020)</li>
              <li><span className="font-black text-2xl text-green-lightGreen">*</span> <span className="italic">guest specialist </span> (booking.com) </li>
              <li className="mb-2"> barcelona, spain (2016 - 2018)</li>
              <li><span className="font-black text-2xl text-green-lightGreen">*</span> <span className="italic">onstar advisor </span> (vauxhall motors) </li> 
              <li>luton, uk (2015 - 2016) </li>
            </ul>
       
          </div>
       
      </div>

      <img className="mt-3" src="/yellowwave.png" />

        </div>


      
    </div>
  );
}
