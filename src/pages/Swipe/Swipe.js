import React, { useState, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './Swipe.css'
import './components/FoodCard/FoodCard.js'
import FoodCard from './components/FoodCard/FoodCard.js';

  
export default function Swipe() {
  const navigate = useNavigate();

  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#e8e8e8'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#0a043c'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: 'black'
    }
  ];

    return (
        <>
          <Header/>
          <div className='swipe-heading'>
              <h1 className='heading'>Swipe<span>Ripe</span></h1>
                  <Card className='beigeCard' content={
                    <>
                        <div className='cardyContainer'>
                          
                          {cards.map((card) => (
                            <FoodCard image={card.image} color={card.color} />
                            
                          ))}
                      </div> 
                    </>
                     
                  }/>
                   
              
        </div>
        </>
    )
  }
  


