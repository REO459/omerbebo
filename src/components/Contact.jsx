import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4'>
      <form method="POST" action="https://getform.io/f/1ff4252d-119c-42bd-bafe-5ddd088bdd83" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#dc2626] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or send me an email to omerbebo1@hotmail.com</p>
        </div>
        <input className='bg-[#CCD6F6] p-2' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#CCD6F6]' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-[#CCD6F6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
        <button className='text-white border-2 hover:bg-[#dc2626] hover:border-[#dc2626] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact