import React from 'react';
import './AmenitiesSection.css';

const AmenitiesSection = () => {
  const amenities = [
    [
      { icon: '📶', name: 'Free WiFi' },
      { icon: '🧑‍⚕️', name: 'Doctor on call' },
      { icon: '🛒', name: 'Shopping Center' },
      { icon: '🍴', name: '24/7 Room Service' }
    ],
    [
      { icon: '🍽️', name: 'Rooftop Restaurant' },
      { icon: '🍿', name: 'Multiplex' },
      { icon: '🧺', name: 'Laundry Service' },
      { icon: '🚗', name: 'Parking' }
    ],
    [
      { icon: '🚕', name: 'Taxi Service' },
      { icon: '👔', name: 'Business Halls' },
      { icon: '🛎️', name: '24/7 Availability' },
      { icon: '🏛️', name: 'Conference Rooms' }
    ]
  ];

  return (
    <section className="amenities-section">
      <h2>AMENITIES</h2>
      <div className="amenities-grid">
        {amenities.map((column, columnIndex) => (
          <div key={columnIndex} className="amenities-column">
            {column.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <span className="amenity-name">{amenity.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;