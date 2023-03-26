import React, { useState } from 'react'

import Child3 from './leftChildren/Child3'
import Child4 from './leftChildren/Child4'

function LeftAlt2({click,follow,setTheme,setChange,setWrite}) {

  const activeInput= (e) =>{
    setChange(true)
    setWrite(e.target.value)
  }

  return (
    <div>
      <Child3 setTheme={setTheme}/>
      {follow && 'bu mesaj selecteki değerin değişmesiyle başka bir componentte tetiklenerek ortaya çıkar'}
      <Child4 click={click} />
      <input onChange={ e=> activeInput(e)}  placeholder='bu inputa mesaj girilince `` aktif olur' />
    </div>
  )
}

export default LeftAlt2
