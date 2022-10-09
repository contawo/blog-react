import React from 'react'
import BlogNav from '../components/BlogNav'
import LanguagePage from '../components/LanguagePage'
import Navigation from '../components/Navigation'

const ReactLan = () => {
  return (
    <div className="program-language">
      <Navigation />
      <LanguagePage
        text="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
        link="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        linkText="Learn more about React JS"
        languageName="reactjs"
      />
      <BlogNav />
    </div>
  )
}

export default ReactLan
