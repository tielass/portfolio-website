import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsDb } from '../helpers/projectsDb'
import '../style/Projects.css'

function ProjectCards() {
  return (
    <div>
      { projectsDb.map((project)=> {
        return(
          <ProjectCard key={project.id} title={project.title} image={project.image} tag={project.tag}/>
        )
      }
      ) }
    </div>
  )
}

export default ProjectCards
