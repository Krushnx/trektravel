import React from "react";
function HotelLargeCard(props) {

  var gotopage = "/hotels/" + props.link;
  var tag  = "Wrost";

  function getStatus()
  {
    if(props.rating > "9")
    {
      tag = "Excellent";
    }
    else if(props.rating > "8")
    {
      tag = "Good";
    }
    else if(props.rating > "7")
    {
      tag = "Good";
    }
    else if(props.rating > "6")
    {
      tag = "Avarage";
    }
    return tag;
  }

  getStatus();
  var tagcolor = tag + "Color";
  var ratingclass = tag + "Color " + tag + "BackColor";
  // console.log(tagcolor);



    // console.log(props.features);




  return (
    <div className="hotel-large-card">
      <div className="picinfo">

      <img
        src={props.img}
        alt=""
      />
      <div className="hotel-info">
        <h2>{props.name},{props.place}</h2>
          <p>{props.info}</p>
        {props.features && props.features.length > 0 && (
          <ul>
            {props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
        </div>

      <div className="hotel-booking">

      <div className="forphone">

        <div className="rating">
          <div className="hotel-numbers">
            <h4 className={tagcolor}>{tag}</h4>
            <p>{props.reviewCount} reviews</p>
          </div>
          <h3 className={ratingclass} >{props.rating}</h3>
        </div>
      <div>

        <h3 className="fake-price">₹ {props.fakePrice}</h3>
        <h3 className="price">₹ {props.price}</h3>
      </div>
      </div>
      <a href={gotopage}>
        <button>See Booking Options</button>
      </a>
      </div>
    </div>
  );
}
export default HotelLargeCard;

