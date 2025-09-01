import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import CounterButton from './Components/CounterButton'


function App() {

  return (
    <>
      <div className='event'>
        <h2>Evento onClick</h2>
        <Button/>
      </div>
      <div className='event'>
        <h2>Atualizando estado com evento</h2>
        <CounterButton/>
      </div>
    </>
  )
}

export default App
