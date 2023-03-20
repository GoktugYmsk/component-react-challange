import React, { useState } from 'react';
import Findex3 from './altComponent/Findex3'

function Findex1({ appButtonClick }) {
  const [buttonClick, setButtonClick] = useState(false)

  const handleButtonClick = () => {
    setButtonClick(true)
  };

  const handleClick = () => {
    if (appButtonClick) {
      handleButtonClick()
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Index3 Component'e Veri Aktar</button>
      <Findex3 buttonClick={buttonClick} />
    </div>
  );
}

export default Findex1;
