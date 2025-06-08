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
        { id: 1, src: `${process.env.PUBLIC_URL}/images/gallery1.jpg`, alt: 'Luxury Suite Bedroom' },
        { id: 2, src: `${process.env.PUBLIC_URL}/images/gallery2.jpg`, alt: 'Suite Living Area' },
        { id: 3, src: `${process.env.PUBLIC_URL}/images/gallery3.jpg`, alt: 'Suite Bathroom' },
        { id: 4, src: `${process.env.PUBLIC_URL}/images/gallery4.jpg`, alt: 'Suite Balcony' },
      ]
    },
    family: {
      title: "Family Rooms",
      images: [
        { id: 1, src: `${process.env.PUBLIC_URL}/images/gallery1.jpg`, alt: 'Luxury Suite Bedroom' },
        { id: 2, src: `${process.env.PUBLIC_URL}/images/gallery2.jpg`, alt: 'Suite Living Area' },
        { id: 3, src: `${process.env.PUBLIC_URL}/images/gallery3.jpg`, alt: 'Suite Bathroom' },
        { id: 4, src: `${process.env.PUBLIC_URL}/images/gallery4.jpg`, alt: 'Suite Balcony' },
      ]
    },
    executive: {
      title: "Executive Rooms",
      images: [
        { id: 1, src: `${process.env.PUBLIC_URL}/images/gallery1.jpg`, alt: 'Luxury Suite Bedroom' },
        { id: 2, src: `${process.env.PUBLIC_URL}/images/gallery2.jpg`, alt: 'Suite Living Area' },
        { id: 3, src: `${process.env.PUBLIC_URL}/images/gallery3.jpg`, alt: 'Suite Bathroom' },
        { id: 4, src: `${process.env.PUBLIC_URL}/images/gallery4.jpg`, alt: 'Suite Balcony' },
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