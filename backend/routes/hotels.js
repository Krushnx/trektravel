const express = require('express');
const router = express.Router();
const hotelSchema = require('../model/hotelSchema');

async function getHotels(req , res , next)
{
    let hotel;
    try {
        
        hotel = await hotelSchema.findById(req.params.id); 
        if(hotel == null)
        {
            return res.status(404).json({message : "The Gun you are looking fir is not found in the database"});
        }

    } catch (error) {
        
    }

    res.hotel = hotel;
    next()
}


router.get('/' ,async (req , res)=>
{

    try {
        const result = await hotelSchema.find();
        res.json(result);
    } catch (error) {

        res.status(500).json({message : error.message});
        
    }
})


router.get('/:id' , getHotels , (req , res)=>
{

    try {
        res.json(res.hotel)
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})



// POST a new hotel


router.post('/' , async(req , res)=>
{
    const newEntry = new hotelSchema({
        name: req.body.name,
        city: req.body.city,
        subtitle: req.body.subtitle,
        information: req.body.information,
        rating: req.body.rating,
        reviewCount: req.body.reviewCount,
        price: req.body.price,
        fakePrice: req.body.fakePrice,
        features: req.body.features,
        mainImage: req.body.mainImage,
        image2: req.body.image2,
        image3: req.body.image3,
        images: req.body.images,
        link: req.body.link,       
        catogary: req.body.catogary  
    })

    try {

        const postEntry = await newEntry.save();
        res.json(postEntry);
        
    } catch (error) {
        res.status(500).json({message : error.message});

    }
})



router.patch('/:id' , getHotels,async(req,res)=>{


    if (req.body.name != null) {
        res.hotel.name = req.body.name;
    }
    if (req.body.city != null) {
        res.hotel.city = req.body.city;
    }
    if (req.body.subtitle != null) {
        res.hotel.subtitle = req.body.subtitle;
    }
    if (req.body.information != null) {
        res.hotel.information = req.body.information;
    }
    if (req.body.rating != null) {
        res.hotel.rating = req.body.rating;
    }
    if (req.body.reviewCount != null) {
        res.hotel.reviewCount = req.body.reviewCount;
    }
    if (req.body.price != null) {
        res.hotel.price = req.body.price;
    }
    if (req.body.fakePrice != null) {
        res.hotel.fakePrice = req.body.fakePrice;
    }
    if (req.body.features != null) {
        res.hotel.features = req.body.features;
    }
    if (req.body.mainImage != null) {
        res.hotel.mainImage = req.body.mainImage;
    }
    if (req.body.image2 != null) {
        res.hotel.image2 = req.body.image2;
    }
    if (req.body.image3 != null) {
        res.hotel.image3 = req.body.image3;
    }
    if (req.body.images != null) {
        res.hotel.images = req.body.images;
    }
    if (req.body.catogary != null) {
        res.hotel.catogary = req.body.catogary;
    }
    if (req.body.link != null) {
        res.hotel.link = req.body.link;
    }
    


    try 
    {
        const patchEntry = await res.hotel.save();
        res.json(patchEntry);
        

        
    } catch (error) {
        res.status(400).json({message : error.message});
      
    }



})


module.exports = router;

