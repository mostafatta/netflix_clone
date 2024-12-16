import React from 'react'
import './Home.css'
import Navbar from'../../components/Navbar/Navbar'
import hero_banner from '../../assets/ARCANE-SEASON-2-BANNER-Scaled.jpg'
import hero_title from '../../assets/download-removebg-preview.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Title from '../../components/Titilecard/Titile'
const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner}alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
          Arcane tells the story of sisters Vi and Jinx, torn apart by the conflict between Piltover’s progress and Zaun’s struggle. As Hextech advances Piltover, Zaun descends into chaos with the rise of Shimmer. </p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon}></img>More Info</button>
          </div>
<Title></Title>
        </div>
      </div>
    </div>
  )
}

export default Home
