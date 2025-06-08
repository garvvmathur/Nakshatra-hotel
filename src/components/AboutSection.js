// AboutSection.js - Updated with SEO content
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>ABOUT NAKSHATRA HOTEL</h2>
          <div className="about-text">
            <p>
              <strong>Hotel Nakshatra</strong> has been Banswara's premier destination for 
              <strong> luxury accommodation</strong> and <strong>exceptional hospitality</strong> since 2013. 
              Located strategically at Nakshatra Mall on the Udaipur-Dungarpur Link Road, we are 
              the <strong>best hotel in Banswara</strong> offering unmatched convenience in the heart 
              of Rajasthan's business and cultural hub.
            </p>
            
            <p>
              As a distinguished <strong>3-star business hotel in Banswara</strong>, we cater to 
              discerning business travelers, families, and tourists seeking 
              <strong> affordable luxury hotel experiences</strong>. Our prime location adjacent to 
              Nakshatra Mall provides guests with direct access to premium shopping, dining at 
              our rooftop restaurant, multiplex entertainment, and comprehensive business facilities.
            </p>
            
            <p>
              What sets us apart as the <strong>top luxury hotel near Banswara</strong> is our 
              commitment to providing <strong>budget-friendly accommodation</strong> without 
              compromising on quality. Every fully air-conditioned room features modern amenities, 
              complemented by our 24/7 room service, free WiFi, and round-the-clock availability 
              that makes us the <strong>most reliable hotel in Banswara</strong>.
            </p>
            
            <p>
              Our strategic position on the main Udaipur-Dungarpur corridor ensures excellent 
              connectivity for business meetings, with our dedicated business halls and banquet 
              facilities. Whether you're visiting Banswara for corporate engagements or exploring 
              Rajasthan's cultural treasures, <strong>Hotel Nakshatra</strong> serves as your 
              perfect base with taxi-on-call services, doctor-on-call facilities, and personalized 
              concierge assistance.
            </p>
            
            <p>
              Experience the perfect blend of <strong>affordable luxury, warm Rajasthani hospitality, 
              and modern convenience</strong> at Hotel Nakshatra – where every stay becomes a 
              cherished memory. Book your stay at Banswara's most trusted accommodation partner today.
            </p>
          </div>
          
          {/* SEO-friendly highlights */}
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>🏢 Prime Business Location</h4>
              <p>Heart of Banswara's business district with meeting facilities</p>
            </div>
            <div className="highlight-item">
              <h4>🛍️ Mall-Adjacent Convenience</h4>
              <p>Direct access to shopping, dining, and entertainment</p>
            </div>
            <div className="highlight-item">
              <h4>💰 Affordable Luxury</h4>
              <p>Premium amenities at budget-friendly rates</p>
            </div>
            <div className="highlight-item">
              <h4>🌟 Since 2014</h4>
              <p>Over a decade of trusted hospitality in Banswara</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img src="/images/hotel-exterior.jpg" alt="Hotel Nakshatra Banswara - Best Luxury Hotel in Banswara Rajasthan" />
          
          {/* Location info for local SEO */}
          <div className="location-info">
            <h4>📍 Our Location</h4>
            <address>
              <strong>Hotel Nakshatra</strong><br/>
              Nakshatra Mall, Udaipur-Dungarpur Link Road<br/>
              Banswara, Rajasthan - 327001<br/>
              <a href="tel:+919460900909">📞 Call: +91 9460 909 0909</a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;