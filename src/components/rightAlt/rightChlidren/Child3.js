import React from 'react'

function Child3({click}) {
  return (
    <div>
      {click && ' bu mesaj left child1 componentindeki butondan gelmektedir'}
    </div>
  )
}

export default Child3
