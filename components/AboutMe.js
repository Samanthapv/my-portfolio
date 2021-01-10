import React, { useState } from "react";
import Modal from './Modal'

let EnglishDescription = "After 7 years working in the travel and customer service industries I decided to follow my passion and turn my career towards technology. I enjoy building functional and aesthetic products and consider myself a creative and resorceful person who really enjoys creating, working in a team and solving problems. I strive to make the web a beautiful place🖤. I have experience building full stack apps both on my own and in collaborative remote team environments, and my previous job experience has helped me to develop great soft skills such as teamwork, adaptability or good communication skills. ";
let SpanishDescription = "Después de 7 años trabajando en puestos relacionados con la Atención al Cliente y los viajes he decidido por fin dar el salto y dedicarme a mi auténtica pasión, la tecnología. Me gusta programar apps funcionales y estéticas y me considero una persona creativa y resolutiva a la que le encanta crear, trabajar en equipo y resolver problemas. Tengo experiencia desarrollando apps full stack tanto individualmente como en colaboración con otros desarrolladores de manera remota, y mi anterior experiencia laboral me ha ayudado mucho a mejorar mis soft skills, por ejemplo trabajar en equipo o mis habilidades de comunicación y de adaptación.";
let PortugueseDescription = ".";



export default function AboutMe(props) {

  const [isOpen, setIsOpen] = useState(false)

  let handleOpenModal = () => {

    !isOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="h-screen w-screen bg-yellow-extralight text-gray-800 pt-4">

<svg className="-mt-10 -mb-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfb1d5" fill-opacity="1" d="M0,32L40,64C80,96,160,160,240,170.7C320,181,400,139,480,106.7C560,75,640,53,720,69.3C800,85,880,139,960,138.7C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <Modal 
          isOpen={isOpen}
          onRequestClose={handleOpenModal}
        />

      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <p className="fontmain text-6xl text-center">
            <span className="text-yellow-200 -mt-54 mb-10">*</span>
            {props.language == 'EN' ? "about me" : props.language == "ES" ? "sobre mí" : "portuguese"} 
           
          </p>
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
        </div>

        <div className="flex justify-center font4 ">
          <p className="text-justify text-lg w-9/12 ">
          {props.language == 'EN' ? EnglishDescription : props.language == "ES" ? SpanishDescription : PortugueseDescription} 
            <br />
           
          </p>
        </div>

        <div className="flex flex-col justify-center"></div>

        <div className="flex flex-row justify-center gap-x-3 mt-6">
          <div>
            <h1 className="fontmain text-3xl text-center fontmain mb-5">
            {props.language == 'EN' ? "technical skills" : props.language == "ES" ? "habilidades técnicas" : "portugues"}
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
            <h1 className="fontmain text-3xl text-center ">{props.language == 'EN' ? "education" : props.language == "ES" ? "educación" : "portugues"}</h1>
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
            <h1 className="fontmain text-3xl text-center mb-4">{props.language == 'EN' ? "recent work experience" : props.language == "ES" ? "experiencia reciente" : "portugues"}</h1>

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

        </div>

    <div className="h-48 w-screen text-white">.</div>
      
    </div>
  );
}
