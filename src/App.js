import React, { useState } from 'react'

import Right from './components/Right'
import Left from './components/Left'
import './App.css'

function App() {
  const [show, setShow] = useState('')
  const [click,setClick] = useState(false)

  return (
    <div>
      <Left show={show} setClick={setClick} click={click}  />
      <Right setShow={setShow} click={click} />
    </div>
  )
}

export default App
