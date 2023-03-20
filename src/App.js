import React, { useState } from 'react';

import './App.css';
import Findex1 from './components/Findex1'

function App() {
  const [handleButtonClick,setHandleButtonClick] = useState(false)

  const appClick = () =>{
    setHandleButtonClick(true)
  }

  return (
    <div className="App">
      <button onClick={appClick} >App</button>
      <Findex1 appButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;