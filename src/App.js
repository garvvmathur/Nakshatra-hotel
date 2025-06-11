import React, {useEffect} from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import BookingPage from './components/BookingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


// Create a HomePage component that contains all your home sections
function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== '/') {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
