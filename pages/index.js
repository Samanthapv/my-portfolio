import React, { useState, useEffect} from "react";
import SideBar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Router from 'next/router';
import {useRouter} from 'next/router'


export default function Home() {

  const router2 = useRouter()
  const [language, setLanguage] = useState("EN");
  
  
useEffect(() => {

 setLanguage(router2.query.lg)

}, [])

useEffect(() => {

  Router.push({
    pathname: '/',
    query: {lg : language},
})


}, [language])

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
