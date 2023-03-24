import React from 'react'

function Child4({setFollow}) {

  const followChange = () =>{
    setFollow(true)
  }

  return (
    <div>
      <select onChange={followChange} >
        <option>Seçenek1</option>
        <option>Seçenek2</option>
      </select>
    </div>
  )
}

export default Child4
