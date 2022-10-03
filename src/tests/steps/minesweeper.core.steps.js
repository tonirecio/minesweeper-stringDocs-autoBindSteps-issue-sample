/* e*slint-disable no-undef */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from '../../components/Game'

export const openTheGame = () => {
  render(<Game />)
}

export const loadMockData = async (mockData) => {
  // const game = screen.getByTestId('game')
  userEvent.keyboard('{ctrl}m')
  // fireEvent.keyDown(game, {
  //   key: 'Control',
  //   code: 'ControlLeft',
  //   keyCode: 17
  // })
  // fireEvent.keyDown(game, {
  //   key: 'M',
  //   code: 'KeyM',
  //   keyCode: 77
  // })
  // fireEvent.keyUp(game, {
  //   key: 'M',
  //   code: 'KeyM',
  //   keyCode: 77
  // })
  // fireEvent.keyUp(game, {
  //   key: 'Control',
  //   code: 'ControlLeft',
  //   keyCode: 17
  // })
  // fireEvent.keyDown(game, '{Control>}M{/Control}', { keyCode: 77 }, { keyCode: 17 }, { keyCode: 17 }, { keyCode: 77 })
  const text = screen.getByTestId('mockDataLoader-textarea')
  // const text = await waitForElement(() => screen.getByTestId('mockDataLoader-textarea'))
  const button = screen.getByTestId('mockDataLoader-loadButton')
  text.value = mockData
  userEvent.click(button)
}

export const uncoverCell = (row, col) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  userEvent.click(screen.getByTestId('cell-row' + numRow + '-col' + numCol))
}

export const isGameOver = async () => {
  // const status = screen.getByText('GAME OVER')
  // expect(getByText('some text')).toBeInTheDocument()
  // const status = screen.getByTestId('status')
  // const status = screen.getByTestId('status')
  // if (status.innerHTML === 'GAME OVER') {
  //   return true
  // } else {
  //   return false
  // }
  // expect(screen.findByText('GAME OVER')).toBeVisible()
  // const gameOverElement = screen.getByText('GAME OVER')
  // expect(gameOverElement).toBeInTheDocument()
  expect(await screen.findByText('GAME OVER')).toBeVisible()
  /// await waitFor(() => expect(inputNode).toHaveValue('Berlin'), { timeout: 4000 })
  /// expect(screen.getByText('GAME OVER')).not.toBeNull()
}

export const isUncover = (row, col) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  const cell = screen.getByTestId('cell-row' + numRow + '-col' + numCol)
  const button = cell.querySelector('button')
  expect(!button).toBe(true)
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
