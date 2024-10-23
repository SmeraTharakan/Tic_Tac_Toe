import React from 'react'
import './Square.css'
import { useState } from 'react'

const Square = ({value,onSquareClick}) => {

  const className = value==='X'? 'square X-player' : 'square O-player';
  return (
        <button className={className} onClick={onSquareClick}>{value} </button>
  )
}

export default Square
