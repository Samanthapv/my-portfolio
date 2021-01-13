import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SplitText from "./SplitText";
import ScrollToTop from "./ScrollToTop";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="sm:h-screen md:h-screen w-screen md:-mt-60  lg:mt-0 mo flex flex-col justify-center items-center lg:h-screen bg-hero-bg2 bg-no-repeat">
      <div ref={ref}>
        <h1 className=" md:mt-56 md:mb-40 xl:mt-20 lg:mt-20 flex flex-col justify-center text-center fontmain md:text-5xl sm:text-4xl lg:text-6xl xl:text-7xl xl:leading-15 md:leading-15 lg:leading-15">
          <AnimatePresence>
            {inView && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SplitText
                  initial={{ y: "100%" }}
                  animate="visible"
                  variants={{
                    visible: (i) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                  }}
                >
                  that's it,now say hi!☺
                </SplitText>
              </motion.div>
            )}
          </AnimatePresence>
        </h1>
    
        <p className="flex justify-center flex-col text-center font4 text-gray-800 xl:-mt-36 lg:-mt-48 md:-mt-48 xl:text-2xl md:text-xl sm:text-lg ">
          do you have any questions or would like to work together? let's talk!
          <br />
          <span className="md:text-green-lightGreen lg:text-green-lightGreen xl:text-green-lightGreen sm:text-white xl:text-xl">
            (In English, Spanish, Portuguese or basic Japanese.)
          </span>
        </p>
        <div className="flex justify-center">
          <img className="w-5/12" src="/whiteline.png" />
        </div>
      </div>

      <div className="">
        <ScrollToTop />
      </div>
    </div>
  );
}
