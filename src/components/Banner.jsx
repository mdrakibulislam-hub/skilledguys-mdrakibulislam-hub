import React from 'react';
import man from '../assets/man.webp'

const Banner = () => {
    return (
        <div className='bg-secondary'>
            <div
                className='default-container min-h-[100vh] md:min-h-fit py-10 lg:py-32 banner bg-no-repeat bg-contain bg-right-bottom'>
                <div className='lg:w-1/2'>
                    <h1
                        className='font-bold text-5xl md:text-7xl'
                    >
                        Empowering job seekers <p className='text-primary'>worldwide.</p>
                    </h1>
                    <p
                        className='font-medium text-base md:text-lg py-4 text-slate-500 hidden md:block'
                    >
                        Maximizing your job search potential. Finding the perfect job match for you. Helping you take the next step in your career.
                    </p>
                    <button
                        className='btn-primary mt-4'
                    >
                        Get Started
                    </button>
                </div>

                {/* <img src={man} className='w-4/12' alt="professional middle aged man with confidence in her face." /> */}

            </div>
        </div >
    );
};

export default Banner;