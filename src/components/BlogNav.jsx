import React from 'react';
import {NavLink} from "react-router-dom";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import {BlogContext} from "../context/BlogContext"

const BlogNav = () => {
  const {setLanguage} = React.useContext(BlogContext);
  return (
    <div className="blog-nav">
        <div className="blog-nav-container">
          <NavLink to="/blogs/javascript" className="blog-nav-container-link" onClick={() => setLanguage("javascript")}>
            <FaJsSquare />
          </NavLink>
          <NavLink to="/blogs/reactjs" className="blog-nav-container-link" onClick={() => setLanguage("reactjs")}>
            <FaReact />
          </NavLink>
          <NavLink to="/blogs/html" className="blog-nav-container-link" onClick={() => setLanguage("html")}>
            <FaHtml5 />
          </NavLink>
          <NavLink to="/blogs/python" className="blog-nav-container-link" onClick={() => setLanguage("python")}>
            <FaPython />
          </NavLink>
          <NavLink to="/blogs/java" className="blog-nav-container-link" onClick={() => setLanguage("java")}>
            <FaJava />
          </NavLink>
        </div>
    </div>
  )
}

export default BlogNav;