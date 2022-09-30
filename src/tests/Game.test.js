/* eslint-disable no-undef */
/* eslint-env mocha */
import { render, screen } from '@testing-library/react'
import Game from '../components/Game'

test('Game title', () => {
  render(<Game />)
  const linkElement = screen.getByText(/The React Minesweeper/i)
  expect(linkElement).toBeInTheDocument()
})
