import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-screen'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#dc2626]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello. my name is Omer, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I currently reside in Illinois. I take pleasure in crafting a wide range
                            of web solutions, from small business sites to immersive interactive web apps.
                            Whether you're a business in need of a web presence or an employer looking to
                            hire, feel free to explore my resume and get in touch with me through
                            the contact page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About