import React from 'react'
import songImg from '../assets/projects/songImg.png'
import realestateImg from '../assets/projects/realestateImg.png'
import netflixImg from '../assets/projects/netflix.png';
import magicCocktailImg from '../assets/projects/magicCocktail.png';
import tetrisImg from '../assets/projects/tetris.png';

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0A192F]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#dc2626]'>Projects</p>
                    <p className='py-6'>// Check out some of my recent projects</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${songImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Music Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ob-lyriks-app.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/REO459/music-app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${realestateImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Real Estate Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://realestate-18jviwl7u-reo459.vercel.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/REO459/realestate_app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${netflixImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Netflix Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ob-netflix-clone-app.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/REO459/netflix-clone'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${magicCocktailImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Magic Cocktail Maker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ob-cocktail.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/REO459/magic-cocktail-maker'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${tetrisImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='justify-center text-2xl font-bold text-white tracking-wider'>
                                Tetris Clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ob-tetris-clone.netlify.app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/REO459/tetris'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects