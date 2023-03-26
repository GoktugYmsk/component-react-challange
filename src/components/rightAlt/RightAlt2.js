import React from 'react'

import Child3 from './rightChlidren/Child3'
import Child4 from './rightChlidren/Child4'

function RightAlt2({click,setFollow,theme}) {
  return (
    <div>
      <Child3 click={click} />
      <Child4 setFollow={setFollow} />
    </div>
  )
}

export default RightAlt2
