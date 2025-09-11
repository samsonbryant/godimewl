import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Policies from './pages/Policies';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SectorDetail from './pages/SectorDetail';
import Sectors from './pages/Sectors';
import Programs from './pages/Programs';
import Members from './pages/Members';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments/:dept?" element={<Departments />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/sectors/:sectorId" element={<SectorDetail />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;