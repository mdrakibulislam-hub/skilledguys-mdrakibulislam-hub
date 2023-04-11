import React from 'react';
import loadingSpinner from '../assets/loader.gif';

const Loading = () => {
    return (
        <div className='grid place-content-center min-h-[calc(100vh-95px)]'>
            <div className='flex gap-3'>
                <img src={loadingSpinner} alt="" />
                <h3 className='text-3xl'>Loading</h3>
            </div>
        </div>
    );
};

export default Loading;