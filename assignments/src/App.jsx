import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Grocery } from './components/Grocery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
     
      < Grocery/>

    </div>
  )
}

export default App
