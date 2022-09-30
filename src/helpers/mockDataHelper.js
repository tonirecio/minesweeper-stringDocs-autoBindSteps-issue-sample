import { minefieldNumbering, defaultCellValues } from './boardHelper'

function validateMockDataRow (data) {
  const newLocal = '^[*o]*$'
  const regex = new RegExp(newLocal)
  return regex.test(data)
}

function validateMockDataRows (dataRows) {
  const currentLenght = dataRows[0].length
  let isValidData
  for (let i = 1; i < dataRows.length; i += 1) {
    if (dataRows[i].length !== currentLenght) {
      isValidData = false
      break
    }
    isValidData = true
  }
  return isValidData
}

export function validateMockData (data) {
  let isValidData
  if (data === undefined) {
    isValidData = false
  } else if (data.includes('-')) {
    isValidData = validateMockDataRows(data.split('-'))
  } else {
    isValidData = validateMockDataRow(data)
  }
  return isValidData
}

export function createBoardFromMockData (data) {
  const board = []
  const mockBoard = data.split('-').map((row) => { return row.split('') })

  for (let row = 0; row < mockBoard.length; row += 1) {
    board.push([])
    for (let column = 0; column < mockBoard[0].length; column += 1) {
      board[row].push({ ...defaultCellValues, y: row, x: column, isMine: mockBoard[row][column] === '*' })
    }
  }
  console.log('board', board)
  minefieldNumbering(board)
  return board
}
