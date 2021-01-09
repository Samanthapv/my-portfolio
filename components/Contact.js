import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import SplitText from './SplitText'

export default function Contact() {


    const { ref, inView,  } = useInView({
     
        threshold: 0,
      });
 
     
    return (
        <div className="flex justify-center items-center h-screen bg-hero-bg2 mt-64 text-center fontmain">
   <div ref={ref}>
  
      <h1>
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
                let's be friends!
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </h1>



    </div>

        </div>
    )
}
