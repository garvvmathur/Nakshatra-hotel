import React from 'react';
import './RoomsSection.css';

const RoomsSection = () => {
  const roomTypes = [
    {
      id: 1,
      type: 'Family',
      image: `${process.env.PUBLIC_URL}/images/suite-room.jpg`,
      description: 'Luxurious suite with premium amenities'
    },
    {
      id: 2,
      type: 'Suite',
      image: `${process.env.PUBLIC_URL}/images/deluxe-room.jpg`,
      description: 'Comfortable deluxe room with modern facilities'
    },
    {
      id: 3,
      type: 'Executive',
      image: `${process.env.PUBLIC_URL}/images/executive-room.jpg`,
      description: 'Executive room perfect for business travelers'
    }
  ];

  const handleRoomClick = (roomType) => {
    window.location.href = `/gallery#${roomType.toLowerCase()}`;
  };

  return (
    <section id="rooms" className="rooms-section">
      <h2>ROOMS</h2>
      <div className="rooms-grid">
        {roomTypes.map(room => (
          <div 
            key={room.id} 
            className="room-card"
            onClick={() => handleRoomClick(room.type)}
            style={{cursor: 'pointer'}}
          >
            <div className="room-image-container">
              <img src={room.image} alt={room.type} />
              <div className="room-overlay">
                <h3 className="room-type">{room.type}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;