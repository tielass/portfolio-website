import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsDb } from '../helpers/projectsDb'
import { illustrationDb } from '../helpers/illustrationDb'
import '../style/SingleProjectPage.css'


function SingleProjectPage() {

  const { id } = useParams()
  const singleProject = projectsDb.find(project => project.id === id)

  return (
    <div className='single--page'>
      <div className="single--project--container">
        <div >
          <img className="single--project--img" src={ singleProject.image[1]} alt="" />
        </div>
        <div className="project--images--all">
          {singleProject.image.slice(1).map((singleImage, index) => (
            <div className="project--images--one">
              <img className='project--images--one--img' key={index} src={singleImage} alt="" />
            </div>
          ))}
        </div>
      </div>
        <div className="single--project--details">
          <div>
            <h2 className='project--title'>{singleProject.title}</h2>
            <p className='project--description'>{singleProject.description}</p>
          </div>
          <div className="tools--used">
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
  )
}

export default SingleProjectPage
