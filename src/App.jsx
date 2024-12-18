import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Goals from './Pages/Goals'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'
import Programs from './Pages/Programs'
import Enroll from './Pages/Enroll' 
export const metadata = {
    title: 'Desight Foundation',
    description: "NGO based on empowering lifes through health and wellness- we are an african based organisation valued at  free medical care main area of focus sight and Desight foundation was founded by Dr. Maureen Odimegu Agabaenwere. She is a true stoic empowering people all over Nigeria and belond",
    alternates: {
      canonical: 'https://desightfoundation.com.ng'
    }
  }
const App = () => {
 
  return (
    <div>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>
        
        <Route path='/programs' element={<Programs/>}/>
      </Routes>
    </div>
  )
}

export default App