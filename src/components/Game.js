import './styles/Game.css'
import MineField from './MineField'
import { validateMockData, createBoardFromMockData } from '../helpers/mockDataHelper'
import { createBoard } from '../helpers/boardHelper'
import { useState, useEffect } from 'react'
import * as APP from '../App.consts'
// import { getByDisplayValue } from '@testing-library/react'

const Game = ({ mockData }) => {
  const [gameBoard, setGameBoard] = useState([])

  useEffect(() => {
    if (validateMockData(mockData)) {
      setGameBoard(createBoardFromMockData(mockData))
    } else {
      setGameBoard(createBoard(APP.NUMBER_OF_ROWS, APP.NUMBER_OF_COLUMNS, APP.NUMBER_OF_MINES))
    }
    console.log('gameboard', gameBoard)
  }, [])

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
      <MineField gameBoard={gameBoard} />
    </div>
  )
}

export default Game
