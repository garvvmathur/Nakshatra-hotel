// App.js - Back to original structure
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <Gallery />
      <Reviews />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
