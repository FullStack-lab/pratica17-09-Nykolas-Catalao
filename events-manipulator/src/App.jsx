import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import CounterButton from './Components/CounterButton'
import Input from './Components/Input'


function App() {

  return (
    <>
      {/*<div className='event'>
        <h2>Evento onClick</h2>
        <Button/>
      </div>*/}
      {/*<div className='event'>
        <h2>Atualizando estado com evento</h2>
        <CounterButton/>
      </div>*/}
      <div className='event'>
        <h2>Evento onChange</h2>
        <Input/>
      </div>
    </>
  )
}

export default App
