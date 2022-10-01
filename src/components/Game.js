import './styles/Game.css'
import MineField from './MineField'
// import { useState, useEffect } from 'react'

// import { getByDisplayValue } from '@testing-library/react'
const loseGame = () => {
  const status = document.getElementById('status')
  status.innerHTML = 'GAME OVER'
}

const Game = ({ mockData }) => {
  return (
    <div className='game'>
      <div><h1>The React Minesweeper</h1></div>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div>
        <div id='status' />
        <ol>{/* TODO */}</ol>
      </div>
      <MineField mockData={mockData} loseGame={loseGame} />
    </div>
  )
}

export default Game
