import React, { useState } from "react";
import Modal from './Modal'

let description = "After 7 years working in the travel and customer service industries I decided to follow my passion and turn my career towards technology. I enjoy building functional and aesthetic products and consider myself a creative and resorceful person who really enjoys creating, working in a team and solving problems. I strive to make the web a beautiful place🖤. I have experience building full stack apps both on my own and in collaborative remote team environments, and my previous job experience has helped me to develop great soft skills such as teamwork, adaptability or good communication skills. ";




export default function AboutMe() {

  const [isOpen, setIsOpen] = useState(false)

  let handleOpenModal = () => {

    !isOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="h-md lg-h-lg md:h-lg w-screen bg-yellow-extralight text-gray-800 pt-4">

<svg className="-mt-5 -mb-24 xl:-mt-10 xl:-mb-24 lg:-mt-10 lg:-mb-24 md:-mt-10 md:-mb-24 sm:-mt-10 sm:-mb-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfb1d5" fill-opacity="1" d="M0,32L40,64C80,96,160,160,240,170.7C320,181,400,139,480,106.7C560,75,640,53,720,69.3C800,85,880,139,960,138.7C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <Modal 
          isOpen={isOpen}
          onRequestClose={handleOpenModal}
        />

      <div className="flex flex-col justify-center">
        <div className="flex flex-row text-center justify-center mt-20 sm:mt-20 xl:mt-10">
          <p className="fontmain wavy  text-5xl sm:text-4xl xl:text-6xl lg:text-5xl text-center mb-5 text-gray-800 xl:mb-10">
          
            about me
         
          </p>
         
        </div>

        <div className="flex justify-center font4 ">
          <p className="text-justify text-sm sm:text-sm xl:text-lg lg:text-lg w-9/12 lg:mb-10 xl:mb-24">
          {description} <br />
           
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center gap-x-3 mt-6 xl:-mt-10">
          <div>
            <h1 className="fontmain text-2xl sm:text-2xl xl:text-3xl lg:text-2xl text-center fontmain mb-3">
            technical skills </h1>

            <div className="flex flex-row justify-center text-center ">
              <ul className="text-xl sm:text-sm xl:text-2xl lg:text-xl font6">
                <li> javascript </li>
                <li>react.js</li>
                <li>node.js</li>
                <li>express</li>
                <li>mysql</li>
              </ul>

              <ul className="text-xl sm:text-sm xl:text-2xl lg:text-xl font6 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 mb-7">
              <li>git</li>
                <li>next.js</li>
                <li>mocha / chai</li>
                <li>tailwindcss</li>
                <li>sequelize</li>
              </ul>
            </div>
          </div>

          <div className="h-3/4 font4 text-center  sm:text-sm sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 mb-7 sm:border-l-4 sm:border-dashed sm:border-opacity-90 sm:border-gray-700 sm:pl-2 md:border-l-4 md:border-dashed md:border-opacity-90 md:border-gray-700 md:pl-2 lg:border-l-4 lg:border-dashed
 lg:border-opacity-90 lg:border-gray-700 lg:pl-2 xl:border-l-4 xl:border-dashed xl:border-opacity-90 xl:border-gray-700 xl:pl-2"> 
            <h1 className="fontmain  text-2xl sm:text-2xl xl:text-3xl lg:text-2xl text-center "> education</h1>
            <h3><span className="font-black text-sm sm:text-sm xl:text-2xl lg:text-2xl text-purple-lilac">*</span> <span onClick={handleOpenModal} className="italic underline xl:text-lg  hover:text-green-lightGreen cursor-pointer sm:text-base">codeop</span></h3>
            <h5 className="text-sm xl:text-base">full stack development bootcamp</h5>
            <p className="text-sm xl:text-base">Barcelona, 09/2020 - 11/2020 (550 hours)</p>

            <h3><span className="font-black text-sm  sm:text-sm xl:text-2xl lg:text-2xl text-purple-lilac">*</span> <span className="italic text-base xl:text-lg md:text-lg sm:text-base">university of greenwich</span></h3>
            <h5 className="text-sm xl:text-base">erasmus programme (2011 - 2012)</h5>
 
            <h3><span className="font-black  sm:text-sm xl:text-2xl lg:text-2xl text-purple-lilac">*</span> <span className="italic xl:text-lg text-base md:text-lg sm:text-base">universidad de málaga, class of 2013</span></h3>
            <h5 className="text-sm xl:text-base">BA in translation and interpreting (english)</h5>
        
          </div>

          <div className="xl:h-56 lg:40 xl:pb-20 sm:text-sm sm:border-l-4 sm:border-dashed sm:border-opacity-90 sm:border-gray-700 sm:pl-2 md:border-l-4 md:border-dashed md:border-opacity-90 md:border-gray-700 md:pl-2 lg:border-l-4 lg:border-dashed
 lg:border-opacity-90 lg:border-gray-700 lg:pl-2 xl:border-l-4 xl:border-dashed xl:border-opacity-90 xl:border-gray-700 xl:pl-2">
            <h1 className="fontmain text-2xl sm:text-2xl xl:text-3xl lg:text-2xl text-center mb-2"> recent work experience </h1>

            <ul className="font4 text-sm sm:text-sm xl:text-lg lg:text-base text-center">
              <li><span className="font-black sm:text-sm xl:text-2xl lg:text-xl text-purple-lilac">*</span> <span className="italic">senior guest specialist</span> (booking.com)</li>
              <li className="mb-2">barcelona, spain (2018 - 2020)</li>
              <li><span className="font-black sm:text-sm xl:text-2xl lg:text-xl text-purple-lilac">*</span> <span className="italic">guest specialist </span> (booking.com) </li>
              <li className="mb-2"> barcelona, spain (2016 - 2018)</li>
              <li><span className="font-black sm:text-sm xl:text-2xl lg:text-xl text-purple-lilac">*</span> <span className="italic">onstar advisor </span> (vauxhall motors) </li> 
              <li>luton, uk (2015 - 2016) </li>
            </ul>
       
          </div>
       
      </div>

        </div>

    <div className="h-48 w-screen text-white">.</div>
      
    </div>
  );
}