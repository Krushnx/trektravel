import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./infopage.css";
import Button1 from "../../Genral/Button1";
import { Carousel } from "react-responsive-carousel";
import ReadMore from "../../Genral/readmore";
import link from "../../../backendlink";
import Review from "./Review";
import ShareButton from "../../Genral/shareModal";
import AddReview from "./addReview";
import { TailSpin } from "react-loader-spinner";




function InfoPage() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});
  const navigate = useNavigate(); // Get the navigate function
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

  


  const fetchData = () => {
    fetch(`${link}/hotels/${hotelId}`)
      .then((response) => {
        if (!response.ok) {
          navigate("/page-not-found");
          return;
        }
        return response.json();
      })
      .then((data) => {
        setHotel(data);
        setLoading(false);
        setDataFetched(true);

      })
      .catch((error) => {
        console.error("Error fetching hotel details:", error);
        // Handle the error as needed, e.g., show an error message to the user
      });
  };
  



  useEffect(() => {
    fetchData();

   
  }, [hotelId, navigate ]);



  

  var tag = "Wrost";

  function getStatus() {
    if (hotel.rating > "9") {
      tag = "Excellent";
    } else if (hotel.rating > "8") {
      tag = "Good";
    } else if (hotel.rating > "7") {
      tag = "Good";
    } else if (hotel.rating > "6") {
      tag = "Avarage";
    }
    return tag;
  }

  getStatus();
  var tagcolor = tag + "Color";
 
 
  var pr = hotel.price || "123";
  var fpr = hotel.fakePrice || "123";
  var cnt = hotel.reviewCount || "123";

  var imgs = hotel.images || [];
  var fea = hotel.features || [];
  var hotelreviews = hotel.reviews || [];
  var mainlink = "https://trek-tide.web.app/hotels/";
  mainlink = mainlink + hotelId;

  return (
    
    <div>
    {loading ? (
      <div className="center">
        <TailSpin 
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    ) : (
      <div className="Infopage">
      <div className="hotel-content">
        <div className="hotel-page-preview">
          <Carousel
            showArrows={false}
            // showThumbs={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            emulateTouch={true}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div>
              <img src={hotel.mainImage} alt="Loading.." />
            </div>
            <div>
              <img src={hotel.image2} alt="Loading.." />
            </div>
            <div>
              <img src={hotel.image3} alt="Loading.." />
            </div>
          </Carousel>
          <div className="book-now">
            <Button1 name="Book Now" />
          </div>
          <div className="hotel-page-gallery">
            {imgs.map((image, index) => (
              <img
                key={index} // Use a unique key for each img element
                src={image}
                alt="Loading..."
              />
            ))}
          </div>
        </div>

        <div className="hotel-page-info">
          <h2>
            {hotel.name}, {hotel.city}
          </h2>
          <h3 className="hotel-subtitle">{hotel.subtitle}</h3>
          <div className="hotel-page-rating">
            <h3>{hotel.rating}</h3>
            <h4 className={tagcolor}>{tag}</h4>
            <h1 className="hotel-review-count">
              | {cnt.toLocaleString("en-IN")} Reviews
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <h3 className="price">₹ {pr.toLocaleString("en-IN")}</h3>
            <h3 className="fake-price">₹ {fpr.toLocaleString("en-IN")}</h3>
          </div>
          <ReadMore content={hotel.information} />
          <div style={{ display: "flex", cursor: "pointer" }}>
            <ShareButton
              mainlink={mainlink}
              whatsapp={
                "https://wa.me/?text=Hey there,Check out this amazing hotel I found online on TrekTide:" +
                mainlink
              }
            />
            <div
              style={{
                fontSize: "19px",
                margin: "auto 9px",
                fontFamily: "Gill Sans",
              }}
            >
              {" "}
              Share {hotel.name}, {hotel.city}
            </div>
          </div>

          <div className="hotel-page-highlights">
            <h4>Highlights</h4>
            <div className="highlight-list">
              {fea.map((i) => (
                <div style={{ display: "flex", margin: "6px 0px" }}>
                  <i className="material-icons">star_rate</i>
                  <div style={{ margin: "auto 9px" }}>{i}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="hotel-page-gallery hotel-page-extra"
            style={{ marginTop: "75px" }}
          >
            <img src={hotel.image2} alt="Loading.." />
            <img src={hotel.image3} alt="Loading.." />
          </div>
        </div>
      </div>
      <div className="hotel-page-reviews">
        <div className="hotel-page-line"></div>
        <h2 style={{ textAlign: "center" }}>Add your Review</h2>
        <AddReview hotelid={hotelId} />
        <div className="hotel-page-line"></div>
        <h2>Read Reviews of {hotel.name}</h2>
        {hotelreviews.map((review) => (
          <Review
            key={review._id}
            username={review.username}
            reviewRating={review.reviewRating}
            reviewTitle={review.reviewTitle}
            reviewDate={review.reviewDate}
            reviewDescription={review.reviewDescription}
          />
        ))}
      </div>


    </div>
    )}
  </div>
  );
}
export default InfoPage;
