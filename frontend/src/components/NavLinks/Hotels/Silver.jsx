import React, { useEffect, useState } from "react"
import './Golden.css'
import HotelLargeCard from './HotelLargeCard';

function Silver() {


  const [hotels, sethotels] = useState([])

  const fetchUserData = () => {
    fetch("http://localhost:8000/hotels/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        sethotels(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  for (let i = hotels.length - 1; i >= 0; i--) {
    if (hotels[i].catogary !== "silver") {
      // Remove items that do not match the criteria
      hotels.splice(i, 1);
    }
  }
  


  return (
    <div style={{paddingTop:'85px'}}>

    {hotels.map(i=>(

      <HotelLargeCard img = {i.mainImage} name = {i.name} info = {i.subtitle} rating= {i.rating} place={i.city} fakePrice ={i.fakePrice} price = {i.price} features = {i.features} link = {i._id} reviewCount={i.reviewCount} />


    ))}


     
    </div>
    );
}

export default Silver;
