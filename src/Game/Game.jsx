import Board from "../Board/Board.jsx";
import Home from "../Home/Home.jsx";
import { useState } from "react";
import './Game.css'

import React from 'react'

const Game = ({onGoBack}) => {
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove] = useState(0);
  const xIsNext= currentMove%2===0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo (nextMove){
    setCurrentMove(nextMove);
  }

  const moves =history.map((squares,move) => {
    let description;
    if (move>0){
        description="Go to move " + move;
    }else{
        description="Go to game start";
    }

    return(
        <li key={move}>
            <button id="info" onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
  })

  function goBack(){
    <Home/>
  }


  return (
    <>
    <div className="game">
      <div id="board-info">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove}/>
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
      </div>
      <button id="back" onClick={onGoBack}>Home</button>
        
    </div>
    
    </>
    
  )
}

export default Game
