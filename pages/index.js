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
        <meta name="description" content="Samantha's portfolio" />
        <meta name="title" property="og:title" content="Samantha's portfolio" />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/k1skuBZ.png"
        />
        <meta
          name="description"
          property="og:description"
          content="Samantha's portfolio"
        />
        <meta name="author" content="Samantha Pinos" />
      </head>
      <SideBar />

      <Introduction />

      <Projects />

      <AboutMe />

      <Contact />
    </div>
  );
}
