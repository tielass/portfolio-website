import React from 'react'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className='homepage'>
      <Introduction />
      <Experience />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
