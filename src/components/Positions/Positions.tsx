import React from 'react'

type Props = {}


const Positions = (props: Props) => {

    const positions = [
        { title: "Software Engineer",
          description: "Join our team to drive growth by generating leads, building client relationships, and promoting our IT solutions and services.",
          requirements: [
            "1+ years of experience in IT sales",
            "Strong skills in lead generation and client acquisition",
            "Proven ability to build and maintain customer relationships"
          ]
        },
        { title: "B2B Sales & Marketing Manager",
          description: "Join our team to lead and execute strategic B2B sales and marketing initiatives, drive client engagement, and grow our business across industries.",
          requirements: [
            "3+ years of experience in B2B sales and marketing",
            "Strong expertise in lead generation,account management, and client retention",
            "Proven track record of driving sales growth"
          ]
        },
        { title: "Python Developer", 
          description: "Join our team to develop robust geospatial solutions using Python, integrating GIS data with advanced analytics and automation tools.", 
          requirements: [
            "2+ years of experience in Python developmen",
            "Strong background in GIS and geospatial data processing",
            "Expertise in core Python libraries like Pandas, NumPy, and GeoPandas"
          ]
        },
    ];




  return (
    <div className='flex flex-col w-full h-[50rem] p-5'>
        <div className="flex w-full h-[5rem] flex-col items-center justify-center rounded-lg text-black ">
      <h2 className='text-2xl font-bold mb-4'>Open Positions</h2>
        <p>Find the role that suits your skills and passion.</p>
        </div>
      <div className="flex w-full h-[30rem] gap-5 flex-wrap justify-center items-center">

        {positions.map((position, index) => (
          <div key={index} className="flex flex-col w-[20rem] h-[30rem] p-5 bg-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className='text-xl font-semibold mb-2'>{position.title}</h3>
            <p className='text-gray-700'>{position.description}</p>
            <h4 className='font-bold mt-2'>Requirements:</h4>
            <ul className='list-disc list-inside text-gray-600 overflow-auto h-[15rem]'>
              {position.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Apply Now</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Positions