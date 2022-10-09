import React from 'react'
import BlogNav from '../components/BlogNav'
import LanguagePage from '../components/LanguagePage'
import Navigation from '../components/Navigation'

const JavascriptLan = () => {
  return (
    <div className="program-language">
      <Navigation />
      <LanguagePage
        text="Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
        link="https://en.wikipedia.org/wiki/JavaScript"
        linkText="Learn more about JavaScript"
        languageName="javascript"
      />
      <BlogNav />
    </div>
  )
}

export default JavascriptLan
