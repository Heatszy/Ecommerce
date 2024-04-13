import React from "react";
import './Hero.css';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/her.png';

const Hero = () =>{

    return (
        <div className='hero' >
            <div className="hero-left" >
                <div>
                        <p>New</p>

                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <a href="#newcollections" className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </a>
            </div>
            <div className="hero-right" >
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero

