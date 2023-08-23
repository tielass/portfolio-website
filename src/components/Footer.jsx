  import React from 'react'
  import { Link } from 'react-router-dom'
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import { ReactComponent as BehanceIcon } from '../images/behance.svg';
  import { ReactComponent as ArtstationIcon } from '../images/artstation.svg';
  import '../style/Footer.css'

  function footer() {
    return (
      <div className='footer'>
        <p>What we do in life echoes in eternity. </p>
        <div className="social--media">
          <Link to='https://github.com/tielass'
          target="_blank"
          title='Link to GitHub'><GitHubIcon></GitHubIcon></Link>
          <Link to='https://www.linkedin.com/in/tielass/'
          target="_blank"
          title='Link to LinkedIn'><LinkedInIcon ></LinkedInIcon></Link>
          <Link
          to='https://www.behance.net/tielass'
          target="_blank"
          className='social--media--art--footer'><BehanceIcon
          title='Link to Behance'/></Link>
          <Link
          to='https://tielass.artstation.com/'
          target="_blank"
          className='social--media--art--footer'><ArtstationIcon
          title='Link to Artstation'/></Link>
        </div>
        <div className="copyright">
        <p>Mihail Mihaylov &copy; 2023</p>
        </div>
      </div>
    )
  }

  export default footer
