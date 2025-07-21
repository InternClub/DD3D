import { BrowserRouter,Route,Routes } from 'react-router'

import './App.css'
import Home from './pages/Home/Home'
import About from './components/About/About'
import Layout from './pages/Layout/Layout'
import bgImg from '/Images/bgImg.png'


function App() {
  return (
    <div >

      <img src={bgImg} alt="Background" className='w-[100vw] h-[100vh] object-fit fixed  -z-5' />
    

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
