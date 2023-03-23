import React from 'react'

import Child3 from './leftChildren/Child3'
import Child4 from './leftChildren/Child4'

function LeftAlt2({click}) {
  return (
    <div>
      <Child3/>
      <Child4 click={click} />
    </div>
  )
}

export default LeftAlt2
