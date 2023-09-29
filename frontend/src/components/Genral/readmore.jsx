import React, { useState } from 'react';

function ReadMore(props) {

  const content = props.content || 'Guest';


  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div style={{margin:"10px 0px"}}>
      {showFullContent ? (
        <p style={{ margin:"10px"}}>{content}</p>
      ) : (
        <p>{content.slice(0, 150)}...</p>
      )}
      <button onClick={toggleContent} className='readmore'>
        {showFullContent ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default ReadMore;
