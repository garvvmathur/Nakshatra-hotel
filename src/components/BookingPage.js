import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './BookingPage.css';
import { Helmet } from 'react-helmet';

const ROOM_TYPES = [
  {
    key: 'Suite',
    name: 'Suite',
    image: `${process.env.PUBLIC_URL}/images/suite-room2.webp`
  },
  {
    key: 'Family',
    name: 'Family',
    image: `${process.env.PUBLIC_URL}/images/family-room1.webp`
  },
  {
    key: 'Executive',
    name: 'Executive',
    image: `${process.env.PUBLIC_URL}/images/executive-room.webp`
  }
];

const COUNTRY_CODES = [
  { code: '+91', label: '🇮🇳 +91 (India)' },
  { code: '+1', label: '🇺🇸 +1 (USA)' },
  { code: '+44', label: '🇬🇧 +44 (UK)' },
  { code: '+61', label: '🇦🇺 +61 (Australia)' },
  { code: '+971', label: '🇦🇪 +971 (UAE)' },
];

const BookingPage = () => {
  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyyDamA27YV8se3Qk9mmXRWY7Tsf0BUNggouapVu2o1CLbiK-6fs6v6uVs_QAYzXOtj/exec';

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    arrival: '',
    departure: '',
    adults: 1,
    children: 0,
    roomType: '',
    breakfast: '',
    lunch: false,
    dinner: false,
    special: '',
    agree: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showFormError, setShowFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for loading state

  useEffect(() => {
    const prefill = localStorage.getItem('nakshatra_booking_prefill');
    if (prefill) {
      try {
        const data = JSON.parse(prefill);
        setForm(f => ({
          ...f,
          arrival: data.arrival || f.arrival,
          departure: data.departure || f.departure,
          adults: typeof data.adults === 'number' ? data.adults : f.adults,
          children: typeof data.children === 'number' ? data.children : f.children
        }));
        localStorage.removeItem('nakshatra_booking_prefill');
      } catch {}
    }
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoomSelect = key => {
    setForm(f => ({
      ...f,
      roomType: key,
      breakfast: '',
      lunch: false,
      dinner: false
    }));
    setErrors(e => ({ ...e, roomType: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phone.trim() || !/^\d{7,}$/.test(form.phone)) errs.phone = 'Valid phone required';
    if (!form.arrival) errs.arrival = 'Required';
    if (!form.departure) errs.departure = 'Required';
    if (form.arrival && form.departure && new Date(form.arrival) >= new Date(form.departure)) errs.departure = 'Departure must be after arrival';
    if (!form.adults || form.adults < 1) errs.adults = 'At least 1 adult';
    if (form.children < 0) errs.children = 'Cannot be negative';
    if (!form.roomType) errs.roomType = 'Select room type';
    if (!form.agree) errs.agree = 'Required';
    return errs;
  };

  // Updated handleSubmit with Google Sheets integration
const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  setErrors(errs);
  
  if (Object.keys(errs).length === 0) {
    setShowFormError(false);
    setIsSubmitting(true);

    try {
      const bookingData = {
        fullName: form.fullName,
        email: form.email,
        phone: `${form.countryCode} ${form.phone}`,
        arrivalDate: form.arrival,
        departureDate: form.departure,
        adults: parseInt(form.adults),
        children: parseInt(form.children),
        roomType: form.roomType,
        breakfast: form.breakfast === 'with' ? 'Yes' : 'No',
        lunch: form.lunch ? 'Yes' : 'No',
        dinner: form.dinner ? 'Yes' : 'No',
        totalPrice: 'bestPrice',
        specialRequests: form.special || 'None'
      };

      // const response = await fetch(GOOGLE_SCRIPT_URL, {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // This bypasses CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmitted(true);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);

    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Failed to submit booking. Please try again.');
    }
    
    setIsSubmitting(false);
  } else {
    setShowFormError(true);
  }
};

  if (submitted) {
    return (
      <>
        <Helmet>
          <link rel="canonical" href="https://www.nakshatrahotel.co.in/booking" />
        </Helmet>
        <Header />
        <div className="booking-confirmation">
          <h2>🎉 Thank you for your booking request!</h2>
          <p>We have received your details and saved them to our system. Our team will contact you soon to confirm your reservation.</p>
          <div className="confirmation-details">
            <h3>Booking Summary:</h3>
            <p><strong>Name:</strong> {form.fullName}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> {form.countryCode} {form.phone}</p>
            <p><strong>Check-in:</strong> {form.arrival}</p>
            <p><strong>Check-out:</strong> {form.departure}</p>
            <p><strong>Room Type:</strong> {form.roomType}</p>
            <p><strong>Total Price:</strong> Our management will contact you with best price.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.nakshatrahotel.co.in/booking" />
      </Helmet>
      <Header />
      <div className="booking-page">
        <h1>Book Your Stay</h1>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Full Name*
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </label>
            <label>
              Email Address*
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
              Phone Number*
              <div className="phone-input-group">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="country-code-select"
                >
                  {COUNTRY_CODES.map(opt => (
                    <option key={opt.code} value={opt.code}>{opt.label}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  style={{ flex: 1 }}
                />
              </div>
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
          </div>
          <div className="form-row">
            <label>
              Arrival Date*
              <input
                type="date"
                name="arrival"
                value={form.arrival}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.arrival && <span className="error">{errors.arrival}</span>}
            </label>
            <label>
              Departure Date*
              <input
                type="date"
                name="departure"
                value={form.departure}
                onChange={handleChange}
                min={form.arrival || new Date().toISOString().split('T')[0]}
              />
              {errors.departure && <span className="error">{errors.departure}</span>}
            </label>
          </div>
          <div className="form-row">
            <label>
              Number of Adults*
              <input type="number" name="adults" min="1" value={form.adults} onChange={handleChange} />
              {errors.adults && <span className="error">{errors.adults}</span>}
            </label>
            <label>
              Number of Child(s)
              <input type="number" name="children" min="0" value={form.children} onChange={handleChange} />
              {errors.children && <span className="error">{errors.children}</span>}
            </label>
          </div>
          
          <div className="form-row roomtype-row">
            <div className="roomtype-label">Room Type*</div>
            <div className="roomtype-cards">
              {ROOM_TYPES.map(room => (
                <div
                  key={room.key}
                  className={`roomtype-card${form.roomType === room.key ? ' selected' : ''}`}
                  onClick={() => handleRoomSelect(room.key)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={form.roomType === room.key}
                >
                  <img src={room.image} alt={room.name} className="roomtype-image" />
                  <div className="roomtype-name">{room.name}</div>
                  <div className="roomtype-price">
                    {/* <span className="roomtype-price-premium">INR {room.price} per night</span> */}
                    <span className="roomtype-price-premium">Best price guaranteed</span>
                  </div>
                </div>
              ))}
            </div>
            {errors.roomType && <span className="error">{errors.roomType}</span>}
          </div>
          
          {form.roomType && (
            <div className="form-row">
              <div className="room-options">
                <div
                  className={`meal-card${form.breakfast === 'with' ? ' selected' : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-pressed={form.breakfast === 'with'}
                  onClick={() =>
                    setForm(f => ({
                      ...f,
                      breakfast: f.breakfast === 'with' ? '' : 'with'
                    }))
                  }
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setForm(f => ({
                        ...f,
                        breakfast: f.breakfast === 'with' ? '' : 'with'
                      }));
                    }
                  }}
                >
                  <div className="meal-title">Breakfast</div>
                  {/* <div className="meal-price">+INR 200</div> */}
                  <div className="meal-desc">{form.breakfast === 'with' ? 'Included' : 'Not included'}</div>
                </div>
                
                <div
                  className={`meal-card${form.lunch ? ' selected' : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-pressed={form.lunch}
                  onClick={() =>
                    setForm(f => ({
                      ...f,
                      lunch: !f.lunch
                    }))
                  }
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setForm(f => ({
                        ...f,
                        lunch: !f.lunch
                      }));
                    }
                  }}
                >
                  <div className="meal-title">Lunch</div>
                  {/* <div className="meal-price">+INR 300</div> */}
                  <div className="meal-desc">{form.lunch ? 'Included' : 'Not included'}</div>
                </div>
                
                <div
                  className={`meal-card${form.dinner ? ' selected' : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-pressed={form.dinner}
                  onClick={() =>
                    setForm(f => ({
                      ...f,
                      dinner: !f.dinner
                    }))
                  }
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setForm(f => ({
                        ...f,
                        dinner: !f.dinner
                      }));
                    }
                  }}
                >
                  <div className="meal-title">Dinner</div>
                  {/* <div className="meal-price">+INR 400</div> */}
                  <div className="meal-desc">{form.dinner ? 'Included' : 'Not included'}</div>
                </div>
              </div>
              <div className="room-price" style={{marginTop: "1.2rem", width: "100%"}}>
                {/* <strong>Total per night: INR {totalPrice()}</strong> */}
                <strong>Note: Management will contact you with best price.</strong>
              </div>
            </div>
          )}
          
          <div className="form-row">
            <label>
              Special Requests
              <textarea name="special" value={form.special} onChange={handleChange} placeholder="Any special requests?" />
            </label>
          </div>
          <div className="form-row">
            <label className="checkbox-label">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
              I understand this is a booking request and not a confirmed reservation. I agree to the privacy policy and terms & conditions.
              {errors.agree && <span className="error">{errors.agree}</span>}
            </label>
          </div>
          
          {showFormError && (
            <div className="form-error-banner">
              Please fill all required fields correctly before submitting.
            </div>
          )}
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? '⏳ Submitting...' : '📋 Submit Booking Request'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
