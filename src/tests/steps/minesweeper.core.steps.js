import { render, screen, fireEvent, expect } from '@testing-library/react'
import Game from '../../components/Game'

// const doLogin = (user, password) => {
//   fireEvent.change(screen.getByLabelText('User'), { target: { value: user } })
//   fireEvent.change(screen.getByLabelText('Password'), { target: { value: password } })
//   fireEvent.click(screen.getByText('Login'))
// }

export const MineSweeperSteps = {
  TheUserOpensTheGame () {
    render(<Game />)
  },
  TheUserOpensTheGameLoadingTheFollowingMockData (mockData) {
    render(<Game mockData={mockData} />)
  },
  TheUserShouldWinTheGame () {
    expect(screen.getByText('You win!')).toBeInTheDocument()
  },
  AllTheCellsInTheBoardShouldBeCovered () {
    // LoginScreenSteps.IEnterUsernameAndPassword(user, password)
  }
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
}
