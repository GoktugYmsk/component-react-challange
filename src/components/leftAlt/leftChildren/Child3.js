import React from 'react'

function Child3({ setTheme }) {

  const darkTheme = () => {
    setTheme(true)
  }
  const lightTheme = () => {
    setTheme(false)
  }

  return (
    <div>
      <button onClick={darkTheme} >Tema dark </button>
      <button onClick={lightTheme} >Tema light</button>
    </div>
  )
}

export default Child3
