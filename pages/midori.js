import React, { useRef } from "react";
import Page from "../components/page";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {

  return (

      <div >
    
      <main style={{backgroundColor: "#adddcf"}}>
          <div className="header text-center">
              <h1 class="title animate-this">
                  about page
              </h1>
              <img src="https://picsum.photos/1300/1000" />
              <div class="animate-this button">
              <Link href="/">
          <a>go back to home</a>
        </Link>
                  <a href="index.html"></a>
              </div>
          </div>
      </main>
      </div>

  );
}