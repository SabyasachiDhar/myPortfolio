import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Projects from './pages/projects/index';
import NavBar from './components/NavTop';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
