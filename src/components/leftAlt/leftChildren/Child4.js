import React from 'react'

function Child4({click}) {
  return (
    <div>
      {click && 'bu mesaj left child1den left child4e iletilerek yazdırılmıştr'}
    </div>
  )
}

export default Child4
