import React from 'react'

import RightAlt1 from './rightAlt/RightAlt1'
import RightAlt2 from './rightAlt/RightAlt2'

function Right({ setShow, click,setFollow }) {
  return (
    <div>
      <RightAlt1 setShow={setShow} />
      <RightAlt2 click={click} setFollow={setFollow} />
    </div>
  )
}

export default Right
