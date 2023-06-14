import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <h2 className='experience--header'>Education & Experience</h2>
      <div className="experience--container">
      <VerticalTimeline>
        <VerticalTimelineElement>
          <h1>first element</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          <h1>second element</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          <h1>third element</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          <h1>fourth element</h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
