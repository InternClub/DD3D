import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Layout from "./pages/Layout/Layout";
import bgImg from "/Images/bgImg.png";

import { useState } from "react";
import { Career } from "./pages/Career/Career";
import TechStack from "./pages/TechStacks/TechStack";
import ITConsultation from "./pages/Service/ITConsultation";
import WebAndMobileServices from "./pages/Service/WebAndMobileServices";
import ERP from "./pages/Service/ERP";
import AIDA from "./pages/Service/AIDA";

function App() {
  const [barOffset, setBarOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setBarOffset({ x: x / 50, y: y / 50 });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <img
        src={bgImg}
        alt="Background"
        className="w-[100vw] h-[100vh] object-fit fixed  -z-5"
        style={{
          transform: `translate(${barOffset.x}px, ${barOffset.y}px)`,
          backgroundPosition: `${barOffset.x}px ${barOffset.y}px`,
          backgroundSize: "cover",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="home" index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="careers" index element={<Career />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-[100vh] text-4xl font-bold">
                404 Not Found
              </div>
            }
          />
          <Route path="tech-stack" element={<TechStack />} />
          <Route path="it-consultation" element={<ITConsultation />} />
          <Route path="web-mobile-development" element={<WebAndMobileServices />} />
          <Route path="erp-development" element={<ERP />} />
          <Route path="ai-data-analytics" element={<AIDA />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
