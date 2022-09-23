// import ReactDOM from 'react-dom'
// import { useState } from 'react'
// import mineImage from './resources/mine.svg'
// import flagImage from './resources/flag.svg'
// import questionImage from './resources/question.svg'
// import explosionImage from './resources/explosion.svg'

const MineFieldCell = ({ cellInfo }) => {
  // const [isHiddenValue, setIsHidden] = useState(true)

  // const unleash = () => {
  //   setIsHidden(false)
  //   if (cellInfo === '*') {
  //     setCellInfo('explosion')
  //   }
  // }

  // const tag = (e) => {
  //   if (isHiddenValue) { e.preventDefault() }
  //   if (cellInfoValue === 'blank') {
  //     setCellInfo('flag')
  //   } else if (cellInfoValue === 'flag') {
  //     setCellInfo('question')
  //   } else if (cellInfoValue === 'question') {
  //     setCellInfo('blank')
  //   }
  // }

  /*

  const tagAsUnconclusive = () => {
    setCellInfo(cellInfo)
  }
  */

  // const getTagImage = (tag) => {
  //   if (tag === 'flag') {
  //     return flagImage
  //   } else if (tag === 'question') {
  //     return questionImage
  //   } else {
  //     return ''
  //   }
  // }

  return (
    <div className='mine-field-cell'>
      <button style={{ width: '100%', height: '100%' }}>X</button>
    </div>
  )
  // if (isHiddenValue) {
  //   return (
  //     <div className='mine-field-cell'>
  //       <button onClick={unleash} onContextMenu={tag}>
  //         {(cellInfoValue !== 'blank') ? <img src={getTagImage(cellInfoValue)} className='svg-icon' /> : ''}
  //       </button>
  //     </div>
  //   )
  // } else if (cellInfoValue === 'explosion') {
  //   console.log('Render #1  -  Mine')
  //   return (<div className='mine-field-cell highlight'><img src={mineImage} className='svg-icon' /></div>)
  // } else {
  //   console.log('Render #2  -  No Mine')
  //   return (
  //     <div className='mine-field-cell'>
  //       <div className='mine-field-cell'><p className='cell-number'>{cellInfoValue}</p></div>
  //     </div>
  //   )
  // }
}

export default MineFieldCell
