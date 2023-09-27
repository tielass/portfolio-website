import React, {useState, useEffect, useRef} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import '../style/Navbar.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive--nav');
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
      <nav className="right--side" ref={navRef}>
        <NavLink className='navbar--link' to='/development'>Development</NavLink>
        <NavLink className='navbar--link' to='/illustration'>Illustration</NavLink>
        <NavLink className='navbar--link' to='/visualdesign'>Visual Design</NavLink>
        <Switch
        className='navbar--switch'
        checked={ theme === 'dark' }
        onChange={ toggleTheme }
        color='warning'
        style={switchStyle}/>
        <button className='nav--btn nav--close--btn' onClick={showNavBar}>
          <CloseIcon />
        </button>
      </nav>
      <button className="nav--btn nav--menu--btn" onClick={showNavBar}>
        <MenuIcon />
      </button>

      {scrolled && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUpwardOutlinedIcon />
        </button>
      )}
    </div>
  )
}

export default Navbar
