// import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { motion } from "motion/react";

// type Props = {};

// const AboutCard = (props: Props) => {
//   return (
//     <div>
//       <div>
//         <div>
//           <div>
//             <Player
//               autoplay
//               loop
//               className="hover:scale-[1.05]"
//               src="/Gif/Coding.json"
//             ></Player>
//           </div>
//           <div>Web Development</div>
//           <div>
//             We are a top-tier IT company with a strong track record in designing
//             and developing robust websites and mobile applications. Our expert
//             team has successfully delivered cutting-edge digital solutions
//             across various industries including Healthcare, FinTech, EdTech,
//             Retail, Logistics, and more.
//           </div>
//         </div>
//         <div>
//           <div>
//             <Player
//               autoplay
//               loop
//               src="/Gif/Development direction.json"
//             ></Player>
//           </div>
//           <div>Mobail App Development</div>
//           <div>
//             We are a top-tier IT company with a strong track record in designing
//             and developing robust websites and mobile applications. Our expert
//             team has successfully delivered cutting-edge digital solutions
//             across various industries including Healthcare, FinTech, EdTech,
//             Retail, Logistics, and more.
//           </div>
//         </div>
//         <div>
//           <div>
//             <Player
//               autoplay
//               loop
//               src="/Gif/Technology isometric ai robot brain.json"
//             ></Player>
//           </div>
//           <div>AI, Data & Analytics</div>
//           <div>
//             We deliver customized AI and Machine Learning solutions that
//             automate processes, uncover data-driven insights, and empower
//             smarter decision-making through predictive analytics, natural
//             language processing, and intelligent automation.
//           </div>
//         </div>
//         <div>
//           <div>
//             <Player
//               autoplay
//               loop
//               src="/Gif/CyberSecurity Net lock.json"
//             ></Player>
//           </div>
//           <div>Cybersecurity Services</div>
//           <div>
//             Our cybersecurity services protect your business with advanced
//             threat detection, risk assessments, and tailored security strategies
//             to safeguard your data and systems.
//           </div>
//         </div>
//         <div>
//           <div>
//             <Player autoplay loop src="/Gif/IT Deal.json"></Player>
//           </div>
//           <div>IT Consultation Services</div>
//           <div>
//             We transform your ideas into robust technological solutions. Our
//             expert consultants provide strategic guidance to optimize your IT
//             infrastructure, implement cutting-edge technologies, and drive
//             digital transformation tailored to your business needs.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutCard;

// import React, { useEffect, useRef } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// import './AboutSection.css'

// type Props = {};
// type Card = {
//   title: string;
//   content: string;
//   animation: string;
// };

// const AboutCard = (props: Props) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollInterval = useRef<NodeJS.Timeout>();
//   const isScrolling = useRef(false);

//    useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const cardWidth = 300;
//     const gap = 24;
//     const scrollAmount = cardWidth+gap;

//     const startAutoScroll = () => {
//       if (isScrolling.current) return;
//       isScrolling.current = true;

//       const scroll = () => {
//         if (!container) return;

//         const { scrollLeft, scrollWidth, clientWidth } = container;
//         const lastCardVisible = scrollLeft+ clientWidth >= scrollWidth;

//         if(lastCardVisible){
//             container.scrollTo({
//                 left:0,
//                 behavior:'smooth'
//             });
//         }else{
//             container.scrollBy({
//                 left:scrollAmount,
//                 behavior:'smooth'
//             });
//         }
//         // const scrollPosition = scrollLeft + 1; // Small increment for smooth scroll

//         // if (scrollPosition >= scrollWidth - clientWidth - 300) {
//         //   // When reaching near end, instantly (but invisibly) scroll back to start
//         //   container.scrollLeft = 1;
//         // } else {
//         //   container.scrollLeft = scrollPosition;
//         // }

//         scrollInterval.current = setTimeout(scroll, 500); // Adjust speed here
//       };

//       scroll();
//     };

//     startAutoScroll();

//     return()=>{
//         if(scrollInterval.current){
//             clearTimeout(scrollInterval.current);
//         }
//     };

//     // const pauseOnHover = () => {
//     //   if (scrollInterval.current) {
//     //     clearTimeout(scrollInterval.current);
//     //     isScrolling.current = false;
//     //   }
//     // };

//     // const resumeOnLeave = () => {
//     //   if (!isScrolling.current) {
//     //     startAutoScroll();
//     //   }
//     // };

//     // startAutoScroll();

//     // container.addEventListener('mouseenter', pauseOnHover);
//     // container.addEventListener('mouseleave', resumeOnLeave);

//     // return () => {
//     //   if (scrollInterval.current) {
//     //     clearTimeout(scrollInterval.current);
//     //   }
//     //   container.removeEventListener('mouseenter', pauseOnHover);
//     //   container.removeEventListener('mouseleave', resumeOnLeave);
//     // };
//   }, []);

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { x: -20, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const cards: Card[] = [
//     {
//       title: "Web Development",
//       content:
//         "We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.",
//       animation: "/Gif/Coding.json",
//     },
//     {
//       title: "Mobile App Development",
//       content:
//         "We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.",
//       animation: "/Gif/Software Development.json",
//       // customHeight: "h-60",
//     },
//     {
//       title: "AI, Data & Analytics",
//       content:
//         "We deliver customized AI and Machine Learning solutions that automate processes, uncover data-driven insights, and empower smarter decision-making through predictive analytics, natural language processing, and intelligent automation.",
//       animation: "/Gif/Technology isometric ai robot brain.json",
//     },
//     {
//       title: "Cybersecurity Services",
//       content:
//         "Our cybersecurity services protect your business with advanced threat detection, risk assessments, and tailored security strategies to safeguard your data and systems.",
//       animation: "/Gif/CyberSecurity Net lock.json",
//     },
//     {
//       title: "IT Consultation Services",
//       content:
//         "We transform your ideas into robust technological solutions. Our expert consultants provide strategic guidance to optimize your IT infrastructure, implement cutting-edge technologies, and drive digital transformation tailored to your business needs.",
//       animation: "/Gif/IT Deal.json",
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
//       <motion.div
//         ref={containerRef}
//         className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory scroll-container "
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//         variants={containerVariants}
//       >
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className="w-[300px] flex-shrink-0 p-6 rounded-lg shadow-lg bg-white "
//             variants={itemVariants}
//             whileHover={{ scale: 1.03 }}
//           >
//             <div className={`flex items-center justify-center`}>
//               <Player
//                 autoplay
//                 loop
//                 src={card.animation}
//                 className="w-[277px] h-[277px]"
//               />
//             </div>
//             <h3 className="text-xl font-bold my-4 text-blue-800 ">
//               {card.title}
//             </h3>
//             <p className="text-gray-600">{card.content}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default AboutCard;

import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "./AboutSection.css";

type Card = {
  title: string;
  content: string;
  animation: string;
  hueA?: number;
  hueB?: number;
};

const AboutCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout>();
  const isScrolling = useRef(false);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  // Card variants for scroll-triggered animation
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: -5,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

  const cards: Card[] = [
    {
      title: "Web Development",
      content:
        "We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.",
      animation: "/Gif/Coding.json",
      hueA: 340,
      hueB: 10,
    },
    {
      title: "Mobile App Development",
      content:
        "We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.",
      animation: "/Gif/Software Development.json",
      hueA: 20,
      hueB: 40,
    },
    {
      title: "AI, Data & Analytics",
      content:
        "We deliver customized AI and Machine Learning solutions that automate processes, uncover data-driven insights, and empower smarter decision-making through predictive analytics, natural language processing, and intelligent automation.",
      animation: "/Gif/Technology isometric ai robot brain.json",
      hueA: 60,
      hueB: 90,
    },
    {
      title: "Cybersecurity Services",
      content:
        "Our cybersecurity services protect your business with advanced threat detection, risk assessments, and tailored security strategies to safeguard your data and systems.",
      animation: "/Gif/CyberSecurity Net lock.json",
      hueA: 80,
      hueB: 120,
    },
    {
      title: "IT Consultation Services",
      content:
        "We transform your ideas into robust technological solutions. Our expert consultants provide strategic guidance to optimize your IT infrastructure, implement cutting-edge technologies, and drive digital transformation tailored to your business needs.",
      animation: "/Gif/IT Deal.json",
      hueA: 100,
      hueB: 140,
    },
    {
      title: "BPO & KPO Services",
      content:
        "We offer comprehensive Business Process Outsourcing (BPO) and Knowledge Process Outsourcing (KPO) services to streamline operations, reduce costs, and enhance efficiency through expert process management and specialized knowledge.",
      animation: "/Gif/Online Business.json",
      hueA: 100,
      hueB: 140,
    },
    {
      title: "ERP Developmwnt",
      content:
        "We specialize in building tailored ERP solutions and intuitive dashboards that streamline business operations, enhance decision-making, and provide real-time insights across departments. Our expertise transforms complex business processes into efficient, integrated systems.",
      animation: "/Gif/developer team.json",
      hueA: 100,
      hueB: 140,
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    const scrollLeft = () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    };
    const scrollRight = () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    let interval: NodeJS.Timeout;

    if (isHoveringLeft) {
      interval = setInterval(scrollLeft, 300);
    } else if (isHoveringRight) {
      interval = setInterval(scrollRight, 300);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHoveringLeft, isHoveringRight]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    const startAutoScroll = () => {
      if (isScrolling.current || isHoveringLeft || isHoveringRight) return;
      isScrolling.current = true;

      const scroll = () => {
        if (!container || isHoveringLeft || isHoveringRight) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        const lastCardVisible = scrollLeft + clientWidth >= scrollWidth;

        if (lastCardVisible) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }

        scrollInterval.current = setTimeout(scroll, 3000);
      };

      scroll();
    };

    const pauseOnHover = () => {
      if (scrollInterval.current) {
        clearTimeout(scrollInterval.current);
        isScrolling.current = false;
      }
    };

    const resumeOnLeave = () => {
      if (!isScrolling.current && !isHoveringLeft && !isHoveringRight) {
        startAutoScroll();
      }
    };

    // startAutoScroll();

    container.addEventListener("mouseenter", pauseOnHover);
    container.addEventListener("mouseleave", resumeOnLeave);

    return () => {
      if (scrollInterval.current) {
        clearTimeout(scrollInterval.current);
      }
      container.removeEventListener("mouseenter", pauseOnHover);
      container.removeEventListener("mouseleave", resumeOnLeave);
    };
  }, [isHoveringLeft, isHoveringRight]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors"
        onMouseEnter={() => setIsHoveringLeft(true)}
        onMouseLeave={() => setIsHoveringLeft(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <motion.div
        ref={containerRef}
        className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory scroll-container"
        style={{
          paddingBottom: "100px",
          marginBottom: "20px",
          height: "700px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative"
            style={{ paddingTop: "20px" }}
            initial="offscreen"
            whileInView="onscreen"
            // viewport={{ amount: 0.8 }}
          >
            {/* Gradient background splash */}
            {card.hueA && card.hueB && (
              <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                  background: `linear-gradient(306deg, 
                  )})`,
                  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                }}
              />
            )}

            {/* Card content */}
            <motion.div
              className="w-[300px] p-6 rounded-lg shadow-lg bg-white"
              style={{
                height: "600px",
                boxShadow:
                  "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
                transformOrigin: "10% 60%",
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-center h-[277px]">
                <Player
                  autoplay
                  loop
                  src={card.animation}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold my-4 text-blue-800">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors"
        onMouseEnter={() => setIsHoveringRight(true)}
        onMouseLeave={() => setIsHoveringRight(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutCard;
