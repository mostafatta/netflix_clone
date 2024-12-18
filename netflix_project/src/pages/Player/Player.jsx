import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzJmMTBmZjc1YTg0MmZjYjE3MmU0ZDFhYTQ5ZWIwOSIsIm5iZiI6MTczNDQ4MDAxOC43NjksInN1YiI6IjY3NjIxMDkyNjdjOTYzMjE4MDRhMTdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dJawqSh-CAYUz1uztDGOZhejK9hDsLxDnuk4J822lg'
    }
  };
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/JN9OL64w8Zc&t=5450s' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
      
    </div>
  )
}

export default Player
