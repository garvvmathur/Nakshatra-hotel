import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Get room type from URL hash (e.g., #suite, #family, #executive)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['suite', 'family', 'executive'].includes(hash)) {
      setSelectedCategory(hash);
    }
  }, []);

  const galleryData = {
    suite: {
      title: "Suite Rooms",
      images: [
        { id: 1, src: `${process.env.PUBLIC_URL}/images/suite-room1.webp`, alt: 'Suite Area' },
        { id: 2, src: `${process.env.PUBLIC_URL}/images/suite-room2.webp`, alt: 'Suite Room' },
        { id: 3, src: `${process.env.PUBLIC_URL}/images/suite-room3.webp`, alt: 'Suite Amenities' },
        { id: 4, src: `${process.env.PUBLIC_URL}/images/suite-room-bathroom.webp`, alt: 'Suite Bathroom' },
      ]
    },
    family: {
      title: "Family Rooms",
      images: [
        { id: 5, src: `${process.env.PUBLIC_URL}/images/family-room1.webp`, alt: 'Family suite Room' },
        { id: 6, src: `${process.env.PUBLIC_URL}/images/family-room2.webp`, alt: 'Family Suite Area' },
        { id: 7, src: `${process.env.PUBLIC_URL}/images/family-room3.webp`, alt: 'Family Suite Amenities' },
        { id: 8, src: `${process.env.PUBLIC_URL}/images/suite-room-bathroom.webp`, alt: 'Suite Bathroom' },
      ]
    },
    executive: {
      title: "Executive Rooms",
      images: [
        { id: 9, src: `${process.env.PUBLIC_URL}/images/executive-room1.webp`, alt: 'Exec Room Area' },
        { id: 10, src: `${process.env.PUBLIC_URL}/images/executive-room2.webp`, alt: 'Exec Room Amenities' },
        { id: 11, src: `${process.env.PUBLIC_URL}/images/executive-room3.webp`, alt: 'Exec Room Bed' },
        { id: 12, src: `${process.env.PUBLIC_URL}/images/executive-room-bathroom.webp`, alt: 'Exec Room Bathroom' },
      ]
    },
    others: {
      title: "Surroundings and more",
      images: [
        { id: 13, src: `${process.env.PUBLIC_URL}/images/gallery4.webp`, alt: 'Hotel Exterior' },
        { id: 14, src: `${process.env.PUBLIC_URL}/images/gallery5.webp`, alt: 'Hotel Exterior Night-time' },
        { id: 15, src: `${process.env.PUBLIC_URL}/images/gallery6.webp`, alt: 'Hotel Lobby' },
        { id: 16, src: `${process.env.PUBLIC_URL}/images/gallery7.webp`, alt: 'Hotel Lobby' },
        { id: 17, src: `${process.env.PUBLIC_URL}/images/gallery8.webp`, alt: 'Hotel Lobby' },
        { id: 18, src: `${process.env.PUBLIC_URL}/images/gallery9.webp`, alt: 'Hotel Lobby' }
      ]
    }
  };

  const getAllImages = () => Object.values(galleryData).flatMap(category => category.images);
  const getFilteredImages = () => selectedCategory === 'all' ? getAllImages() : galleryData[selectedCategory]?.images || [];

  return (
    <div className="gallery-page">
      <Header />
      <div className="gallery-hero">
        <h1>HOTEL GALLERY</h1>
        <p>Explore our beautiful rooms and facilities</p>
      </div>

      <div className="gallery-filters">
        <button 
          className={selectedCategory === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('all')}
        >
          All Rooms
        </button>
        <button 
          className={selectedCategory === 'suite' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('suite')}
        >
          Suite Rooms
        </button>
        <button 
          className={selectedCategory === 'family' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('family')}
        >
          Family Rooms
        </button>
        <button 
          className={selectedCategory === 'executive' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('executive')}
        >
          Executive Rooms
        </button>
        <button 
          className={selectedCategory === 'others' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('others')}
        >
          Surroundings and more
        </button>
      </div>

      <div className="gallery-grid">
        {getFilteredImages().map(image => (
          <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <span>View Full Size</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;