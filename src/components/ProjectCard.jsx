import React from 'react'
import '../style/Projects.css'

function ProjectCard({title, image, tag}) {
  return (
    <div className='projectcard--container'>
      <div className="projectcard--img--container">
        <img src={image} className='projectcard--img' alt="" />
      </div>
      <p className='projectcard--text'>{title}</p>
    </div>
  )
}

export default ProjectCard
