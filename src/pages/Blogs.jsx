import React from 'react'
import Navigation from '../components/Navigation';
import BlogNav from '../components/BlogNav';
import ProgramLanguage from '../components/ProgramLanguage';
import { FaJsSquare, FaReact, FaHtml5, FaPython, FaJava } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="blogs">
      <Navigation />
        <div className="blog-display blog-content">
          <h1>Select Programming Language</h1>
          <div className="blogs-display-lan">
            <ProgramLanguage 
              path="/blogs/javascript"
              colour="#CFCA4D"
              icon={<FaJsSquare />}
              language="JavaScript"
            />
            <ProgramLanguage 
              path="/blogs/reactjs"
              colour="#4DA0CF"
              icon={<FaReact />}
              language="React JS"
            />
            <ProgramLanguage 
              path="/blogs/html"
              colour="#CF8B4D"
              icon={<FaHtml5 />}
              language="HTML"
            />
            <ProgramLanguage 
              path="/blogs/python"
              colour="#6FCF4D"
              icon={<FaPython />}
              language="Python"
            />
            <ProgramLanguage 
              path="/blogs/java"
              colour="#CF4D4D"
              icon={<FaJava />}
              language="Java"
            />
          </div>
        </div>
        <BlogNav />
    </div>
  )
}

export default Blogs;