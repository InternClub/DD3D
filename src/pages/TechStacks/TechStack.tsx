import React from 'react'

type Props = {}

const TechStack = (props: Props) => {


    const techStacks = [{
        domain: "Frontend",
        technologies: ["React", "Vue", "Angular"]
    },
    {
        domain: "Backend",
        technologies: ["Node.js", "Express", "MongoDB"]
    },
    {
        domain: "DevOps",
        technologies: ["Docker", "Kubernetes", "AWS"]
    },
    {
        domain: "Mobile",
        technologies: ["React Native", "Flutter", "Swift"]
    },
    {
        domain: "AI/ML",
        technologies: ["TensorFlow", "PyTorch", "Scikit-learn"]
    },
]


  return (
    <div className='flex w-full flex-col h-[100vh] overflow-auto p-5'>
        <div className="flex w-full flex-col justify-center items-center h-[10rem]">
            <h1 className="text-4xl font-bold p-2">Our Tech Stack</h1>
            <p className="text-lg">We leverage the latest technologies to deliver innovative solutions.</p>
            <p className="text-lg">Explore our tech stack and see how we can help you achieve your goals.</p>
        </div>

        <div className="flex w-full flex-wrap p-10 text-black items-center justify-center ">
            {techStacks.map((stack, index) => (
                <div key={index} className="flex flex-col p-5 m-2 w-[400px] h-[400px] bg-gray-200 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                    <h2 className="text-2xl font-semibold ">{stack.domain}</h2>
                    <ul className="list-disc pl-5">
                        {stack.technologies.map((tech, idx) => (
                            <li key={idx} className="text-lg">{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
            
    </div>
  )
}

export default TechStack