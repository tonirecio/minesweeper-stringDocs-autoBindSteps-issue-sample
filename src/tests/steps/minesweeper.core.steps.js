import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../components/Game'
import * as APP from '../../App.consts'
import { parseMockDataToString } from '../../helpers/mockDataHelper'

export const openTheGame = () => {
  render(<Game />)
}

export const loadMockData = (mockData) => {
  userEvent.keyboard('{ctrl}m')
  const text = screen.getByTestId('mockDataLoader-textarea')
  const button = screen.getByTestId('mockDataLoader-loadButton')
  userEvent.clear(text)
  userEvent.type(text, mockData)
  // text.value = mockData
  userEvent.click(button)
}

export const uncoverCell = (row, col) => {
  userEvent.click(screen.getByTestId('cell-row' + row + '-col' + col))
}

export const isGameOver = () => {
  return screen.getByTestId('game-status').textContent === APP.GAME_STATUS_GAME_OVER
}

export const isUncovered = (row, col) => {
  const cell = screen.getByTestId('cell-row' + row + '-col' + col)
  // const button = cell.querySelector('button')
  return cell.nodeName !== 'BUTTON'
}

export const isValueInTheCell = (row, col, value) => {
  const cell = screen.getByTestId('cell-row' + row + '-col' + col)
  return cell.innerHTML === value
}

export const isCellShowingA = (row, col, element) => {
  let cellValue
  let result = false
  const cell = screen.getByTestId('cell-row' + row + '-col' + col)
  switch (element) {
    case '.':
      result = !isUncovered(row, col)
      break
    case '0':
      cellValue = cell.innerHTML
      result = cellValue === ''
      break
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
      cellValue = cell.innerHTML
      result = cellValue === element
      break
    case 'a highlighted mine':
      cellValue = cell.querySelector('img')
      result = cellValue.src.includes('explosion.svg')
      break
    default :
  }
  return result
}

export const areAllCellsCovered = () => {
  const mineField = screen.getByTestId('mine-field')
  const cells = mineField.querySelectorAll('.mine-field-cell-button')
  return cells.length === APP.NUMBER_OF_ROWS * APP.NUMBER_OF_COLUMNS
}

export const isMineFieldLookLike = (expectedMineFieldStatus) => {
  const strData = parseMockDataToString(expectedMineFieldStatus)
  const mineField = strData.split('-').map((row) => { return row.split('') })
  for (let row = 0; row < mineField.length; row++) {
    for (let col = 0; col < mineField[0].length; col++) {
      if (!isCellShowingA(row, col, mineField[row][col])) {
        return false
      }
    }
  }
  return true
}

// const doLogin = (user, password) => {
//   fireEvent.change(screen.getByLabelText('User'), { target: { value: user } })
//   fireEvent.change(screen.getByLabelText('Password'), { target: { value: password } })
//   fireEvent.click(screen.getByText('Login'))
// }

// export const MineSweeperSteps = {

// TheUserShouldWinTheGame () {
//   expect(screen.getByText('You win!')).toBeInTheDocument()
// },
// AllTheCellsInTheBoardShouldBeCovered () {
//   // LoginScreenSteps.IEnterUsernameAndPassword(user, password)
// }
// IAmOnTheLoginPage () {
//   render(<Game />)
// },
// IEnterAValidUsernameAndPassword () {
//   doLogin('GoodUser', 'GoodPassword')
// },
// IShouldBeLoggedIn () {
//   const welcomeElement = screen.getByText('Welcome to the app')
//   expect(welcomeElement).toBeInTheDocument()
// },
// IEnterUsernameAndPassword (user, password) {
//   doLogin(user, password)
// },
// IShouldNotBeLoggedIn () {
//   const welcomeElement = screen.getByText('Invalid credentials')
//   expect(welcomeElement).toBeInTheDocument()
// }
// }
