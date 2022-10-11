import './styles/MineField.css'
import { useState, useEffect } from 'react'
import MineFieldCell from './MineFieldCell'
import { validateMockData, createBoardFromMockData } from '../helpers/mockDataHelper'
import { createBoard } from '../helpers/boardHelper'
import * as APP from '../App.consts'

const MineField = ({ mockData, loseGame, winGame }) => {
  const [gameBoard, setGameBoard] = useState([])

  useEffect(() => {
    if (mockData && validateMockData(mockData)) {
      setGameBoard(createBoardFromMockData(mockData))
    } else {
      setGameBoard(createBoard(APP.NUMBER_OF_ROWS, APP.NUMBER_OF_COLUMNS, APP.NUMBER_OF_MINES))
    }
  }, [mockData])

  const disableAllCells = () => {
    const newBoard = [...gameBoard]
    for (let row = 0; row < newBoard.length; row++) {
      for (let col = 0; col < newBoard[0].length; col++) {
        console.log('disbale cell', row, col)
        newBoard[row][col].isEnabled = false
      }
    }
    setGameBoard(newBoard)
  }

  const handleLoseGame = () => {
    disableAllCells()
    loseGame()
  }

  const handleWinGame = () => {
    disableAllCells()
    winGame()
  }

  const areAllCellsWithoutMineUnconvered = () => {
    const result = gameBoard.every(
      row => row.every(
        cell => (cell.isMine === false && cell.isRevealed === true) ||
         (cell.isMine === true && cell.isRevealed === false)))
    return result
  }

  const updateTag = (e, row, column, tag) => {
    e.preventDefault()
    const newBoard = [...gameBoard]
    newBoard[row][column].userTag = tag
    setGameBoard(newBoard)
  }

  const unleashCell = (e, row, col) => {
    if (!gameBoard[row][col].isRevealed) {
      const newBoard = [...gameBoard]
      newBoard[row][col].isRevealed = true
      setGameBoard(newBoard)
      if (newBoard[row][col].isMine) {
        handleLoseGame()
      } else if (newBoard[row][col].numberOfMinesAround === 0) {
        if (row > 0 && col > 0) unleashCell(e, row - 1, col - 1)
        if (row > 0) unleashCell(e, row - 1, col)
        if (row > 0 && col + 1 < newBoard[0].length) unleashCell(e, row - 1, col + 1)
        if (col > 0) unleashCell(e, row, col - 1)
        if (col + 1 < newBoard[0].length) unleashCell(e, row, col + 1)
        if (row + 1 < newBoard.length && col > 0) unleashCell(e, row + 1, col - 1)
        if (row + 1 < newBoard.length) unleashCell(e, row + 1, col)
        if (row + 1 < newBoard.length && col + 1 < newBoard[0].length) unleashCell(e, row + 1, col + 1)
      }
      if (areAllCellsWithoutMineUnconvered()) {
        handleWinGame()
      }
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

  return (
    <div
      className='mine-field'
      data-testid='mine-field'
    >
      {getMinefieldCells()}
    </div>
  )
}

export default MineField
