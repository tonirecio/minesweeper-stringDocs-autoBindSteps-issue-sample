import { render, screen, fireEvent } from '@testing-library/react'
import Game from '../../components/Game'

export const openTheGame = () => {
  render(<Game />)
}

export const openTheGameWithMockData = (mockData) => {
  let strMockData
  if (typeof mockData === 'string' || mockData instanceof String) {
    strMockData = mockData
  } else {
    strMockData = mockData.join('-')
  }
  render(<Game mockData={strMockData} />)
}

export const uncoverCell = (row, col) => {
  const numRow = Number(row) - 1
  const numCol = Number(col) - 1
  fireEvent.click(screen.getByTestId('cell-row' + numRow + '-col' + numCol))
}

export const isGameOver = () => {
  // expect(getByText('some text')).toBeInTheDocument()
  return screen.getByText('GAME OVER') !== null
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
