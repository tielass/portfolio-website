import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/Experience.css'
import {experienceDb} from '../helpers/experienceDb'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';

function Experience() {
  let workIconStyles = { background: '#FFBA2F'}
  let schoolIconStyles = { background: "#00D3BA"}

  return (
    <div className='experience'>
      <h2 className='experience--header'>Education & Experience</h2>
      <div className="experience--container">
      <VerticalTimeline>
        {
          experienceDb.map(element => {
            let isWorkIcon = element.icon === 'work'
            return(
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName='date'
                iconStyle={ isWorkIcon  ? workIconStyles : schoolIconStyles }
                icon = { isWorkIcon ? <LaptopMacOutlinedIcon/> : <SchoolOutlinedIcon/> }
              >
              <h2>{element.position}</h2>
              <p>{element.company} - {element.city}</p>
              <p>{element.description}</p>
              <ul className='experience--tags'>
                {element.tags.map( tag => {
                  return(
                    <li className='experience--tag'>{tag}</li>
                  )
                })}
              </ul>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
