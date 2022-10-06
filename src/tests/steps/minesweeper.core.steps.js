/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../components/Game'
import APP from '../../App.consts'

export const openTheGame = () => {
  render(<Game />)
}

export const loadMockData = async (mockData) => {
  userEvent.keyboard('{ctrl}m')
  const text = screen.getByTestId('mockDataLoader-textarea')
  const button = screen.getByTestId('mockDataLoader-loadButton')
  userEvent.clear(text)
  userEvent.type(text, mockData)
  // text.value = mockData
  userEvent.click(button)
}

export const uncoverCell = (row, col) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  userEvent.click(screen.getByTestId('cell-row' + numRow + '-col' + numCol))
}

export const isGameOver = async () => {
  expect(await screen.findByText('GAME OVER')).toBeVisible()
}

export const isUncovered = (row, col) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  const cell = screen.getByTestId('cell-row' + numRow + '-col' + numCol)
  const button = cell.querySelector('button')
  expect(!button).toBe(true)
}

export const isValueInTheCell = async (row, col, value) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  const cell = screen.getByTestId('cell-row' + numRow + '-col' + numCol)

  expect(cell).toHaveTextContent(value)
}

export const areAllCellsCovered = () => {
  const mineField = screen.getByTestId('mine-field')
  const cells = mineField.querySelectorAll('.mine-field-cell-button')
  return cells.length === APP.MINEFIELD_ROWS * APP.MINEFIELD_COLS
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
