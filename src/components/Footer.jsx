  import React from 'react'
  import { Link } from 'react-router-dom'
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import '../style/Footer.css'

  function footer() {
    return (
      <div className='footer'>
        <p>What we do in life echoes in eternity. </p>
        <div className="social--media">
          <Link><GitHubIcon></GitHubIcon></Link>
          <Link><InstagramIcon></InstagramIcon></Link>
          <Link><LinkedInIcon></LinkedInIcon></Link>
          <Link><GitHubIcon></GitHubIcon></Link>
          <Link><MailOutlineIcon></MailOutlineIcon></Link>
        </div>
        <div className="copyright">
        <p>Mihail Mihaylov &copy; 2023</p>
        </div>
      </div>
    )
  }

  export default footer
