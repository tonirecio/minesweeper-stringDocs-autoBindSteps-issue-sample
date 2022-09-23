/* eslint-disable no-undef */
/* eslint-env mocha */
import { render, screen } from '@testing-library/react'
import App from './App'

test('Game title', () => {
  render(<App />)
  const linkElement = screen.getByText(/The React Minesweeper/i)
  expect(linkElement).toBeInTheDocument()
})
