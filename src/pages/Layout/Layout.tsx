import './Layout.css'
import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import bgImg from '/Images/bgImg.png'

import plane from '/Images/plane.png';
import table from  '/Images/table.png';
import dustbin from '/Images/dustbin.png';
import earth from '/Gif/earth.gif';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const images = [
  { top: "10%", left: "85%", label: "About", route: "/about", img: dustbin },
  {
    top: "63%",
    left: "75%",
    label: "Collection",
    route: "/collections",
    img: plane,
  },
  { top: "60%", left: "7%", label: "Blogs", route: "/blogs", img: earth },
  {
    top: "37%",
    left: "40%",
    label: "Pricing",
    route: "/pricing",
    img: table,
  },
  
];  


type Props = {}

const Layout = (props: Props) => {

    const navigate = useNavigate();
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [dotOffset, setDotOffset] = useState({ x: 0, y: 0 });
  const [barOffset, setBarOffset]= useState({x: 0,y: 0});
    // const { t } = useTranslation();


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setBgOffset({ x: x / 60, y: y / 60 }); // Slow movement for background
    setDotOffset({ x: x / 30, y: y / 30 }); // Faster movement for dots
    setBarOffset({ x: x / 30, y: y / 30 });
  };


  return (
    <div
      onMouseMove={handleMouseMove}
      
      style={{
        backgroundImage: `url('/Images/bgImg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      >
      <Header /> 
      {/* <img src={bgImg} alt="Background" className='w-[100vw] h-[100vh] object-fit fixed -z-5' /> */}

      <div className="flex h-[100vh] w-full  relative">

      {images.map((dot, index) => (
        <button
          key={index}
          className="dot-button group"
          style={{
            top: dot.top,
            left: dot.left,
            // Use CSS translate function, not translation function
            transform: `translate(${dotOffset.x}px, ${dotOffset.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
          onDoubleClick={() => navigate(dot.route)}
        >
          <span className="tooltip group-hover:scale-100 transition-transform duration-300 ease-out">
            {dot.label}
          </span>
          <img
            src={dot.img}
            className="h-[15rem] w-[15rem] hover:scale-125"
            alt="Decorative background or button overlay"
            //   style={{

            //   width: '20rem',
            //   height: '100px',
            //   zIndex: -1,
            // }}
          />
        </button>
      ))}
      </div>

      <Outlet />
      {/* <Footer/> */}
      {/* Add any additional layout components here */}
    </div>
  )
}

export default Layout

    