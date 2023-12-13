import { useState } from 'react'
import UpBar from "./components/UppBar";
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UpBar/>
    </>
  )
}

export default App
