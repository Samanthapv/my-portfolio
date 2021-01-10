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
        hola soy <span className="wavy">samantha</span> <br />
        <span className="font-black"> desarrolladora full-stack</span>{" "}
      </p>

      <div className=" fontmain text-7xl flex flex-row justify-center font-5xl gap-5">
        <p> y adoro </p>
        <p className="fontmain font-black text-7xl">
          {count ? (
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <span>
              aprender idiomas
              </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> viajar </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> leer </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> la música en directo </span>
              <Typist.Backspace count={20} delay={1000} />
              <span> tejer sin parar </span>
            </Typist>
          ) : (
            ""
          )}
        </p>
      </div>

      <p className="fontmain text-7xl"> de España </p>
    </div>
  );
}
