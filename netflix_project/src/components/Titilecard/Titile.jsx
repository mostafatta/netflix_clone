import React, { useEffect ,useRef } from 'react';
import './Title.css';
import cards_data from '../../assets/cards/Cards_data';

const Title = () => {
    const cardRef =useRef();
const handlewheel =(event)=>{
    event.preventDefualt();
    cardRef.current.scrollLeft+=event.deltay
}
useEffect(()=>{
    cardRef.current.addEventListener('wheel',handlewheel)
},[])
  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardRef}>
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="card">
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Title;
