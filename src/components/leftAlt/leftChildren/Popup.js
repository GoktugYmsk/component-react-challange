import React from 'react'

function Popup({setTheme}) {

    const popupClose = () =>{
        setTheme(false)
    }
    
  return (
    <div className='Popup' >
      <button className='popupCloseButton' onClick={popupClose} >Popup'ı kapat</button>
    </div>
  )
}

export default Popup
