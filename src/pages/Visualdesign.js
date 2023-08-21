import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { visualDesignDb } from '../helpers/visualDesignDb'
import FilterButton from '../components/FilterButton'
import ProjectCard from '../components/ProjectCard'

function Visualdesign() {
  const [tag, setTag] = useState('All')
  const [filteredDesigns, setFilteredDesigns] = useState([])

  useEffect(
    () => {
     tag === 'All' ? setFilteredDesigns(visualDesignDb) : setFilteredDesigns(visualDesignDb.filter( project => project.tag === tag))
    },
    [tag]
  )

  return (
    <div className='projects'>
      <h2 className="projects--heading">Visual Design</h2>
      <ul className="projects--filter">
        <li className="project--filter--item">
          <FilterButton name='All' tagActive={tag === 'All' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Logo' tagActive={tag === 'Logo' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Visual Elements' tagActive={tag === 'Visual Elements' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Banner' tagActive={tag === 'Banner' ? true : false} handleSetTag={ setTag }/>
        </li>
      </ul>
      <div className="projects--gallery--grid">
        {filteredDesigns.map( project => {
          return (
            <Link className='projects--card--link' to={`/visualdesign/${project.id}`}>
              <ProjectCard key={project.id} title={project.title} image={project.image[0]} tag={project.tag}/>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Visualdesign
