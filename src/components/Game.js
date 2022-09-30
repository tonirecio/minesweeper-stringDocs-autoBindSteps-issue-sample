import './styles/Game.css'
import MineField from './MineField'
import { useState, useEffect } from 'react'

// import { getByDisplayValue } from '@testing-library/react'

const Game = () => {
  const [mockData, setMockData] = useState()

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const urlValue = urlParams.get('mockData')
    setMockData(urlValue)
  }, [])

  return (
    <div className='game'>
      <div><h1>The React Minesweeper</h1></div>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <MineField mockData={mockData} />
    </div>
  )
}

export default Game
