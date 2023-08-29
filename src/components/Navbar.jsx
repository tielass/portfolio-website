import React, {useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import '../style/Navbar.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const switchStyle = {
    color: '#F0AD2C',
  }

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
        <NavLink className='navbar--link' to='/visualdesign'>Visual Design</NavLink>
        <Switch
        checked={ theme === 'dark' }
        onChange={ toggleTheme }
        color='warning'
        style={switchStyle}/>
      </div>
      {scrolled && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUpwardOutlinedIcon />
        </button>
      )}
    </div>
  )
}

export default Navbar
