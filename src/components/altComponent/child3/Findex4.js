import React, { useEffect, useState } from 'react'
import { FunctionContext, useContext } from '../../context'

function Findex4() {
  const { handleClick,appearMethod } = useContext(FunctionContext)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  console.log(inputValue)

  useEffect(()=>{
    appearMethod({
      setInputValue
    })
  },[])

  return (
    <div>
      {handleClick && 'çalışıyor'}
      <input value={inputValue} onChange={handleInputChange} placeholder='mesaj ' />
    </div>
  )
}

export default Findex4
