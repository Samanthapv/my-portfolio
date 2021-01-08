import React from 'react';
import Typical from "react-typical";

export default function Introduction() {
    return (
        <div className="flex justify-center items-center bg-hero-bg bg-no-repeat bg-cover h-screen w-screen px-1">
        <div>
          <p className="fontmain extra-loose m-auto text-7xl text-center text-grey-800 specialunderline bg-highlightsize bg-highlightposition">
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
    )
}
