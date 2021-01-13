import React, { useState, useEffect } from "react";
import Typist from "react-typist";

export default function TypeWriter(props) {
  const [count, setCount] = useState(1);

  useEffect(() => {

    setCount(1);
  }, [count]);

  return (
    <div className="fontmain sm:text-5xl md:text-5xl lg:text-6xl text-center xl:text-7xl">
      <p className=" extra-loose m-auto text-grey-800 specialunderline bg-highlightsize bg-highlightposition">
        hi I am <span className="wavy">samantha</span> a <br />
        <span className="font-black"> full stack developer</span>{" "}
      </p>

      <div className=" fontmain xl:text-7xl lg:text-6xl flex flex-row justify-center sm:text-5xl md:text-5xl gap-5">
        <p> and a </p>
        <p className="fontmain font-black xl:text-7xl sm:text-5xl lg:text-6xl md:text-5xl">
          {count ? (
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <span>
              language learner
              </span>
              <Typist.Backspace count={20} delay={1000} />
              <span>  traveller </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> knitting pro </span>
              <Typist.Backspace count={20} delay={1000} />
              <span>  music lover </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> dog person </span>
            </Typist>
          ) : (
            ""
          )}
        </p>
      </div>

      <p className="fontmain xl:text-7xl sm:text-5xl lg:text-6xl md:text-5xl"> based in Spain </p>
    </div>
  );
}
