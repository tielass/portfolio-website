import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IntroImg from '../images/intro-img.png'
import '../style/Introduction.css'

function Introduction() {
  return (
    <div className='intro--container'>
      <div className="intro--content">
        <div className="intro--info--container">
          <h1 className='intro--heading'><span className='yellow'>Mihail</span> <br></br> Mihaylov</h1>
          <p>I am a dedicated and results-driven professional who embarked on my career journey as a Frontend Engineer with unwavering passion and commitment. </p>
          <div className="social--media--intro">
            <Link><GitHubIcon></GitHubIcon></Link>
            <Link><InstagramIcon></InstagramIcon></Link>
            <Link><LinkedInIcon></LinkedInIcon></Link>
            <Link><GitHubIcon></GitHubIcon></Link>
          </div>
          <button className="contact--me">
            CONTACT ME
          </button>
        </div>
        <div className="intro--img--container">
          <img src={ IntroImg } alt="introimage" className='intro--img' />
        </div>
      </div>
    </div>
  )
}

export default Introduction
