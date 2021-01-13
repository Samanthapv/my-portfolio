import "../assets/index.css";
import React from 'react';
import App from 'next/app';
import MobileView from "../components/MobileView";
import { AnimatePresence, motion } from 'framer-motion';

class MyApp extends App {
constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}


 render() {

  
    const { Component, pageProps, router } = this.props;
    const spring = {
      type: "inertia",
      damping: 20,
      stiffness: 80,
      when: "afterChildren"
    };

return this.state.width < 640 ? <MobileView /> :
 (

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
