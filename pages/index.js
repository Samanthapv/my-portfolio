import React from "react";
import Head from 'next/head'
import SideBar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>samantha pinos</title>
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
          content="Check out my work here!"
        />
        <meta property="og:image" content="https://i.imgur.com/tB5E0pE.png" />

      </Head>
      <SideBar />

      <Introduction />

      <Projects />

      <AboutMe />

      <Contact />
    </div>
  );
}
