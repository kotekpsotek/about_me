import { useState } from 'react'
import UpBar from "./components/UppBar";
import "./index.css"
import MainSide from './components/MainSide';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  const mainComponent = (
    <>
      <UpBar/>
      <MainSide/>
    </>
  )
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={mainComponent}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
