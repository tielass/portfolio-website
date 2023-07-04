import React,  {useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { projectsDb } from '../helpers/projectsDb'
import '../style/SingleProjectPage.css'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'
import { illustrationDb } from '../helpers/illustrationDb'


function SingleProjectPage() {

  const { id } = useParams()
  const [illustrationId, setillustrationId] = useState(parseInt(id))


  const singleIllustration = illustrationDb.find(illustration => illustration.id === illustrationId)

  const handleLinkClick = () => {
    setillustrationId(prevId => prevId + 1)
  }

  return (
    <div className='single--page'>
      {/* Top Side */}
      <div className="top--side">
        {/* Left Side */}
        <div className="single--project--left">
            <img className="single--project--img" src={ singleIllustration.image[0]} alt="test" />
        </div>
        {/* Right Side */}
        <div className="single--project--right">
            <div  className='arrow--right'>
              <Link to={`/illustration/${singleIllustration.id}`} onClick={handleLinkClick}>
                <RightArrow className='arrow--right--svg'/>
              </Link>
            </div>
          <div className="project--info--container">
            <div>
              <h2 className='project--title'>{singleIllustration.title}</h2>
              <p className='project--description'>{singleIllustration.description}</p>
            </div>
            <div className="tools--container">
              <h2 className="tools--heading">Tools Used</h2>
              <ul className="tools">
                {singleIllustration.skills.map((skill) => (
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
        {singleIllustration.image.map((singleImage, index) => (
          <div className="project--images--one">
            <img className='project--images--one--img' key={index} src={singleImage} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleProjectPage
