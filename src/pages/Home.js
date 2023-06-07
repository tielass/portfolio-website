import React from 'react'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='homepage'>
      <Introduction />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
