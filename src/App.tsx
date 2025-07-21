import { BrowserRouter,Route,Routes } from 'react-router'

import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Layout from './pages/Layout/Layout'
import bgImg from '/Images/bgImg.png'


import { useState } from 'react'



function App() {

    const [barOffset, setBarOffset]= useState({x: 0,y: 0});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setBarOffset({ x: x / 50, y: y / 50 });
  };
  

  return (
    <div onMouseMove={handleMouseMove} 
    style={
      {
        transform: `translate(${barOffset.x}px, ${barOffset.y}px)`,
        backgroundPosition: `${barOffset.x}px ${barOffset.y}px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        scale: '1.1',
      }
    }
    >

      <img src={bgImg} alt="Background" className='w-[100vw] h-full  fixed  -z-5' />
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route  path='home' index element={<Home />} />
          <Route path="about" index element={<About />} />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
     </div>
     
  )
}

export default App
