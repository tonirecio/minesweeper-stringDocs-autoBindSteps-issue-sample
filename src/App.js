import './App.css'
import MineField from './components/MineField'
import MineFieldCell from './components/MineFieldCell'

const App = () => (
  <div>
    <MineField rows={3} columns={3}>
      <MineFieldCell isMined={false} cellInfo='1' />
      <MineFieldCell isMined={false} isHidden={false} cellInfo='hidden' />
      <MineFieldCell isMined cellInfo='hidden' />
      <MineFieldCell isMined={false} cellInfo='hidden' />
    </MineField>
  </div>
)

export default App

// http://babeljs.io

// Azucarillo sintáctico

/*
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <p>Hola Mundo</p>
    </div>
  )
}

export default App
*/
