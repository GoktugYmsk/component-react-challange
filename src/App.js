import React, { useEffect, useState } from 'react'

import Right from './components/Right'
import Left from './components/Left'
import './App.css'

function App() {
  const [show, setShow] = useState('')
  const [click,setClick] = useState(false)
  const [follow,setFollow] = useState(false)

  useEffect(()=>{
    console.log('çalıştı')
  },[follow])

  return (
    <div>
      <Left show={show} setClick={setClick} click={click} follow={follow} />
      <Right setShow={setShow} click={click} setFollow={setFollow} />
    </div>
  )
}

export default App
