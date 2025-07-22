import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'



type Props = {}

const WebAndMobileServices = (props: Props) => {
    // We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.
  return (
    <div className='flex w-[100vw] flex-col h-[100vh] overflow-auto p-5  text-blue-800'>
        <div className="flex flex-col justify-center items-center w-full my-10 h-[50rem]">
            <div className="text-5xl font-bold p-5">Website and Mobile App Development</div>

            <div className="flex text-xl text-center mt-2 flex-col font-bold items-center w-[60rem]">
            <p>We are a top-tier IT company with a strong track record in designing and developing robust websites and mobile applications. </p>
            <p>Our expert team has successfully delivered cutting-edge digital solutions across various industries including Healthcare, FinTech, EdTech, Retail, Logistics, and more.</p>
            <p>We specialize in creating custom web and mobile applications that are tailored to meet the unique needs of our clients. Our services include:</p>
            </div>
        </div>

        <div className="flex w-full h-full flex-wrap">

        <div className="flex w-1/2 h-[50rem]  justify-center items-center flex-col">
          <p className='text-2xl font-bold'>Mobile Applications Developed</p>
          <div className="flex flex-col w-full h-[40rem] justify-center items-center">
            {/* <div className="flex w-1/3 h-[40rem] justify-center items-center font-bold text ">
              kdmsldkfmlsdk
            </div> */}
            <Player
              autoplay
              // loop
              src="./Gif/Mobile App Showcase.json"
              className="w-[40rem] h-[30rem]"
              />
              <div className="flex w-1/3 h-[40rem] justify-center items-center font-bold text ">
                  <p>Customer Satisfied</p>
              </div>
            </div>
        </div>
        <div className="flex w-1/2 h-[50rem]  justify-center items-center flex-col">
          <p className='text-2xl font-bold'>Websites Developed</p>
          <div className="flex flex-col w-full h-[40rem] justify-center items-center">
            {/* <div className="flex w-[40rem] h-[40rem] justify-center items-center font-bold text mt-10 ">
              kdmsldkfmlsdk
              </div> */}
            <Player
              autoplay
              // loop
              src="./Gif/Creative 3D Visual Animation - Website Development.json"
              className="w-[40rem] h-[30rem]"
              />
              <div className="flex w-1/3 h-[40rem] justify-center items-center font-bold text ">Customer Satisfied</div>
            </div>
        </div>
        <div className="flex w-1/2 h-[50rem]  justify-center items-center flex-col">
          <p className='text-2xl font-bold'>Websites Developed</p>
          <div className="flex flex-col w-full h-[40rem] justify-center items-center">
            {/* <div className="flex w-[40rem] h-[40rem] justify-center items-center font-bold text mt-10 ">
              kdmsldkfmlsdk
              </div> */}
            <Player
              autoplay
              // loop
              src="./Gif/Creative Team..json"
              className="w-[40rem] h-[30rem]"
              />
              <div className="flex w-1/3 h-[40rem] justify-center items-center font-bold text ">Customer Satisfied</div>
            </div>
        </div>
              </div>
    </div>
  )
}

export default WebAndMobileServices