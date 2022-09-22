const MineField = ({ rows, columns, children }) => {
  return (<div className='mine-field' style={{ width: 40 * columns }}>{children}</div>)
}

export default MineField
