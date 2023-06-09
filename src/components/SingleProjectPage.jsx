import React,  {useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsDb } from '../helpers/projectsDb'
import '../style/SingleProjectPage.css'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'
// import { illustrationDb } from '../helpers/illustrationDb'


function SingleProjectPage() {

  const { id } = useParams()
  const [projectId, setProjectId] = useState(parseInt(id))


  const singleProject = projectsDb.find(project => project.id === projectId)

  const handleLinkClick = () => {
    setProjectId(prevId => prevId + 1)
  }

  return (
    <div className='single--page'>
      {/* Top Side */}
      <div className="top--side">
        {/* Left Side */}
        <div className="single--project--left">
            <img className="single--project--img" src={ singleProject.image[1]} alt="test" />
        </div>
        {/* Right Side */}
        <div className="single--project--right">
            <div  className='arrow--right'>
              <Link to={`/development/${singleProject.id}`} onClick={handleLinkClick}>
                <RightArrow className='arrow--right--svg'/>
              </Link>
            </div>
          <div className="project--info--container">
            <div>
              <h2 className='project--title'>{singleProject.title}</h2>
              <p className='project--description'>{singleProject.description}</p>
              <Link to={singleProject.url} target="_blank"><p>{singleProject.url}</p></Link>
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
