import React from 'react';
import { FunctionContext, useContext } from './../context'


function Findex3() {

  const {inputValue} = useContext(FunctionContext)

  return (
    <div>
      <p>{inputValue}</p>
    </div>
  );
}

export default Findex3;
