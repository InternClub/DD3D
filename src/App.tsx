import { BrowserRouter,Route,Routes } from 'react-router'

import './App.css'
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'

function App() {
  return (
    <div >

      <img src={bgImg} alt="Background" className='w-[100vw] h-[100vh] object-fit fixed -z-5' />
   

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route  path='home' index element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
