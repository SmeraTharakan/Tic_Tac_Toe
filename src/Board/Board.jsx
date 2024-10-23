import React from 'react'
import Square from '../Square/Square.jsx'
import { useState } from 'react'
import './Board.css'

const Board = ({xIsNext,squares,onPlay,currentMove}) => {
    
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
        return;
    }
    const nextSquares =squares.slice();
    if (xIsNext ){
        nextSquares[i]='X';
    }else{
        nextSquares[i]='O';
    }

    onPlay(nextSquares)
    
  }
  const winner = calculateWinner(squares);
  let sent
  if (winner) {
        sent="Winner : " +winner;
  }else if(currentMove!==9) {
        sent= "Next player : " + (xIsNext? "X":"O");
  }else {
        sent ="It's a Draw !"
  }


  return (
    <>
        <h1 className="sent">{sent}</h1>
        
        <div className='board-row'>
            <Square value={squares[0]} onSquareClick={() =>handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() =>handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() =>handleClick(2)} />
        </div>

        <div className='board-row'>
            <Square value={squares[3]} onSquareClick={() =>handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() =>handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() =>handleClick(5)} />
        </div>

        <div className='board-row'>
            <Square value={squares[6]} onSquareClick={() =>handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() =>handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() =>handleClick(8)} />
        </div>
     
    </>
    
  );
}

function calculateWinner(squares) {
    const win =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i=0;i<win.length;i++){
        const [a,b,c]= win[i];
        if (squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
            return squares[a];
        }           
    }
    return null;
}

export default Board
