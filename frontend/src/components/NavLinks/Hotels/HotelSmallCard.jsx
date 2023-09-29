import React from 'react';
// import './HotelSmallCard.css'; // Import the CSS file

const HotelSmallCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="hotel-small-card">
      <img
        src={imageUrl}
        alt={title}
        className="hotel-small-image"
      />
      <h2 className="hotel-small-title">{title}</h2>
      <p className="hotel-small-subtitle">{subtitle}</p>
    </div>
  );
};

export default HotelSmallCard;
