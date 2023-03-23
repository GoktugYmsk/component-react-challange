import React, { useState } from 'react';

import Findex1 from './components/Findex1';
import Findex2 from './components/Findex2';
import Findex3 from './components/altComponent/Findex3';

import './App.css';

function App() {
  const [deneme, setDeneme] = useState(false)
  const [handle, setHandle] = useState(false)
  const [different, setDifferent] = useState(false)

  return (
    <div>
      <Findex1 different={different} />
      <Findex2 setHandle={setHandle} setDifferent={setDifferent}  />
      {handle && 'Child 3 componentindeki buton çalışıyor'}
      <Findex3 deneme={deneme} setDeneme={setDeneme}/>
      {deneme && 'deneme çalışıyor'}
    </div>
  );
}

export default App;