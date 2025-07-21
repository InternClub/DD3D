import React from 'react'
import Positions from '../../components/Positions/Positions'
import ApplyForm from '../../components/Forms/ApplyForm'

export const Career = () => {
  return (
    <div className='flex flex-col w-full h-[100vh] overflow-scroll scrollbar-hide overflow-x-hidden'>

        <div className="flex w-full h-[50rem] justify-center items-center flex-col">
            <h1 className="text-4xl font-bold">Join Our Team</h1>
            <p className="text-lg">We're looking for passionate IT professionals to innovate and grow with us.</p>
            <p className="text-lg">Explore our open positions and apply today!</p>
        </div>

        <Positions />
        <ApplyForm/>

    </div>
  )
}
