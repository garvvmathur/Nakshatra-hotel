import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img 
            src={process.env.PUBLIC_URL + '/images/hotel-logo.svg'}
            alt="Nakshatra Hotel Logo" 
            className="logo-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="nav-link" 
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button 
          className="nav-link" 
          onClick={() => scrollToSection('rooms')}
        >
          Rooms
        </button>
        <button 
          className="nav-link" 
          onClick={() => scrollToSection('gallery')}
        >
          Gallery
        </button>
        <button 
          className="nav-link" 
          onClick={() => scrollToSection('about')}
        >
          About&nbsp;us
        </button>
      </nav>

      {/* Always Visible Buttons */}
      <div className="header-actions">
        <a 
          href="tel:+919460900909" 
          className="nav-link phone-link"
        >
          Phone
        </a>
        <Link 
          to="/booking" 
          className="book-now-btn"
          onClick={() => setIsMenuOpen(false)}
        >
          Book&nbsp;Now
        </Link>
      </div>
    </header>
  );
};

export default Header;