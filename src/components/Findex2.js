import React from 'react'

import Findex5 from './altComponent/child3/Findex5';

function Findex2({ setHandle, setDifferent }) {
  return (
    <div>
      <Findex5 setHandle={setHandle} setDifferent={setDifferent} />
    </div>
  )
}

export default Findex2;
