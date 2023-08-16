import React,  {useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'
import { ReactComponent as LeftArrow } from '../images/left--arrow.svg'
import { projectsDb } from '../helpers/projectsDb'
import '../style/SingleProjectPage.css'


function SingleProjectPage() {

  const { id } = useParams()
  const [projectId, setProjectId] = useState(parseInt(id))
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  const singleProject = projectsDb.find(project => project.id === projectId)

  const handleNextClick = () => {
    // setProjectId(prevId => prevId + 1)
    const nextId = projectId + 1;
    if (nextId <= projectsDb.length) {
      setProjectId(nextId);
      setActiveProjectIndex(0);
    }
  }

  const handlePreviousClick = () => {
    const previousId = projectId - 1;
    if (previousId >= 1) {
      setProjectId(previousId);
      setActiveProjectIndex(0)
    }
  }

  const handleProjectClick = (index) => {
    setActiveProjectIndex(index)
  }

  return (
    <div className='single--page'>
      {/* Top Side */}
      <div className="top--side">
        {/* Left Side */}
        <div className="arrow--left">
          {projectId !== 1 && (
            <Link to={`/development/${singleProject.id}`} onClick={handlePreviousClick}>
              <LeftArrow className="arrow--left--svg" />
            </Link>
          )}
        </div>
        <div className="single--project--left">
            <img
            className="single--project--img"
            src={ singleProject.image[activeProjectIndex]}
            alt="test" />
        </div>
            <div  className='arrow--right'>
              <Link to={`/development/${singleProject.id}`} onClick={handleNextClick}>
                <RightArrow className='arrow--right--svg'/>
              </Link>
            </div>
        {/* Right Side */}
        <div className="single--project--right">
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
      {singleProject.image.length > 1 && (
        <div className="bottom--side">
          {singleProject.image.map((singleProjectImage, index) => (
            <div
              className="project--images--one"
              key={index}
              onClick={() => handleProjectClick(index)}
            >
              <img
                className={`project--images--one--img ${
                activeProjectIndex === index ? 'active' : ''}`
              }
              src={singleProjectImage} alt="" />
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default SingleProjectPage
