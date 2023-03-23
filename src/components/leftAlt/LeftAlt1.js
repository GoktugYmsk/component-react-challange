import React from 'react'

import Child1 from './leftChildren/Child1'
import Child2 from './leftChildren/Child2'

function LeftAlt1({show}) {
  return (
    <div>
      <Child1 show={show} />
      <Child2/>
    </div>
  )
}

export default LeftAlt1
