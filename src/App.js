import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Development from './pages/Development'
import Illustration from './pages/Illustration'
import Visualdesign from './pages/Visualdesign'
import Home from './pages/Home'
import SingleProjectPage from './components/SingleProjectPage'
import SingleIllustrationPage from './components/SingleIllustrationPage'
import ScrollToTop from './components/ScrollToTop';
import SingleVisualDesignPage from './components/SingleVisualDesignPage';
import { ThemeContext } from './contexts/ThemeContext.jsx'
import { Helmet } from "react-helmet";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'))
  }
  

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

      <div className="App" id={ theme }>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MMihaylov</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="My personal portfolio website" />
        </Helmet>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/development' exact element={ <Development /> } />
            <Route path='/illustration' exact element={ <Illustration /> } />
            <Route path="/visualdesign/" exact element = { <Visualdesign /> } />
            <Route path="/development/:id" exact element = { <SingleProjectPage /> } />
            <Route path="/illustration/:id" exact element = { <SingleIllustrationPage /> } />
            <Route path="/visualdesign/:id" exact element = { <SingleVisualDesignPage /> } />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
