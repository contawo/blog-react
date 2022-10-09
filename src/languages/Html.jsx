import React from 'react'
import BlogNav from '../components/BlogNav'
import LanguagePage from '../components/LanguagePage'
import Navigation from '../components/Navigation';

const Html = () => {
  return (
    <div className="program-language">
      <Navigation />
      <LanguagePage
        text="HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages."
        link="https://en.wikipedia.org/wiki/HTML"
        linkText="Learn more about HTML5"
        languageName="html"
      />
      <BlogNav />
    </div>
  )
}

export default Html