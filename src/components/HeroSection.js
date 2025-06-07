import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './HeroSection.css';

const HeroSection = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date(Date.now() + 86400000)); // Tomorrow
  const [guests, setGuests] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleBooking = () => {
    const bookingData = {
      arrival: arrivalDate,
      departure: departureDate,
      guests: guests
    };
    
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    window.location.href = '/booking';
  };

  const guestOptions = [1, 2, 3];

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Nakshatra</h1>
            <p><i>Your perfect getaway awaits</i></p>
          </div>
          
          <div className="booking-form-hero">
            <div className="form-group">
              <label>Arrival Date</label>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => setArrivalDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="date-input"
                placeholderText="Select arrival date"
              />
            </div>
            
            <div className="form-group">
              <label>Departure Date</label>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={arrivalDate || new Date()}
                className="date-input"
                placeholderText="Select departure date"
              />
            </div>
            
            <div className="form-group">
              <label>Guests</label>
              <div className="guests-dropdown">
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="guests-input"
                  onFocus={() => setShowGuestDropdown(true)}
                  onBlur={() => setTimeout(() => setShowGuestDropdown(false), 200)}
                />
                {showGuestDropdown && (
                  <div className="guests-dropdown-menu">
                    {guestOptions.map(num => (
                      <button
                        key={num}
                        onClick={() => {
                          setGuests(num);
                          setShowGuestDropdown(false);
                        }}
                        className="guest-option"
                      >
                        {num} Guest{num > 1 ? 's' : ''}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <button className="book-now-hero-btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;