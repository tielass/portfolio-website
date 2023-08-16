import React,  {useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'
import { ReactComponent as LeftArrow } from '../images/left--arrow.svg'
import { illustrationDb } from '../helpers/illustrationDb'
import '../style/SingleProjectPage.css'


function SingleProjectPage() {

  const { id } = useParams()
  const [illustrationId, setillustrationId] = useState(parseInt(id))
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const singleIllustration = illustrationDb.find(illustration => illustration.id === illustrationId)

  const handleNextClick = () => {
    const nextId = illustrationId + 1;
    if (nextId <= illustrationDb.length) {
      setillustrationId(nextId);
      setActiveImageIndex(0);
    }
  };

  const handlePreviousClick = () => {
    const previousId = illustrationId - 1;
    if (previousId >= 1) {
      setillustrationId(previousId);
      setActiveImageIndex(0);
    }
  };


  const handleImageClick = (index) => {
    setActiveImageIndex(index)
  }

  return (
    <div className='single--page'>
      {/* Top Side */}
      <div className="top--side">
        {/* Left Side */}
        <div className="arrow--left">
          {illustrationId !== 1 && (
            <Link to={`/illustration/${singleIllustration.id}`} onClick={handlePreviousClick}>
              <LeftArrow className="arrow--left--svg" />
            </Link>
          )}
        </div>
        <div className="single--project--left">
            <img
            className="single--project--img"
            src={ singleIllustration.image[activeImageIndex]}
            alt="test" />
        </div>
        <div className="arrow--right">
          {illustrationId !== illustrationDb.length && (
            <Link to={`/illustration/${singleIllustration.id}`} onClick={handleNextClick}>
              <RightArrow className="arrow--right--svg" />
            </Link>
          )}
        </div>
        {/* Right Side */}
        <div className="single--project--right">
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
      {singleIllustration.image.length > 1 && (
        <div className="bottom--side">
          {singleIllustration.image.map((singleImage, index) => (
            <div
              className="project--images--one"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <img
                className={`project--images--one--img ${
                activeImageIndex === index ? 'active' : ''}`
              }
              src={singleImage} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SingleProjectPage
