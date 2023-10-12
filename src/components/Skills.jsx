import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import AWS from '../assets/aws.png'
import MySQL from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0A192F] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#dc2626]'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python Icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java Icon" />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="AWS Icon" />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MySQL} alt="MySQL Icon" />
            <p className='my-4'>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills