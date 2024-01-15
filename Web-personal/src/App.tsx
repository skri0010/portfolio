import { useState } from 'react'
import './styles/styles.scss'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>

      </Header>

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
