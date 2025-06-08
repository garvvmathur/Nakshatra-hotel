// App.js - Back to original structure
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
import './App.css';

function App() {
  const currentPath = window.location.pathname;

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && currentPath === '/') {
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
      }, 100); // Small delay to ensure page is loaded
    }
  }, [currentPath]);
  
  if (currentPath === '/gallery') {
    return <GalleryPage />;
  }
  if (currentPath === '/booking') {
    return <BookingPage />;
  }

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
