import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import FilterButton from './FilterButton'
import '../style/Projects.css'
import { projectsDb } from '../helpers/projectsDb'
import ProjectCard from './ProjectCard'

function Projects() {
  const [tag, setTag] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(
    () => {
     tag === 'All' ? setFilteredProjects(projectsDb) : setFilteredProjects(projectsDb.filter( project => project.tag === tag))
    },
    [tag]
  )

  return (
    <div className='projects'>
      <h2 className="projects--heading">Projects</h2>
      <ul className="projects--filter">
        <li className="project--filter--item" key={'1'}>
          <FilterButton name='All' tagActive={tag === 'All' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item" key='2'>
          <FilterButton name='React' tagActive={tag === 'React' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item" key='3'>
          <FilterButton name='Ruby / Rails' tagActive={tag === 'Ruby / Rails' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item" key='4'>
          <FilterButton name='JavaScript' tagActive={tag === 'JavaScript' ? true : false} handleSetTag={ setTag }/>
        </li>
      </ul>
      <div className="projects--gallery--grid">
        {filteredProjects.map( project => {
          return (
            <Link className='projects--card--link' to={`/development/${project.id}`} key={project.id}>
              <ProjectCard key={project.id} title={project.title} image={project.image[0]} tag={project.tag}/>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
