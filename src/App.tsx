import { useState } from 'react'
import UpBar from "./components/UppBar";
import "./index.css"
import MainSide from './components/MainSide';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UpBar/>
      <MainSide/>
    </>
  )
}

export default App
