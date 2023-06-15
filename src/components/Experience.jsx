import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/Experience.css'
import {experienceDb} from '../helpers/experienceDb'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

function Experience() {
  return (
    <div className='experience'>
      <h2 className='experience--header'>Education & Experience</h2>
      <div className="experience--container">
      <VerticalTimeline>
        {/* <VerticalTimelineElement icon={<SchoolOutlinedIcon className='timeline--icon'/>} >
          <h2>GRAPHIC DESIGNER - 11. 2018 - 09. 2022</h2>
          <p className='experience-city'>Berlin</p>
          <p>LemonOne GmbH</p>
          <p>Supported the development of the start-up with visuals for internal use, such as guidelines, logos and printable materials, as well as external such as client guidelines. Managed a team of more than 20 external partners and helped aligned the company's vision with them. Translated guidelines into static websites with HTML and CSS. </p>
          <p><span>Guidelines & Banner design</span><span>Photomanipulation</span></p>
        </VerticalTimelineElement >
        <VerticalTimelineElement icon={<LaptopMacOutlinedIcon/>}>
          <h2>GRAPHIC DESIGNER - 11. 2018 - 09. 2022</h2>
          <p className='experience-city'>Berlin</p>
          <p>LemonOne GmbH</p>
          <p>Supported the development of the start-up with visuals for internal use, such as guidelines, logos and printable materials, as well as external such as client guidelines. Managed a team of more than 20 external partners and helped aligned the company's vision with them. Translated guidelines into static websites with HTML and CSS. </p>
          <p><span>Guidelines & Banner design</span><span>Photomanipulation</span></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<LocalLibraryOutlinedIcon/>}>
        <h2>GRAPHIC DESIGNER - 11. 2018 - 09. 2022</h2>
          <p className='experience-city'>Berlin</p>
          <p>LemonOne GmbH</p>
          <p>Supported the development of the start-up with visuals for internal use, such as guidelines, logos and printable materials, as well as external such as client guidelines. Managed a team of more than 20 external partners and helped aligned the company's vision with them. Translated guidelines into static websites with HTML and CSS. </p>
          <p><span>Guidelines & Banner design</span><span>Photomanipulation</span></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
        <h2>GRAPHIC DESIGNER - 11. 2018 - 09. 2022</h2>
          <p className='experience-city'>Berlin</p>
          <p>LemonOne GmbH</p>
          <p>Supported the development of the start-up with visuals for internal use, such as guidelines, logos and printable materials, as well as external such as client guidelines. Managed a team of more than 20 external partners and helped aligned the company's vision with them. Translated guidelines into static websites with HTML and CSS. </p>
          <p><span>Guidelines & Banner design</span><span>Photomanipulation</span></p>
        </VerticalTimelineElement> */}
        {
          experienceDb.map(element => {
            console.log(element)
            return(
              <VerticalTimelineElement
                
              />
            )
          })
        }

      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
