import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import SplitText from './SplitText'
import ScrollToTop from "./ScrollToTop";

export default function Contact() {


    const { ref, inView,  } = useInView({
     
        threshold: 0,
      });
 
     
    return (
        <div className="md:-mt-60  lg:mt-0 md:h-auto flex flex-col justify-center items-center lg:h-screen bg-hero-bg2 bg-no-repeat">
   <div ref={ref}>
  
      <h1 className=" md:mt-56 md:mb-40  flex flex-col justify-center text-center fontmain ">
        <AnimatePresence>
          {inView && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
                let's keep in touch! 
                argareh
              </SplitText>
            
            </motion.div>
           
          )}
        </AnimatePresence>
      </h1>

      


    </div>

<div>
    <ScrollToTop />
    </div>
        </div>
    )
}
