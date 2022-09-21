// import ReactDOM from 'react-dom'
import { useState } from 'react'
import mineImage from './resources/mine.svg'

const MineFieldCell = ({ hasMine, cellInfo }) => {
  // const [hasMineValue, setHasMine] = useState(true)
  const [cellInfoValue, setCellInfo] = useState('hidden')

  console.log('MineFieldCell')
  const unleash = () => {
    if (hasMine) {
      setCellInfo('mine')
    }
  }

  const tag = (e) => {
    e.preventDefault()
    if (cellInfoValue === 'hidden') {
      setCellInfo('flag')
    } else if (cellInfoValue === 'flag') {
      setCellInfo('question')
    } else if (cellInfoValue === 'question') {
      setCellInfo('hidden')
    }
  }

  /*

  const tagAsUnconclusive = () => {
    setCellInfo(cellInfo)
  }
  */

  if (cellInfoValue === 'mine') {
    console.log('Render #1  -  Mine')
    return (<div className='mine-field-cell'><img src={mineImage} className='svg-icon' /></div>)
  } else {
    console.log('Render #2  -  No Mine')
    return (
      <div className='mine-field-cell'>
        <button onClick={unleash} onContextMenu={tag}>{cellInfoValue}</button>
      </div>
    )
  }
}

export default MineFieldCell
