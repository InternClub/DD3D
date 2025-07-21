import React from 'react'

type Props = {}

const ITConsultation = (props: Props) => {
  return (
    <div>
        <div>
            <p>IT Consultation Services</p>
            <p>We transform your ideas into robust technological solutions. Our expert consultants provide strategic guidance to optimize your IT infrastructure, implement cutting-edge technologies, and drive digital transformation tailored to your business needs.</p>
        </div>
        <div>
            <div>
                <p>From Concept to Implementation</p>
                <p>Our proven methodology ensures your technology initiatives deliver maximum value</p>
            </div>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] mt-8'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ITConsultation