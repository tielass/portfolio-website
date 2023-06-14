import React, {useState, useEffect} from 'react'
import FilterButton from './FilterButton'
import '../style/Projects.css'

function Projects() {
  const [tag, setTag] = useState()

  return (
    <div className='projects--container'>
      <h2 className="projects--heading">Projects</h2>
      <ul className="projects--filter">
        <li className="project--filter--item">
          <FilterButton name='All' tagActive={tag === 'All' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='React' tagActive={tag === 'React' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='Ruby / Rails' tagActive={tag === 'Ruby / Rails' ? true : false} handleSetTag={ setTag }/>
        </li>
        <li className="project--filter--item">
          <FilterButton name='JavaScript' tagActive={tag === 'JavaScript' ? true : false} handleSetTag={ setTag }/>
        </li>
      </ul>
      <div className="projects--gallery">

      </div>
    </div>
  )
}

export default Projects
