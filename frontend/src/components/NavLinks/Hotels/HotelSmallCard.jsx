import React from 'react';
// import './HotelSmallCard.css'; // Import the CSS file

const HotelSmallCard = ({ imageUrl, title, subtitle , link }) => {
  return (
    <a href={link} className='hotel-small-link'>

    <div className="hotel-small-card">
      <img
        src={imageUrl}
        alt={title}
        className="hotel-small-image"
        />
      <h2 className="hotel-small-title">{title}</h2>
      <p className="hotel-small-subtitle">{subtitle}</p>
    </div>
        </a>
  );
};

export default HotelSmallCard;
