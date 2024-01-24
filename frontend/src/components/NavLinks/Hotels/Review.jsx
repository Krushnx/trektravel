import React from 'react';
import './review.css'
import ReactStars from "react-rating-stars-component";


function Review(props)
{

    const formattedDate = new Date(props.reviewDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    
      });

    return(
        <div className='review'>
            <div className="review-profile  review-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png" alt="" />
                <p>{props.username}</p>
            </div>
            <div className="review-title review-item">
                <div className="review-stars"><ReactStars  isHalf= "true" count={5} value={props.reviewRating} size={30} activeColor="#ffae00"/></div>
                <p>{props.reviewTitle}</p>
            </div>
            <div className="review-time review-item">
                <p>Reviewed on {formattedDate}</p>
            </div>
            <div className="review-content review-item">
                <p>{props.reviewDescription}</p>
            </div>


        </div>
    );
}
export default Review;