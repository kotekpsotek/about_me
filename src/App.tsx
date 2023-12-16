import UpBar from "./components/UppBar";
import "./index.css"
import MainSide from './components/MainSide';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Footer/>
    </BrowserRouter>
  )
}

export default App
