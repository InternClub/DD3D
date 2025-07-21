import React, { useState } from 'react'
import './Form.css'; 

type Props = {}

const ApplyForm = (props: Props) => {

    //Full Name
// Enter your full name
// Email Address
// Enter your email
// Position
// Enter the position you're applying for
// LinkedIn Profile
// Enter your LinkedIn profile link
// Resume Link
// https://example.com/resume.pdf
// Phone Number
// Enter your phone number
// Message

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [resume, setResume] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
        fullName,
        email,
        position,
        linkedin,
        resume,
        phone,
        message
        });
    };


  return (
    <div className='flex w-full h-full flex-col items-center justify-center p-4 space-y-4 mt-25 '>
        <div className="flex flex-col w-full h-[8rem] font-bold text-6xl items-center justify-center">
            Apply for a Position
            <p className='text-lg p-5'>Submit your application and let’s build the future together.</p>
        </div>

        <div className="flex flex-col w-full items-center justify-center bg-white text-black">
            <div className="flex flex-col w-[30rem] p-5 space-y-4">


            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                />
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />
            <label htmlFor="position">Position</label>
            <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter the position you're applying for"
                />
            <label htmlFor="linkedin">LinkedIn Profile</label>
            <input
                type="text"
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="Enter your LinkedIn profile link"
                />
            <label htmlFor="resume">Resume Link</label>
            <input
                type="text"
                id="resume"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="https://example.com/resume.pdf"
                />
            <label htmlFor="phone">Phone Number</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows={4}
                />

                </div>
        </div>
        <button onClick={handleSubmit}>Submit Application</button>

    </div>
  )
}

export default ApplyForm