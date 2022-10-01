import './styles/MockDataLoader.css'
// import { useState, useEffect } from 'react'
import { useState } from 'react'

// import { getByDisplayValue } from '@testing-library/react'

const MockDataLoader = ({ getData }) => {
  const [mockData, setMockData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    getData(mockData)
  }

  const handleInputChange = (e) => {
    setMockData(e.target.value)
  }

  return (
    <div className='mockDataLoader'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={mockData}
            cols='40'
            rows='8'
            onChange={handleInputChange}
            style={{ width: '100%', height: '300px' }}
          />
        </div>
        <button>Load</button>
      </form>
    </div>
  )
}

export default MockDataLoader
