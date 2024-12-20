import React, { useEffect, useRef, useState } from 'react';
import './Title.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router';
const Title = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzJmMTBmZjc1YTg0MmZjYjE3MmU0ZDFhYTQ5ZWIwOSIsIm5iZiI6MTczNDQ4MDAxOC43NjksInN1YiI6IjY3NjIxMDkyNjdjOTYzMjE4MDRhMTdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dJawqSh-CAYUz1uztDGOZhejK9hDsLxDnuk4J822lg'
    }
  };
  
  

  const handleWheel = (event) => {
    event.preventDefault(); 
    cardRef.current.scrollLeft += event.deltaY; 
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    const currentCardRef = cardRef.current;

    currentCardRef.addEventListener('wheel', handleWheel);
    
    
    return () => {
      currentCardRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className="card">
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Title;
