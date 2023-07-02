import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsDb } from '../helpers/projectsDb'
// import { illustrationDb } from '../helpers/illustrationDb'
import '../style/SingleProjectPage.css'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'


function SingleProjectPage() {

  const { id } = useParams()
  const singleProject = projectsDb.find(project => project.id === id)

  return (
    <div className='single--page'>
      {/* Top Side */}
      <div className="top--side">
        {/* Left Side */}
        <div className="single--project--left">
            <img className="single--project--img" src={ singleProject.image[1]} alt="" />
        </div>
        {/* Right Side */}
        <div className="single--project--right">
          <div  className='arrow--right'>
            <RightArrow className='arrow--right-svg'/>
          </div>
          <div className="project--info--container">
            <div>
              <h2 className='project--title'>{singleProject.title}</h2>
              <p className='project--description'>{singleProject.description}</p>
            </div>
            <div className="tools--container">
              <h2 className="tools--heading">Tools Used</h2>
              <ul className="tools">
                {singleProject.skills.map((skill) => (
                  <div className="project--tools">
                    <li className='skill-tag'>{skill}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Side Gallery */}
      <div className="bottom--side">
        {singleProject.image.slice(1).map((singleImage, index) => (
          <div className="project--images--one">
            <img className='project--images--one--img' key={index} src={singleImage} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleProjectPage
