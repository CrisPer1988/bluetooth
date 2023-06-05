import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import LoginUser from './components/LoginUser'
import Bluetooth from './components/Bluetooth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp />
    <LoginUser />
    <Bluetooth />
    </>
  )
}

export default App
