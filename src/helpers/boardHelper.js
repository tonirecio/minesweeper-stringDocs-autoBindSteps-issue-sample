const minefieldMining = (board, amount) => {
  const NUMBER_OF_ROWS = board.length
  const NUMBER_OF_COLUMNS = board[0].length
  let mines = 0
  while (mines < amount && mines < NUMBER_OF_ROWS * NUMBER_OF_COLUMNS) {
    const randomRow = Math.floor(Math.random() * NUMBER_OF_ROWS)
    const randomColumn = Math.floor(Math.random() * NUMBER_OF_COLUMNS)
    if (!board[randomRow][randomColumn].isMine) {
      board[randomRow][randomColumn].isMine = true
      mines += 1
    }
  }
}

export const minefieldNumbering = (board) => {
  const NUMBER_OF_ROWS = board.length
  const NUMBER_OF_COLUMNS = board[0].length
  for (let row = 0; row < NUMBER_OF_ROWS; row += 1) {
    for (let column = 0; column < NUMBER_OF_COLUMNS; column += 1) {
      if (!board[row][column].isMine) {
        let mines = 0
        if (row > 0 && column > 0 && board[row - 1][column - 1].isMine) mines += 1
        if (row > 0 && board[row - 1][column].isMine) mines += 1
        if (row > 0 && column < NUMBER_OF_COLUMNS - 1 && board[row - 1][column + 1].isMine) mines += 1
        if (column > 0 && board[row][column - 1].isMine) mines += 1
        if (column < NUMBER_OF_COLUMNS - 1 && board[row][column + 1].isMine) mines += 1
        if (row < NUMBER_OF_ROWS - 1 && column > 0 && board[row + 1][column - 1].isMine) mines += 1
        if (row < NUMBER_OF_ROWS - 1 && board[row + 1][column].isMine) mines += 1
        if (row < NUMBER_OF_ROWS - 1 && column < NUMBER_OF_COLUMNS - 1 && board[row + 1][column + 1].isMine) mines += 1
        board[row][column].numberOfMinesAround = mines
      }
    }
  }
}

export const defaultCellValues = {
  y: 0,
  x: 0,
  isRevealed: false,
  isEnabled: true,
  userTag: '',
  isMine: false,
  numberOfMinesAround: 0
}

export const createBoard = (rows, columns, mines) => {
  const board = []
  for (let row = 0; row < rows; row += 1) {
    board.push([])
    for (let column = 0; column < columns; column += 1) {
      board[row].push({ ...defaultCellValues, y: row, x: column })
    }
  }
  minefieldMining(board, mines)
  minefieldNumbering(board)
  return board
}
