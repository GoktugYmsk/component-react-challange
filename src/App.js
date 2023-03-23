import React, { useState } from 'react'

import Right from './components/Right'
import Left from './components/Left'
import './App.css'

function App() {
  const [show, setShow] = useState('')

  return (
    <div>
      <Left show={show} />
      <Right setShow={setShow} />
    </div>
  )
}

export default App
