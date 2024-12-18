import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-icon'>
        <img src={facebook_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={youtube_icon} alt="YouTube" />
      </div>

     
      <ul className='footer-links'>
       
        <li>About Us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Blog</li>

        
        <li>Contact Us</li>
        <li>Help Center</li>
        <li>FAQs</li>
        <li>Shipping Information</li>

        
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        
      </ul>
      <p className='copyright-text'>@ 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
