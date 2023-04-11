import React from 'react';
import socialIcons from '../assets/social.png'

const Footer = () => {
    return (
        <div
            className='bg-neutral py-8 mt-16'
        >
            <div
                className='default-container gap-8 border-b border-gray-500 py-6 grid md:grid-cols-6'
            >
                <div className='flex flex-col gap-3 justify-center col-span-2 w-8/12'>
                    <h1
                        className='font-bold text-3xl text-white'
                    >SkilledGuys</h1>
                    <p
                        className='foot-text'
                    >
                        Maximizing your job search potential. Finding the perfect job match for you. Helping you take the next step in your career.


                    </p>
                    <img className='w-fit' src={socialIcons} alt="" />

                </div>

                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-white text-lg font-semibold'>Company</h1>
                    <a className='foot-text'>About Us</a>
                    <a className='foot-text'>Works</a>
                    <a className='foot-text'>Latest News</a>
                    <a className='foot-text'>Careers</a>
                </div>


                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-white text-lg font-semibold'>Product</h1>
                    <a className='foot-text'>Prototypes</a>
                    <a className='foot-text'>Plans & Pricing</a>
                    <a className='foot-text'>Customers</a>
                    <a className='foot-text'>Integration</a>
                </div>


                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-white text-lg font-semibold'>Support</h1>
                    <a className='foot-text'>Help Desk</a>
                    <a className='foot-text'>Sales</a>
                    <a className='foot-text'>Become a partner</a>
                    <a className='foot-text'>Developers</a>
                </div>


                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-white text-lg font-semibold'>Contact</h1>
                    <a className='foot-text text-xs'>Banani, Dhaka</a>
                    <a className='foot-text text-xs'>+880 1812 566842</a>
                </div>


            </div>

            <div
                className='flex justify-between flex-wrap default-container py-6'
            >
                <p className='text-gray-500 text-sm'>@2023 SkilledGuys. All Rights Reserved</p>
                <p className='text-gray-500 text-sm'>Powered by SkilledGuys</p>
            </div>

        </div>
    );
};

export default Footer;