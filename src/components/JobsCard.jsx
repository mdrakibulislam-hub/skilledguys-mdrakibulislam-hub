import React from 'react';

const JobsCard = ({ jobInfo }) => {
    const { _id, salary, companyLogo, companyName, jobTitle, workLocation, timeType, location, } = jobInfo
    return (
        <div
            className='border-2 border-success p-8 rounded-md'
        >
            <img src={companyLogo} alt="Brand Logo" />
            <h3
                className='text-2xl font-bold text-accent'
            >{jobTitle}</h3>
            <p
                className='text-lg font-semibold text-success'
            >{companyName}</p>
            <div
                className='flex gap-2'
            >
                <div
                    className='card-outline-button'
                >{workLocation}</div>
                <div
                    className='card-outline-button'
                >{timeType}</div>
            </div>
            <div
                className='flex gap-2 text-base text-success font-medium'
            >
                <div>{location}</div>
                <div>{salary}</div>
            </div>
            <button
                className='btn-primary'
            >View Details</button>

        </div>
    );
};

export default JobsCard;