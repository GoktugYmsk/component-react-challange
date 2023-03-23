import React from 'react'

function Child1({ setShow }) {

  const handleChange = (e) => {
    setShow(e.target.value)
  }

  return (
    <div>
      <input onChange={e => handleChange(e)} placeholder='bir mesaj giriniz' />
    </div>
  )
}

export default Child1
