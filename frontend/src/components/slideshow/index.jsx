import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {

  
    const names = ["Andaman" , "जयपुर" , "दिल्ली"];
    const info = ["Mauritius Islands" , "The Pink City", "City of Fallies"];
    const subtitle = ["Enjoy the Beauty of Indian Islands" , "Explore its stunning palaces, forts, and colorful architecture." , "The Capital of india with cultural architeture beauty of real india"]
    const imagePaths = [
    require('./images/image1.jpg'),
    require('./images/image2.jpg'),
    require('./images/image3.jpg')
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [backgroundImageStyle, setBackgroundImageStyle] = useState({
    backgroundImage: `url(${imagePaths[currentIndex]})`,
    transition: 'background-image 1s ease-in-out', // Add transition
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh', // Adjust this to your desired height
  });
  // console.log(preloadedImages);

  useEffect(() => {
    // Preload all images when the component mounts
    const preloadImages = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    setPreloadedImages(preloadImages);
  } , []);

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
    setBackgroundImageStyle({
      ...backgroundImageStyle,
      backgroundImage: `url(${imagePaths[index]})`,
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  

  

  return (
      <div className="carousel-background" id='Main' style={backgroundImageStyle}>
       <div id='Start'>
       </div>
      <Carousel
  showArrows={true}
  showThumbs={false}
  selectedItem={currentIndex}
  showStatus = {false}
  onChange={handleCarouselChange}
  useKeyboardArrows = {true}
  swipeable  ={true}
  emulateTouch = {true}
  infiniteLoop = {true}
  
>
        {names.map((name, index ) => (
          <div key={index} className="carousel-item">
            <h1>
                
            {name}
            

            <div >
                <p>{info[index]}</p>
                <h4>{subtitle[index]}</h4>
                <a href="/">
                    <h5>Explore Now !</h5>
                </a>
            </div>
           
            </h1>
          </div>
        ))}
      </Carousel>

      
        <div className='scrollbtn'>
        </div>
      
     
    </div>
  );
};

export default Slideshow;
