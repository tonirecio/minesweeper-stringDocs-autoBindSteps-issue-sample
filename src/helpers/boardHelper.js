import * as APP from '../App.consts'

const minefieldMining = (board, amount) => {
  let mines = 0
  while (mines < amount) {
    const randomRow = Math.floor(Math.random() * APP.NUMBER_OF_ROWS)
    const randomColumn = Math.floor(Math.random() * APP.NUMBER_OF_COLUMNS)
    if (!board[randomRow][randomColumn].isMine) {
      board[randomRow][randomColumn].isMine = true
      mines += 1
    }
  }
}

const minefieldNumbering = (board) => {
  for (let row = 0; row < APP.NUMBER_OF_ROWS; row += 1) {
    for (let column = 0; column < APP.NUMBER_OF_COLUMNS; column += 1) {
      if (!board[row][column].isMine) {
        let mines = 0
        if (row > 0 && column > 0 && board[row - 1][column - 1].isMine) mines += 1
        if (row > 0 && board[row - 1][column].isMine) mines += 1
        if (row > 0 && column < APP.NUMBER_OF_COLUMNS - 1 && board[row - 1][column + 1].isMine) mines += 1
        if (column > 0 && board[row][column - 1].isMine) mines += 1
        if (column < APP.NUMBER_OF_COLUMNS - 1 && board[row][column + 1].isMine) mines += 1
        if (row < APP.NUMBER_OF_ROWS - 1 && column > 0 && board[row + 1][column - 1].isMine) mines += 1
        if (row < APP.NUMBER_OF_ROWS - 1 && board[row + 1][column].isMine) mines += 1
        if (row < APP.NUMBER_OF_ROWS - 1 && column < APP.NUMBER_OF_COLUMNS - 1 && board[row + 1][column + 1].isMine) mines += 1
        board[row][column].numberOfMinesAround = mines
      }
    }
  }
}

export const createBoard = (rows, columns, mines) => {
  const board = []
  for (let i = 0; i < rows; i += 1) {
    board.push([])
    for (let j = 0; j < columns; j += 1) {
      board[i].push({
        isRevealed: false,
        isFlagged: false,
        isMine: false,
        isQuestionMarked: false,
        numberOfMinesAround: 0
      })
    }
  }
  minefieldMining(board, mines)
  minefieldNumbering(board)
  console.log('createBoard', board)
  return board
}
