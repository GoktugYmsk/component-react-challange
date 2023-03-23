import React from 'react'

function Findex6({ setHandle, setDifferent }) {

  const handleChild = () => {
    setHandle(true)
  }

  const differentChild = () => {
    setDifferent(true)
  }

  return (
    <div>
      <button onClick={handleChild}  >Child3 button 6</button>
      <br />
      <button onClick={differentChild} >Child3 button 6daki buton</button >
      <p>Bu butona tıklayınca ağacın diğer tarafındaki child3 componentlerinden biri çalışmalı</p>
    </div>
  )
}

export default Findex6
