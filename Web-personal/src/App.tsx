import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <div className='logo'>Logo Here Make inline</div>
        <div className='navigation'> Navigation Shit Make inline</div>
        <div className='socials'> Socials</div>
      </div>

      <div className='intro'>

        <div className='name'> Suchit <br></br>Krishna</div>
        <div className='image'> [Image]</div>
        <div className='summary'>Gay Developer</div>
      </div>

      <div className='skills'>

        <div className='name'> List of skills </div>
      </div>

      <div className='experience'>

        <div className='name'> List of experiences</div>
      </div>

      <div className='projects'>

        <div className='name'> List of projects </div>
      </div>

      
    </>
  )
}

export default App
