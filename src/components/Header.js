// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const currentPath = window.location.pathname;

    if (currentPath === '/gallery') {
      if (sectionId === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
      return;
    }

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
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src="/images/hotel-logo.svg" 
          alt="Nakshatra Hotel Logo" 
          className="logo-image"
          onClick={() => window.location.href = '/'}
          style={{ cursor: 'pointer' }}
        />
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
        <button 
          className="book-now-btn"
          onClick={() => window.location.href = '/booking'}
        >
          Book&nbsp;Now
        </button>
      </div>
    </header>
  );
};

export default Header;