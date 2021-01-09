import "../assets/index.css";
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring = {
      type: "spring",
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
}

export default MyApp;