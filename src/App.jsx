import React,{useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Loader from './Pages/Loader'
import Navbar from './Components/Navbar'
import Goals from './Pages/Goals'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'
import Programs from './Pages/Programs'
import Enroll from './Pages/Enroll' 

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Loader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>
        
        <Route path='/programs' element={<Programs/>}/>
       
      </Routes> </div>
    </div>
  )
}

export default App