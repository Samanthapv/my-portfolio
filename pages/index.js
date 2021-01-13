import React from "react";
import SideBar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <head>
        <title>sam pinos</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <SideBar />

      <Introduction />

      <Projects />

      <AboutMe />

      <Contact />
    </div>
  );
}
