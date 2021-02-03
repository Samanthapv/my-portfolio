import "../assets/index.css";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  
    const spring = {
      type: "inertia",
      damping: 20,
      stiffness: 80,
      when: "afterChildren"
    };

return (

<AnimatePresence>
        <div className="page-transition-wrapper" style={{backgroundColor: "white"}}>
    
          <motion.div
            transition={{spring}}
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x: -300, opacity: 0 }}
            id="page-transition-container"
          >
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </div>
      </AnimatePresence>
    );
 }
  
  export default MyApp;
