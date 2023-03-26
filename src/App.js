import React, { useEffect, useState } from 'react'

import Right from './components/Right'
import Left from './components/Left'
import './App.css'

function App() {
  const [show, setShow] = useState('')
  const [click, setClick] = useState(false)
  const [follow, setFollow] = useState(false)
  const [theme, setTheme] = useState(false)
  const [change,setChange] = useState(false)

  useEffect(() => {
    console.log('çalıştı')
  }, [follow])

  return (
    <div className={`App ${theme ? 'AppDark' : 'AppLight'} `}>
      <Left show={show} setClick={setClick} click={click} follow={follow} setTheme={setTheme} setChange={setChange} />
      <Right setShow={setShow} click={click} setFollow={setFollow} theme={theme} setTheme={setTheme} change={change} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem alias esse quia voluptates in, doloribus officiis officia minima molestias fugit ut adipisci minus praesentium repudiandae et, dolor voluptas nobis!
        Dolor laborum eaque tempore quaerat perspiciatis quae aliquam delectus soluta fugit, cupiditate aperiam error eius ratione perferendis enim fuga quo quia labore alias facilis in blanditiis autem? Nostrum, officiis. Tempore.
        Fugit reiciendis est dolorem consequuntur quia maxime ratione. Ducimus nisi, eum dolores enim consequuntur accusamus porro laborum tenetur corporis quos, illo numquam facilis tempore nostrum incidunt repudiandae dolore sed ipsa.
        Voluptate ad tempora quam, quo, velit dolore aut soluta eos enim dolorum ea, reprehenderit est neque praesentium a atque veritatis? Neque et aperiam unde quam tenetur, veritatis quidem error rerum!
        Asperiores quasi consequuntur et accusantium ut quisquam beatae eveniet id nobis ducimus aut doloremque dolores libero officia, fugit facilis eligendi. Reprehenderit eligendi earum culpa soluta nobis suscipit hic. At, dolores.
        At eligendi qui nemo perferendis eum doloremque, nisi dignissimos ad distinctio officiis minus beatae dicta a assumenda. Aut corrupti odio repudiandae iusto temporibus. Pariatur iure natus quisquam minima beatae a.
        Praesentium, quasi recusandae tempora quod hic fugiat illum et quaerat dignissimos nesciunt iste illo nobis sunt laudantium provident! Consequatur placeat soluta deleniti perspiciatis debitis voluptates eveniet harum deserunt officia impedit.
        Cum error illo odio hic magnam maiores earum corrupti, commodi et temporibus perferendis placeat rem nam reprehenderit repudiandae! Mollitia quaerat porro eligendi, consequuntur sint totam pariatur provident maxime nemo incidunt.
        Necessitatibus cumque non totam beatae nam incidunt expedita nihil laboriosam ipsum eum ut exercitationem delectus neque obcaecati dicta molestias nulla at id velit corrupti minima qui, voluptatem debitis facere? Corporis.
        Consequatur recusandae esse officia ab est illum debitis ut quis assumenda, labore quam corporis eius alias! Explicabo nobis repellat, accusamus ad provident voluptate modi aut exercitationem numquam, corrupti earum in.
      </p>
    </div>
  )
}

export default App
