import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import link from '../../../backendlink';
import axios from 'axios'
import AuthContext from '../../../context/authcontext'; // Import your AuthContext
function AddReview(props)
{   
    
  
    const navigate = useNavigate();
    const [reviewTitle , setTitle] = useState("");
    const [reviewDescription , setContent] = useState("");
    const [reviewRating , setRating] = useState(5);
     const [username , setusernmae] = useState("");
    const { loggedIn, user } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn) {
          setusernmae(user.name);
        }
      }, [loggedIn, user.name]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

    async function SubmitReview(e)
    {
  
   e.preventDefault();

   if(loggedIn === false)
   {
    alert("Please Log In / Sign Up to add your review");

   }
        
        try {
            
            const newReview = 
            {
                username, reviewTitle , reviewDescription , reviewRating 
            };

            const hello = {newReview}

            await axios.patch(`${link}/hotels/${props.hotelid}` , hello);
            // await getLoggedin();
            console.log( "This is the content ==> ", hello);
            window.location.reload();



        } catch (error) {
            console.log(error);
            
        }
    }



    return(
        <div className='addreview'>
            <form onSubmit={SubmitReview}>
                <div style={{display:"flex", flexDirection:"row"}}>

                <p>Review</p>
                </div>

                <div className='bdr'>
                <input required type="text" placeholder='Title of review...' onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <textarea required name="inp" id="" cols="50" rows="10" placeholder='Type your review here....' onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <ReactStars  isHalf= "true" count={5} value={5} size={30} activeColor="#ffae00" onChange={handleRatingChange} />
                <button>Add Review</button>
            </form>
        </div>
    );
}
export default AddReview;