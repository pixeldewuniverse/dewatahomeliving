import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import InvestmentPackage from '@/pages/InvestmentPackage';
import BuildingConstruction from '@/pages/BuildingConstruction';
import LeaseFreehold from '@/pages/LeaseFreehold';
import Maintenance from '@/pages/Maintenance';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
    <div className="min-h-screen flex flex-col bg-[var(--dark-black)]">
      <Navigation key={location.pathname} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/investment-package" element={<InvestmentPackage />} />
          <Route path="/services/building-construction" element={<BuildingConstruction />} />
          <Route path="/services/lease-freehold" element={<LeaseFreehold />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>  
      </main>
      <Footer />
      </div>
    </AnimatePresence> 
  );
}

export default App;