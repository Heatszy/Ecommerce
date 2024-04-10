import React from "react";
import Hero from '../Components/Hero/Hero.jsx';
import Popular from '../Components/popular/popular.jsx';
import Offers from '../Components/offers/offers.jsx';
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";
const Shop = () =>{
    
    return (
        <div >
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop

