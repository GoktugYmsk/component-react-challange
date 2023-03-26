import React from 'react'

import LeftAlt1 from './leftAlt/LeftAlt1'
import LeftAlt2 from './leftAlt/LeftAlt2'

function Left({show,setClick,click,follow,setTheme,setChange}) {
  return (
    <div>
      <LeftAlt1 show={show} setClick={setClick} />
      <LeftAlt2 click={click} follow={follow} setTheme={setTheme} setChange={setChange} />
    </div>
  )
}

export default Left
