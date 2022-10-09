import React from 'react'
import BlogNav from '../components/BlogNav'
import LanguagePage from '../components/LanguagePage'
import Navigation from '../components/Navigation'

const JavaLan = () => {
  return (
    <div className="program-language">
      <Navigation />
      <LanguagePage
        text="Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself."
        link="https://en.wikipedia.org/wiki/Java_(programming_language)"
        linkText="Learn more about Java"
        languageName="java"
      />
      <BlogNav />
    </div>
  )
}

export default JavaLan
