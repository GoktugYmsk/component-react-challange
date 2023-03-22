import React, { useState } from 'react';
import { FunctionContext } from './components/context';
import Findex3 from './components/altComponent/Findex3';
import Findex4 from './components/altComponent/Findex4';

import './App.css';

function App() {

  const [handleClick,setHandleClick] = useState(false)
  const [method,setMethod] = useState({})

  const  appearMethod = newMethods =>{
    setMethod({
      ...method,
      ...newMethods,
    })
  }

  const click = () =>{
      setHandleClick(true)
  }

  const data = {
   handleClick,
   appearMethod,
   ...method
  }


  return (
    <FunctionContext.Provider value={data}>
      <Findex3/>
      <Findex4 />
      <button onClick={click} >apteki Findex4</button>
    </FunctionContext.Provider>
  );
}

export default App;