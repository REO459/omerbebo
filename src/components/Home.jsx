import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name='home' className='w-full h-screen bg-[#0A192F]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full'>
        <p className='text-[#dc2626]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6]'>Omer Bebo</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>I am a Web Developer.</h2>
        <p className='text-[#8892B0] py-4 max-w-[700px]'>
          I specialize in building and
          designing exceptional digital experiences.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dc2626] hover:border-[#dc2626] w-[160px]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home;