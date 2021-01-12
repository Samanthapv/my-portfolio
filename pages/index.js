import React, { useState, useEffect} from "react";
import SideBar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";


export default function Home() {


  return (
    <div>

      <SideBar />

      <Introduction />

      <Projects  />

      <AboutMe />

      <Contact  />

    </div>
  );
}
