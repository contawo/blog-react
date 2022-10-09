import React from 'react'
import BlogNav from '../components/BlogNav'
import LanguagePage from '../components/LanguagePage'
import Navigation from '../components/Navigation'

const PythonLan = () => {
  return (
    <div className="program-language">
      <Navigation />
      <LanguagePage
        text="Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems."
        link="https://www.pythontutorial.net/getting-started/what-is-python/"
        linkText="Learn more about Python"
        languageName="python"
      />
      <BlogNav />
    </div>
  )
}

export default PythonLan