import './styles/MineFieldCell.css'
// import ReactDOM from 'react-dom'
// import { useState } from 'react'
// import mineImage from './resources/mine.svg'
import flagImage from './resources/flag.svg'
import questionImage from './resources/question.svg'
import explosionImage from './resources/explosion.svg'

// const MineFieldCell = ({ cellInfo, updateFlag, revealCell }) => {
const MineFieldCell = ({ cellInfo, updateTag, unleashCell }) => {
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

  /*
      board[i].push({
        isRevealed: false,
        isFlagged: false,
        isMine: false,
        isQuestionMarked: false,
        numberOfMinesAround: 0
      })
*/

  const getHiddenCell = (tag) => {
    let imgSrc
    let nextTag = 'mined'

    if (tag === 'mined') {
      imgSrc = flagImage
      nextTag = 'question'
    } else if (tag === 'question') {
      nextTag = ''
      imgSrc = questionImage
    }

    // console.log('tag', tag, 'nextTag', nextTag, 'imgSrc', imgSrc)

    return (
      <button
        type='button'
        data-testid={'cell-row' + cellInfo.y + '-col' + cellInfo.x}
        className='mine-field-cell-button'
        onContextMenu={(e) => updateTag(e, cellInfo.y, cellInfo.x, nextTag)}
        onClick={(e) => unleashCell(e, cellInfo.y, cellInfo.x)}
      >
        {imgSrc ? <img className='mine-field-cell-image' src={imgSrc} alt='' /> : ''}
      </button>
    )
  }

  const getRevealedCellContent = () => {
    if (cellInfo.isMine) {
      return <img className='mine-field-cell-image' src={explosionImage} alt='' />
    } else if (cellInfo.numberOfMinesAround > 0) {
      return cellInfo.numberOfMinesAround
    } else {
      return ''
    }
  }

  const getRevealedCell = () => {
    return (
      <p data-testid={'cell-row' + cellInfo.y + '-col' + cellInfo.x}>
        {getRevealedCellContent()}
      </p>
    )
  }

  return (
    <div className='mine-field-cell'>
      {cellInfo.isRevealed ? getRevealedCell() : getHiddenCell(cellInfo.userTag)}
    </div>
  )
}

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

export default MineFieldCell
