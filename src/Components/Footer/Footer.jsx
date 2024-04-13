import React from 'react';
import './Footer.css';
import logo from '../assets/LogoF.png';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterLogo'>
         <img src={logo} alt=""/>
      </div>
      <hr />
      <p className='copyright'> Copyright @ 2024 - ALL Rights Reserved </p>
    </div>
  )
}
