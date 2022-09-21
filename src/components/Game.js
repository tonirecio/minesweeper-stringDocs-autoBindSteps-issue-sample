import MineField from './MineField'
import MineFieldCell from './MineFieldCell'
import { validateMockData, createBoardFromMockData } from '../helpers/mockDataHelper'

const Game = ({ mockData }) => {
  let _gameBoard = []

  const minefieldMining = (amount) => {
    let mines = 0
    while (mines < amount) {
      const randomRow = Math.floor(Math.random() * _gameBoard.length)
      const randomColumn = Math.floor(Math.random() * _gameBoard[0].length)
      if (_gameBoard[randomRow][randomColumn] !== '*') {
        _gameBoard[randomRow][randomColumn] = '*'
        mines += 1
      }
    }
  }

  const createBoard = (rows, columns, mines) => {
    const board = []
    for (let i = 0; i < rows; i += 1) {
      board.push([])
      for (let j = 0; j < columns; j += 1) {
        board[i].push('o')
      }
    }
    return board
  }

  const initialize = () => {
    if (mockData && validateMockData(mockData)) {
      _gameBoard = createBoardFromMockData(mockData)
    } else {
      _gameBoard = createBoard(8, 8, 10)
      minefieldMining(10)
    }
    // _userInteractionBoard = createUserInteractionBoard()
    // totalMines = getTotalMines(_gameBoard)
    // taggedMines = 0
    // wellTaggedMines = 0
    // displayBoard()
    // evaluateBoard()

    // setCellIcon(1, 3, 'explosion')
    // setCellIcon(1, 1, 'naval-mine')
    console.log(_gameBoard)
  }

  const getMinefieldCells = () => {
    return _gameBoard.map((row, rowindex) => {
      return row.map((cell, cellindex) => {
        return (<MineFieldCell key={`${rowindex}-${cellindex}`} cellInfo={cell} />)
      })
    })
  }

  initialize()

  return (
    <div className='game'>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div className='game-board'>
        <MineField rows={3} columns={3}>
          {getMinefieldCells()}
        </MineField>
      </div>
    </div>
  )
}

export default Game
