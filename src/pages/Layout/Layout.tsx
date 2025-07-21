import './Layout.css'
import { Outlet } from 'react-router'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import Header from '../../components/Header/Header'
// import officetable from '/Images/officetable.png'
import plane from '/Images/plane.png';
import table2 from  '/Images/table2.png';
import dustbin from '/Images/dustbin.png';
import earth from '/Gif/earth.gif';
import telephone from '/Images/telephone.png';
import book from '/Images/book.png';
import Footer from '../../components/Footer/Footer';


const images = [
  { top: "60%", left: "8%", label: "", route: "", img: dustbin, h: 0  , w: 0   },
  //careers , tech stacks contact
  {
    top: "27%",
    left: "83%",
    label: "careers",
    route: "/careers",
    img: plane,
    h: 5,
    w: 5,
  },

  { top: "15%", left: "13%", label: "Services", route: "/services", img: earth,h: 8, w: 8 },
  
  {
    top: "53%",
    left: "65%",
    label: "Tech stacks",
    route: "/tech-stack",
    img: table2,
    h: 25,
    w: 34.3,
  },
  {
    top: "44%",
    left: "10%",
    label: "Contact",
    route: "/contact",
    img: telephone,
    h : 3,
    w: 3,
  },
  {
    top: "45%",
    left: "25%",
    label: "About",
    route: "/about",
    img: book,

  },
  
];  


// type Props = {}

const Layout = () => {

  const navigate = useNavigate();
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [dotOffset, setDotOffset] = useState({ x: 0, y: 0 });
  const [barOffset, setBarOffset]= useState({x: 0,y: 0});
    // const { t } = useTranslation();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setBgOffset({ x: x / 60, y: y / 60 }); // Slow movement for background
    setDotOffset({ x: x / 60, y: y / 60 }); // Faster movement for dots
    setBarOffset({ x: x / 30, y: y / 30 });
  };

 
  return (
    <div
      
      style={{
        // backgroundImage: `url('/Images/bgImg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'absolute',
        overflow: 'hidden',
        scrollbarWidth: 'none', // Hide scrollbar in Firefox
        msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
      }}
      >
      <Header /> 
      {/* <img src={bgImg} alt="Background" className='w-[100vw] h-[100vh] object-fit fixed -z-5' /> */}

      <div
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)`,

      }}
      className="flex h-[100vh] w-full relative">

      {images.map((dot, index) => (
        <button
          key={index}
          className="dot-button group"
          style={{
            top: dot.top,
            left: dot.left,
           
            transform: `translate(${dotOffset.x}px, ${dotOffset.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
          onMouseEnter={() => setHoveredLabel(dot.label)}
          onMouseLeave={() => setHoveredLabel(null)}
          onClick={() => navigate(dot.route)}
        >
          
          <img
            src={dot.img}
            // className={`${dot.img==telephone?"h-[6rem] w-[6rem] rotate-9":`h-[${dot.h}px] w-[${dot.w}px]`} hover:scale-125`}
            className={
              `${dot.img==telephone?"h-[4rem] w-[4rem] ":`h-[5rem] w-[5rem]`}
              ${dot.img==earth?"h-[8rem] w-[8rem]":""}
              ${dot.img==table2?"h-[25rem] w-[34.3rem]":""}
              ${dot.img==dustbin?"h-[11rem] w-[11rem]":""}
              ${dot.img==plane?"h-[5rem] w-[5rem]":""}
              ${dot.img==book?"h-[7rem] w-[7rem] ":""}
              hover:scale-125`}
            alt="Decorative background or button overlay"
            //   style={{

            //   width: '20rem',
            //   height: '100px',
            //   zIndex: -1,
            // }}
          />
        </button>
      ))}
      {/* ✨ Render label outside the button for true screen centering */}
  {hoveredLabel && (
    <span className="centered-label">
      {hoveredLabel}
    </span>
  )}
      {/* <img src={officetable} alt="Office Table" className="absolute top-[4 0%] left-[55%] h-[600px] w-[550px] hover:scale-125 -rotate-0.5" /> */}
      </div>

      <Outlet />
      <Footer/>
      {/* Add any additional layout components here */}
    </div>
  )
}

export default Layout

    