import { useState } from 'react'
import './styles/styles.scss'
import Header from './components/Header/Header'
import Introduction from './components/Body/Introduction'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>

      </Header>
      <Introduction>

      </Introduction>

      <Skills>

      </Skills>

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
