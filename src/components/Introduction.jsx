import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactComponent as BehanceIcon } from '../images/behance.svg';
import { ReactComponent as ArtstationIcon } from '../images/artstation.svg';
import IntroImg from '../images/intro-img.png';
import '../style/Introduction.css';

function Introduction() {
  return (
    <div className='intro--container'>
      <div className="intro--content">
        <div className="intro--info--container">
          <h1 className='intro--heading'><span className='yellow'>Mihail</span> <br></br> Mihaylov</h1>
          <p>Passionate about Frontend Software Engineering and armed with a solid foundation in web development from Le Wagon's prestigious bootcamp, I am driven to excel in a role that combines my expertise in visual design, problem-solving, and time management.</p>
          <div className="social--media--intro">
            <Link to='https://github.com/tielass' target="_blank"><GitHubIcon></GitHubIcon></Link>
            <Link
            to='https://www.behance.net/tielass'
            target="_blank"
            className='social--media--art'><BehanceIcon /></Link>
            <Link
            to='https://tielass.artstation.com/'
            target="_blank"
            className='social--media--art'
            ><ArtstationIcon /></Link>
            <Link to='https://www.linkedin.com/in/tielass/' target="_blank"><LinkedInIcon></LinkedInIcon></Link>
          </div>
          <button className="contact--me">
            <a href="#contact--container" className='contact--me--link'>CONTACT ME</a>
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
