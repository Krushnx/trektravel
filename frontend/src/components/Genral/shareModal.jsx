import React, { useState } from 'react';
import './share.css'
function ShareButton(props) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleViewClick = () => {
    setPopupVisible(!popupVisible);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };

  const handleCopyClick = () => {
    const input = document.querySelector(".field input");
    input.select();

    if (document.execCommand("copy")) {
      const field = document.querySelector(".field");
      field.classList.add("active");

      setTimeout(() => {
        window.getSelection().removeAllRanges();
        field.classList.remove("active");
      }, 3000);
    }
  };

  return (
    <div>
      <button className="view-modal" onClick={handleViewClick}>
      <i className="fa fa-share-alt"></i>
        
      </button>
      <div className={`popup ${popupVisible ? 'show' : ''}`}>
        <header>
          <span>Share Modal</span>
          <div className="close" onClick={handleCloseClick}>
            <i className="uil uil-times"></i>
          </div>
        </header>
        <div className="content">
          <p>Share this link via</p>
          <ul className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href={props.whatsapp}><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-telegram-plane"></i></a>
          </ul>
          <p>Or copy link</p>
          <div className="field">
            <i className="url-icon uil uil-link"></i>
            <input type="text" readOnly value={props.mainlink} />
            <button onClick={handleCopyClick}>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareButton;
