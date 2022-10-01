import './styles/MineField.css'
import { useState, useEffect } from 'react'
import MineFieldCell from './MineFieldCell'
import { validateMockData, createBoardFromMockData } from '../helpers/mockDataHelper'
import { createBoard } from '../helpers/boardHelper'
import * as APP from '../App.consts'

const MineField = ({ mockData, loseGame }) => {
  const [gameBoard, setGameBoard] = useState([])

  useEffect(() => {
    if (mockData && validateMockData(mockData)) {
      setGameBoard(createBoardFromMockData(mockData))
    } else {
      setGameBoard(createBoard(APP.NUMBER_OF_ROWS, APP.NUMBER_OF_COLUMNS, APP.NUMBER_OF_MINES))
    }
  }, [mockData])

  const updateTag = (e, row, column, tag) => {
    e.preventDefault()
    const newBoard = [...gameBoard]
    newBoard[row][column].userTag = tag
    setGameBoard(newBoard)
  }

  const unleashCell = (e, row, column) => {
    const newBoard = [...gameBoard]
    newBoard[row][column].isRevealed = true
    setGameBoard(newBoard)
    if (newBoard[row][column].isMine) {
      loseGame()
    }
  }

  const getMinefieldCells = () => {
    return gameBoard.map((row, rowindex) => {
      return (
        <div
          className='mine-field-row' key={rowindex}
        >
          {row.map((cell, cellindex) => {
            return (
              <MineFieldCell
                key={`${rowindex}-${cellindex}`}
                cellInfo={cell}
                updateTag={updateTag}
                unleashCell={unleashCell}
              />
            )
          })}
        </div>
      )
    })
  }

  return (<div className='mine-field'>{getMinefieldCells()}</div>)
}

export default MineField
