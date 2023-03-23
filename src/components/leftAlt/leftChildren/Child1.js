import React from 'react'

function Child1({ show }) {
  return (
    <div className='leftChild1' >
      {show && 'bu mesaj right componentlerdeki alt componentten gelmektedir'}
      <p>{show}</p>
    </div>
  )
}

export default Child1
