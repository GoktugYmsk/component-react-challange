import React from 'react'

import Child3 from './rightChlidren/Child3'
import Child4 from './rightChlidren/Child4'

function RightAlt2({click,setFollow,theme,setTheme}) {
  return (
    <div >
      <Child3 click={click} theme={theme} setTheme={setTheme} />
      <Child4 setFollow={setFollow} />
    </div>
  )
}

export default RightAlt2
