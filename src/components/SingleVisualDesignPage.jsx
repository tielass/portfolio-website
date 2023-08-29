import React,  {useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../images/right--arrow.svg'
import { ReactComponent as LeftArrow } from '../images/left--arrow.svg'
import { visualDesignDb } from '../helpers/visualDesignDb'
import '../style/SingleProjectPage.css'


function SingleVisualDesignPage() {

  const { id } = useParams()
  const [visualDesignId, setvisualDesignId] = useState(parseInt(id))
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const singleVisualDesign = visualDesignDb.find(visualDesign => visualDesign.id === visualDesignId)

  const handleNextClick = () => {
    const nextId = visualDesignId + 1;
    if (nextId <= visualDesignDb.length) {
      setvisualDesignId(nextId);
      setActiveImageIndex(0);
    }
  };

  const handlePreviousClick = () => {
    const previousId = visualDesignId - 1;
    if (previousId >= 1) {
      setvisualDesignId(previousId);
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
          {visualDesignId !== 1 && (
            <Link to={`/visualdesign/${singleVisualDesign.id}`} onClick={handlePreviousClick}>
              <LeftArrow className="arrow--left--svg" />
            </Link>
          )}
        </div>
        <div className="single--project--left">
            <img
            className="single--project--img"
            src={ singleVisualDesign.image[activeImageIndex]}
            alt="test" />
        </div>
        <div className="arrow--right">
          {visualDesignId !== visualDesignDb.length && (
            <Link to={`/visualdesign/${singleVisualDesign.id}`} onClick={handleNextClick}>
              <RightArrow className="arrow--right--svg" />
            </Link>
          )}
        </div>
        {/* Right Side */}
        <div className="single--project--right">
          <div className="project--info--container">
            <div>
              <h2 className='project--title'>{singleVisualDesign.title}</h2>
              <p className='project--description'>{singleVisualDesign.description}</p>
            </div>
            <div className="tools--container">
              <h2 className="tools--heading">Tools Used</h2>
              <ul className="tools">
                {singleVisualDesign.skills.map((skill) => (
                  <div className="project--tools" key={skill}>
                    <li className='skill-tag'>{skill}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Side Gallery */}
      {singleVisualDesign.image.length > 1 && (
        <div className="bottom--side">
          {singleVisualDesign.image.map((singleImage, index) => (
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

export default SingleVisualDesignPage
