import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import '../style/Navbar.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const switchStyle = {
    color: '#F0AD2C',
  }

  return (
    <div className='navbar'>
      <div className="left--side">
        <div className="logo">
          <Link to='/'>
            M<span className='logo--yellow'>M</span>
          </Link>
        </div>
      </div>
      <div className="right--side">
        <NavLink className='navbar--link' to='/development'>Development</NavLink>
        <NavLink className='navbar--link' to='/illustration'>Illustration</NavLink>
        <NavLink className='navbar--link' to='/uiux'>UI/UX</NavLink>
        <NavLink className='navbar--link' to='/visualdesign'>Visual Design</NavLink>
        <Switch
        checked={ theme === 'dark' }
        onChange={ toggleTheme }
        color='warning'
        style={switchStyle}/>
      </div>
    </div>
  )
}

export default Navbar
