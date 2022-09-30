import './styles/Game.css'
import MineField from './MineField'
// import { useState, useEffect } from 'react'

// import { getByDisplayValue } from '@testing-library/react'

const Game = ({ mockData }) => {
  return (
    <div className='game'>
      <div><h1>The React Minesweeper</h1></div>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <MineField mockData={mockData} />
    </div>
  )
}

export default Game
