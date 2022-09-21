import './App.css'
import Game from './components/Game'

const App = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const mockData = urlParams.get('mockData')
  if (mockData) {
    return (<Game mockData={mockData} />)
  } else {
    return (<Game />)
  }
}

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
