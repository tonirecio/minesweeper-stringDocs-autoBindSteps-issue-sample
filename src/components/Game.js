import './styles/Game.css'
import MineField from './MineField'
import MockDataLoader from './MockDataLoader'
import { parseMockDataToString } from '../helpers/mockDataHelper'
import { useState, useEffect } from 'react'

// import { getByDisplayValue } from '@testing-library/react'

const Game = () => {
  const [gameStatus, setGameStatus] = useState('default')
  const [mockData, setMockData] = useState('')
  const [isMockMode, setMockMode] = useState(false)

  const handleKeyPress = (event) => {
    if (event.ctrlKey === true && event.key.toUpperCase() === 'M') {
      setMockMode(!isMockMode)
    }
  }

  const loseGame = () => {
    setGameStatus('GAME OVER')
  }

  const winGame = () => {
    setGameStatus('GAME WON')
  }

  const getData = (data) => {
    const strData = parseMockDataToString(data)
    setMockData(strData)
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

  return (
    <div className='game' data-testid='game'>
      <div><h1>The React Minesweeper</h1></div>
      <div><p>Mock Data: </p>
        <p>{mockData}</p>
      </div>
      <div>
        <p id='game-status' data-testid='game-status'>{gameStatus}</p>
      </div>
      {isMockMode ? <MockDataLoader getData={getData} /> : <div />}
      <MineField mockData={mockData} loseGame={loseGame} winGame={winGame} />
    </div>
  )
}

export default Game
