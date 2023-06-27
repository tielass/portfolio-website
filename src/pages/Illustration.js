import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { illustrationDb } from '../helpers/illustrationDb'
import FilterButton from '../components/FilterButton'
import ProjectCard from '../components/ProjectCard'

function Illustration() {
  const [tag, setTag] = useState('All')
  const [filteredIllustrations, setFilteredIllustrations] = useState([])

  useEffect(
    () => {
     tag === 'All' ? setFilteredIllustrations(illustrationDb) : setFilteredIllustrations(illustrationDb.filter( project => project.tag === tag))
    },
    [tag]
  )

  return (
    <div className='projects'>
      <h2 className="projects--heading">Illustrations</h2>
      <ul className="projects--filter">
        <li className="project--filter--item">
          <FilterButton name='All' tagActive={tag === 'All' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Character' tagActive={tag === 'Character' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='UI / UX' tagActive={tag === 'UI / UX' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Game Asset' tagActive={tag === 'Game Asset' ? true : false} handleSetTag={ setTag }/>
        </li>
      </ul>
      <div className="projects--gallery--grid">
        {filteredIllustrations.map( project => {
          return (
            <Link className='projects--card--link' to={`/illustration/${project.id}`}>
              <ProjectCard key={project.id} title={project.title} image={project.image[0]} tag={project.tag}/>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Illustration
