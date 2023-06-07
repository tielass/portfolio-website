import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import '../style/Navbar.css'

function navbar() {
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
        color='warning'/>
      </div>
    </div>
  )
}

export default navbar
