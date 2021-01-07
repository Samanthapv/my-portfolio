import React from "react";

export default function AboutMe() {
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

      <div className="flex flex-col justify-center ">
        <div className="flex flex-row justify-center">
          <p className="fontmain text-6xl text-center">
            <span className="text-yellow-lightYellow -mt-10 mb-10">*</span>about me
          </p>
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
          <img src="dashed-line.png" className="h-20 w-auto" alt="line" />
        </div>

        <div className="flex justify-center">
          <p className="text-justify text-lg w-8/12 mb-5">
            After 7 years working in the travel and customer service industries
            I decided to follow my passion and turn my career towards
            technology. I have experience building full stack apps both on my
            own and in collaborative remote team environments, and my previous
            job experience has helped me to develop great soft skills such as
            teamwork, adaptability or good communication skills.
          </p>
        </div>

        <div className="flex flex-col justify-center"></div>

        <div className="flex flex-row justify-center gap-x-3 mt-6">
          <div>
            <h1 className="fontmain text-4xl text-center fontmain mb-5">
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

          <div className="mb-10">
            <h1 className="fontmain text-4xl text-center ">work experience</h1>

            <ul>
              <li>senior guest specialist - booking.com (2018 - 2020)</li>
              <li>guest specialist - booking.com (2016 - 2018)</li>
              <li>onstar advisor - general motors (2015 - 2016) </li>
            </ul>
          </div>
        </div>

        <svg className="-mt-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0e0a2"
            fill-opacity="1"
            d="M0,192L26.7,202.7C53.3,213,107,235,160,229.3C213.3,224,267,192,320,165.3C373.3,139,427,117,480,122.7C533.3,128,587,160,640,165.3C693.3,171,747,149,800,128C853.3,107,907,85,960,106.7C1013.3,128,1067,192,1120,197.3C1173.3,203,1227,149,1280,133.3C1333.3,117,1387,139,1413,149.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
