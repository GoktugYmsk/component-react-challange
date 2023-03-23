import React from 'react';

function Findex3({setDeneme}) {

  const handleClick = () =>{
    setDeneme(true)
  }

  return (
    <div>
      <button onClick={handleClick} >findex 3 teki buton</button>
    </div>
  );
}

export default Findex3;






