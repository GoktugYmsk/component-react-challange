import React from 'react'

import Popup from '../../leftAlt/leftChildren/Popup'

function Child3({click,theme,setTheme}) {
  return (
    <div>
      {click && ' bu mesaj left child1 componentindeki butondan gelmektedir'},
    {theme && <Popup setTheme={setTheme} />}
    </div>
  )
}

export default Child3
