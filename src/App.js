import React, { useState } from 'react';
import Findex3 from './components/altComponent/Findex3';
import Findex2 from './components/Findex2';

import './App.css';

function App() {
  const [deneme,setDeneme] =useState(false)
  const [handle,setHandle] = useState(false)

  return (
    <div>
      <Findex3 deneme={deneme} setDeneme={setDeneme} />
      {deneme && 'deneme çalışıyor'}
      <Findex2 setHandle={setHandle} />
      {handle && 'Child 3 componentindeki buton çalışıyor'}
    </div>
  );
}

export default App;