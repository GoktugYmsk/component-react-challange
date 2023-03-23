import React from 'react'

function Child1({ show,setClick}) {

 const handleClick = () =>{
  setClick(true)
 }
  
  return (
    <div className='leftChild1' >
      {show && 'bu mesaj right componentlerdeki alt componentten gelmektedir'}
      <p>{show}</p>

      <button onClick={handleClick} >right chlid1 deki button</button>
    </div>
  )
}

export default Child1
