import React from 'react'

import Child1 from './rightChlidren/Child1'
import Child2 from './rightChlidren/Child2'

function RightAlt1({setShow,change,write}) {
  return (
    <div>
      <Child1 setShow={setShow} />
      <Child2 write={write} />
      {change && 'Çalıştı'}
    </div>
  )
}

export default RightAlt1
