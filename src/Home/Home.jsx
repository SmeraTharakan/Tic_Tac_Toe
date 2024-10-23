import Game from '../Game/Game.jsx'
import { useState } from 'react'
import React from 'react'
import './Home.css'
import boardImage from '../assets/board.png';

export const Home = () => {

  const [startGame,setStartGame] =useState(false)

  const handleClickPlay =()=>{
    setStartGame(true)
  }
  const handleClickBack=()=>{
    setStartGame(false)
  }
  
  return (
    <div className="homepage">
      {startGame ? (
        <Game onGoBack={handleClickBack}/>
      ) : (
        <div className='content'>
          
          <img src={boardImage} id='board-img' onLoad={() => console.log('Image loaded successfully!')}/>
          <div className='col2'>
            <h1 className='title'>Tic-Tac-Toe</h1>
            
            <button  id="play" onClick={handleClickPlay}>
              Play
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Home;
