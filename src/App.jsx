import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BestSeller from './components/BestSeller'
import Carousiel from './components/Carousiel'
import Footer from './components/Footer'
import GoCatalogue from './components/GoCatalogue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Carousiel></Carousiel>
      <GoCatalogue></GoCatalogue>
      <BestSeller></BestSeller>
      <Footer></Footer>
    </>
  )
}

export default App
