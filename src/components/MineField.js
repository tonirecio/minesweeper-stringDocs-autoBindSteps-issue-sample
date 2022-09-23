// import { useState, useEffect } from 'react'
import { MineFieldCell } from './MineFieldCell'

const MineField = ({ gameBoard }) => {
  // const [dataMatrix, setDataMatrix] = useState([])

  const getMinefieldCells = () => {
    return gameBoard.map((row, rowindex) => {
      return (
        <div
          className='board-row' key={rowindex}
        >
          {row.map((cell, cellindex) => {
            return (
            // <div key={cellindex} style={{ display: 'flex' }}><button /></div>
              <MineFieldCell
                key={`${rowindex}-${cellindex}`} cellInfo={cell}
              />
            )
          })}
        </div>
      )
    })
  }

  return (<div className='mine-field'><p>hola</p></div>)
}

export default MineField
