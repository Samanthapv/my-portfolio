import React, { useState, useEffect} from "react";
import SideBar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Router from 'next/router';
import {useRouter} from 'next/router'


export default function Home() {

  const router = useRouter()
  const [language, setLanguage] = useState(router.query.language);

  useEffect(() => {
    // Always do navigations after the first render
    router.push(`/?language=${language}`, undefined, { shallow: true })
  }, [language])

  useEffect(() => {
    // The counter changed!
    console.log(router.query)
  }, [router.query.language])


  return (
    <div>

      <SideBar />

      <Introduction language={language} callback={setLanguage} />

      <Projects language={language} />

      <AboutMe language={language} />

      <Contact language={language} />

    </div>
  );
}
