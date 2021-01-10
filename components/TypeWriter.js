import React, { useState, useEffect } from "react";
import Typist from "react-typist";

export default function TypeWriter(props) {
  const [count, setCount] = useState(1);

  useEffect(() => {

    setCount(1);
  }, [count]);

  return (
    <div className="fontmain text-center text-7xl">
      <p className=" extra-loose m-auto text-grey-800 specialunderline bg-highlightsize bg-highlightposition">
        hi I am <span className="wavy">samantha</span> a <br />
        <span className="font-black"> full stack developer</span>{" "}
      </p>

      <div className=" fontmain text-7xl flex flex-row justify-center font-5xl gap-5">
        <p> and a </p>
        <p className="fontmain font-black text-7xl">
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

      <p className="fontmain text-7xl"> based in Spain </p>
    </div>
  );
}
