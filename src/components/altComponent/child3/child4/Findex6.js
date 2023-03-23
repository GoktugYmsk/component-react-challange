import React from 'react'

function Findex6({setHandle}) {

  const handleChild = () =>{
    setHandle(true)
  }

  return (
    <div>
      <button onClick={handleChild} >Child3 button 6</button>
    </div>
  )
}

export default Findex6
