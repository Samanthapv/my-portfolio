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
      <meta property="og:url" content="samanthapinos.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="My portfolio"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hey I'm Samantha, check out my work!"
        />
        <meta property="og:image" content="https://i.imgur.com/k1skuBZ.png" />

      </head>
      <SideBar />

      <Introduction />

      <Projects />

      <AboutMe />

      <Contact />
    </div>
  );
}
