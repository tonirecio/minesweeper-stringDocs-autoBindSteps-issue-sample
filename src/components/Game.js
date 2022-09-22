// import './styles/Game.css'
import MineField from './MineField'
// import MineFieldCell from './MineFieldCell'
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

  const getMinefieldCells = () => {
    return gameBoard.map((row, rowindex) => {
      return (
        <div className='board-row' key={rowindex}>
          key={rowindex} style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {row.map((cell, cellindex) => {
            return (
              <div key={cellindex} style={{ display: 'flex' }}><button /></div>
            )
          })}
        </div>
      )
    })
  }

  // const getMinefieldCells = () => {
  //   return gameBoard.map((row, rowindex) => {
  //     return row.map((cell, cellindex) => {
  //       return (
  //         <button key={`${rowindex}-${cellindex}`} cellInfo={cell} />
  //         // <MineFieldCell
  //         //   key={`${rowindex}-${cellindex}`} cellInfo={cell}
  //         // />
  //       )
  //     })
  //   })
  // }

  return (
    <div className='game'>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <MineField rows={APP.NUMBER_OF_ROWS} columns={APP.NUMBER_OF_COLUMNS}>
        {getMinefieldCells()}
      </MineField>
    </div>
  )
}

export default Game
