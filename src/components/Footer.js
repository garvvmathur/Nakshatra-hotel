import React from 'react';
import './Footer.css';
import EmailLink from './EmailLink.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img 
              src="/images/hotel-logo-nobg.svg" 
              alt="Hotel Name Logo" 
              className="logo-image logo"
            />
          </div>
          <div className="footer-info">
            <div className="contact-item">
              <strong>Address:</strong>
              <p>Hotel Nakshatra, Nakshatra Mall<br />Udaipur-Dungarpur Link Road<br />Banswara, Rajasthan - 327001</p>
            </div>
            <div className="contact-item">
              <strong>Contact at:</strong>
              <p><a href="tel:+912962250909">+91-2962-250909</a></p>
              <p><a href="tel:+919460900909">+91-9460-909-0909</a></p>
              <p><a href="tel:+919462944797">+91-9462-944-4797</a></p>
            </div>
            <div className="contact-item">
              <strong>or Email at:</strong>
              <p>
                <EmailLink 
                  email="nakshatrahotelbsw@gmail.com"
                  subject="Hotel Inquiry"
                  body="Hello, I would like to inquire about..."
                >
                  nakshatrahotelbsw@gmail.com
                </EmailLink>
              </p>
              </div>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="map-container">
            <iframe
              title="Hotel Nakshatra Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4126051635153!2d74.42436767455315!3d23.55362027880513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966c542524be3eb%3A0x8f3906156a3edf30!2sHotel%20Nakshatra!5e0!3m2!1sen!2sin!4v1749237857348!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;