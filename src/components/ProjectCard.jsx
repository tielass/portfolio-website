import React from 'react'

function ProjectCard(title, img) {
  return (
    <div className='projectcard--container'>
      <div className="projectcard--img--container">
        <img src={img} className='projectcard--img' alt="" />
      </div>
      <p className='projectcard--text'>{title}</p>
    </div>
  )
}

export default ProjectCard
