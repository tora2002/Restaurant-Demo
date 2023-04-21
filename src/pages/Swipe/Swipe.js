import React, { useState, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './Swipe.css'
import './components/FoodCard/FoodCard.js'
import FoodCard from './components/FoodCard/FoodCard.js';



  
export default function Swipe() {
  const navigate = useNavigate();

  const handleSwipe = (d) => {
    //fill this your callback
  };
//This is a failed attempt at mapping the code
  // const arr = [
  //   {
  //     FoodCard
  //   },
  //   {
  //     FoodCard
  //   }
  // ]
    return (
        <>
          <Header/>
          <div className='swipe-page-layout'>
              <h1 className='heading'>Swipe<span>Ripe</span></h1>
              <Card className='beigeCard' content={
                <>
                  <FoodCard/>
                </>
              }/>
        </div>
        </>
    )
  }
  
