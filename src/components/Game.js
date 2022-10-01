import './styles/Game.css'
import MineField from './MineField'
import MockDataLoader from './MockDataLoader'
import { useState, useEffect } from 'react'

// import { getByDisplayValue } from '@testing-library/react'

const Game = () => {
  const [mockData, setMockData] = useState('')
  const [isMockMode, setMockMode] = useState(false)

  const handleKeyPress = (event) => {
    if (event.ctrlKey === true && event.key.toUpperCase() === 'M') {
      setMockMode(!isMockMode)
    }
  }

  const loseGame = () => {
    const status = document.getElementById('status')
    status.innerHTML = 'GAME OVER'
  }

  const getData = (data) => {
    setMockData(data)
    setMockMode(false)
  }

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  console.log('MockData: ', mockData)
  return (
    <div className='game'>
      <div><h1>The React Minesweeper</h1></div>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div>
        <div id='status' />
        <ol>{/* TODO */}</ol>
      </div>
      {isMockMode ? <MockDataLoader getData={getData} /> : <div />}
      <MineField mockData={mockData} loseGame={loseGame} />
    </div>
  )
}

export default Game
