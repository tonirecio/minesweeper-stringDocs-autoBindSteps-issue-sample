// import { useState, useEffect } from 'react'

const MineField = ({ rows, columns, children }) => {
  // const [dataMatrix, setDataMatrix] = useState([])

  return (<div className='mine-field' style={{ width: 40 * columns }}>{children}</div>)
}

export default MineField
