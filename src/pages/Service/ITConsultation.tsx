import React from "react";

type Props = {};

const ITConsultation = (props: Props) => {
  return (
    <div className="text-blue-900 p-20">
      <div className="flex flex-col">
        <p className="flex items-center justify-center font-bold text-4xl ">
          IT Consultation Services
        </p>
        <p className="flex items-center justify-center font-semibold ml-20 mr-20 mt-5 ">
          We transform your ideas into robust technological solutions. Our
          expert consultants provide strategic guidance to optimize your IT
          infrastructure,
        </p>
        <p className="flex items-center justify-center font-semibold ">
          implement cutting-edge technologies, and drive digital transformation
          tailored to your business needs.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col p-20 ">
        <div className="flex items-center justify-center  flex-col">
          <p className="font-bold text-4xl">From Concept to Implementation</p>
          <p className="font-normal text-xl">
            Our proven methodology ensures your technology initiatives deliver
            maximum value
          </p>
        </div>
        {/* Card */}
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[3rem] mt-8">
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div className="flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 352 512"
                className="text-blue-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
              </svg>
            </div>
            <p className="text-xl font-semibold">Idea Validation</p>
            <p>
              We assess technical feasibility, market potential, and resource
              requirements for your concept.
            </p>
          </div>
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-green-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path>
              </svg>
            </div>
            <p>Requirement Analysis</p>
            <p>
              Detailed evaluation of business needs, user expectations, and
              technical constraints.
            </p>
          </div>
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-purple-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
              </svg>
            </div>
            <p>Solution Architecture</p>
            <p>
              Designing optimal technology stack and system architecture for
              your requirements.
            </p>
          </div>
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                className="text-red-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
              </svg>
            </div>
            <p>Development Strategy</p>
            <p>
              Agile roadmap with milestones, resource allocation, and risk
              mitigation plans.
            </p>
          </div>
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-orange-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
              </svg>
            </div>
            <p>Technology Selection</p>
            <p>
              Recommendations on platforms, frameworks, and tools that best fit
              your needs.
            </p>
          </div>
          <div className="flex flex-col bg-gray-300 backdrop-blur-3xl rounded-2xl m-5 p-5 hover:shadow-cyan-950 hover:scale-120 transition-transform duration-300 ">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                className="text-indigo-500 text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
              </svg>
            </div>
            <p>Change Management</p>
            <p>
              Planning for smooth adoption, user training, and organizational
              impact.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p>Our IT Consultation Services</p>
          <p>Comprehensive technology guidance across all domains</p>
        </div>
        <div>
          <div>
            <div></div>
            <p>Digital Strategy</p>
            <p>
              Comprehensive technology roadmaps aligned with your business
              objectives and growth plans.
            </p>
          </div>
          <div>
            <div></div>
            <p>Infrastructure Planning</p>
            <p>
              Identify vulnerabilities and implement robust cybersecurity
              measures for your systems.
            </p>
          </div>
          <div>
            <div></div>
            <p>Security Assessment</p>
            <p>
              Identify vulnerabilities and implement robust cybersecurity
              measures for your systems.
            </p>
          </div>
          <div>
            <div></div>
            <p>Digital Transformation</p>
            <p>
              Guidance through technology modernization and adoption of
              innovative solutions.
            </p>
          </div>
          <div>
            <div></div>
            <p>Cloud Migration</p>
            <p>
              Strategic planning and execution for seamless transition to cloud
              platforms.
            </p>
          </div>
          <div>
            <div></div>
            <p>Data Strategy</p>
            <p>
              Harness the power of your data with effective collection, analysis
              and utilization.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ITConsultation;
