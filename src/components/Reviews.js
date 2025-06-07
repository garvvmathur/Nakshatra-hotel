import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      review: "Nakshatra Hotel is hands down the best hotel in Banswara. From the moment we checked in, we felt welcomed. The rooms are super clean and well-maintained. The food was great too. A big shoutout to Ishant Ji, the manager, for being so humble and cooperative throughout our stay.",
      fullName: "Hrithik"
    },
    {
      id: 2,
      review: "Truly the best hotel in Banswara. Nakshatra Hotel has everything you need for a peaceful and quality stay. Spacious and hygienic rooms, good lighting, tasty food, and a supportive staff. They really care about your comfort and it shows in every small detail.",
      fullName: "Vinit"
    },
    {
      id: 3,
      review: "My experience in Nakshatra hotel was awesome. Room was comfortable and room service was exemplary. In all stay was very relaxing",
      fullName: "Varsha"
    },
    {
      id: 4,
      review: "Good hotel and comfortable stay in heart of banswara. Very near to all places and centrally located.",
      fullName: "Vaibhav"
    },
    {
      id: 5,
      review: "Best hotel to stay, nice co-operative staff and fantastic food, enjoyed staying here",
      fullName: "Rajeev"
    },
    {
      id: 6,
      review: "Location very close to Pratap Circle and nearby restaurants. Prompt service. Very hygienic place. Food is great and very affordable. Highly recommended.",
      fullName: "Moizur"
    }
  ];

  return (
    <section className="reviews-section">
      <h2>REVIEWS</h2>
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-content">
              <p>"{review.review}"</p>
            </div>
            <div className="reviewer-name">
              <strong>{review.fullName}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;