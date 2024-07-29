import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Wrapper from './components/wrapper/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/>
    <Wrapper/>
   
   </>
  )
}

export default App
