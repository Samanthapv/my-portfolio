import React, { useState, useEffect } from "react";
import Typist from "react-typist";

export default function TypeWriter(props) {
  const [count, setCount] = useState(1);

  useEffect(() => {

    setCount(1);
  }, [count]);

  return (
    <div className="fontmain text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center xl:text-7xl 2xl:text-8xl">
      <p className=" extra-loose m-auto text-gray-800 specialunderline bg-highlightsize bg-highlightposition">
        hi I'm <span className="wavy6">samantha,</span> a <br />
        <span className="font-black"> full stack developer</span>{" "}
      </p>

      <div className=" fontmain bg-white text-4xl xl:text-7xl 2xl:text-8xl lg:text-6xl flex flex-row justify-center sm:text-5xl md:text-5xl gap-5">
        <p> and</p> <p className="fontmain font-black text-4xl xl:text-7xl 2xl:text-8xl sm:text-5xl lg:text-6xl md:text-5xl">
          {count ? (   
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <span>
              a language learner
              </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a traveller </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a knitting pro </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a music lover </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a dog person </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a crafter </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a bookworm </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> an optimist </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> a coffee addict </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> an adventurer </span>
            </Typist>

          ) : (
            ""
          )}
        </p>
      </div>

      <p className="fontmain text-4xl xl:text-7xl sm:text-5xl lg:text-6xl md:text-5xl 2xl:text-8xl"> based in Spain </p>
    </div>
  );
}
