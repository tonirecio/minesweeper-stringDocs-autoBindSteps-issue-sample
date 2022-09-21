// import ReactDOM from 'react-dom'
import { useState } from 'react'
import mineImage from './resources/mine.svg'

const MineFieldCell = ({ isMined, isHidden, cellInfo }) => {
  const [isHiddenValue, setIsHidden] = useState(true)
  const [cellInfoValue, setCellInfo] = useState('blank')

  const unleash = () => {
    setIsHidden(false)
    if (isMined) {
      setCellInfo('explosion')
    }
  }

  const tag = (e) => {
    if (isHiddenValue) { e.preventDefault() }
    if (cellInfoValue === 'blank') {
      setCellInfo('flag')
    } else if (cellInfoValue === 'flag') {
      setCellInfo('question')
    } else if (cellInfoValue === 'question') {
      setCellInfo('blank')
    }
  }

  /*

  const tagAsUnconclusive = () => {
    setCellInfo(cellInfo)
  }
  */

  if (isHiddenValue) {
    return (
      <div className='mine-field-cell'>
        <button onClick={unleash} onContextMenu={tag}>{cellInfoValue}</button>
      </div>
    )
  } else if (cellInfoValue === 'mine') {
    console.log('Render #1  -  Mine')
    return (<div className='mine-field-cell'><img src={mineImage} className='svg-icon' /></div>)
  } else {
    console.log('Render #2  -  No Mine')
    return (
      <div className='mine-field-cell'>
        <div className='mine-field-cell'><p className='cell-number'>{cellInfoValue}</p></div>
      </div>
    )
  }
}

export default MineFieldCell
