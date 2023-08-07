import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Development from './pages/Development'
import Illustration from './pages/Illustration'
import Uiux from './pages/Uiux'
import Visualdesign from './pages/Visualdesign'
import Home from './pages/Home'
import SingleProjectPage from './components/SingleProjectPage'
import SingleIllustrationPage from './components/SingleIllustrationPage'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/development' exact element={<Development />} />
          <Route path='/illustration' exact element={<Illustration />} />
          <Route path='/uiux' exact element={<Uiux />} />
          <Route path="/visualdesign/" exact element = { <Visualdesign /> } />
          <Route path="/development/:id" exact element = { <SingleProjectPage /> } />
          <Route path="/illustration/:id" exact element = { <SingleIllustrationPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
