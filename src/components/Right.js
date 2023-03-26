import React from 'react'

import RightAlt1 from './rightAlt/RightAlt1'
import RightAlt2 from './rightAlt/RightAlt2'

function Right({ setShow, click,setFollow,theme ,setTheme,change,write}) {
  return (
    <div>
      <RightAlt1 setShow={setShow} change={change} write={write} />
      <RightAlt2 click={click} setFollow={setFollow} theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Right
