import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterLogo'>
         <img src={logo} alt=""/>
         <p className='Footerdounia'>DOUNIA</p>
         <p className='Footershop'>SHOP</p>
      </div>
      <hr />
      <p className='copyright'> Copyright @ 2024 - ALL Rights Reserved </p>
    </div>
  )
}
