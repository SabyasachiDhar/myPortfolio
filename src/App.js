import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter instead of HashRouter
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Projects from './pages/projects/index';
import NavBar from './components/NavTop';
import Footer from './components/footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myPortfolio" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
