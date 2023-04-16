import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollarSign, faMap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AppliedJobsCard = ({ jobs }) => {

    const { _id, salary, companyLogo, companyName, jobTitle, workLocation, timeType, location, } = jobs
    return (
        <div className='flex justify-between items-center border-2 border-[#E8E8E8] p-8 rounded-md mt-8'>
            <div className='grid md:grid-cols-2 gap-8 items-center' >
                <div
                    className='bg-secondary w-full h-full rounded-md flex'
                >
                    <img className='mx-auto my-auto' src={companyLogo} alt="" />
                </div>
                <div>
                    <h3
                        className='text-2xl font-bold text-accent mt-4'
                    >{jobTitle}</h3>
                    <p
                        className='text-lg font-semibold text-success'
                    >{companyName}</p>

                    <div
                        className='flex gap-2 mt-4'
                    >
                        <div
                            className='card-outline-button'
                        >{workLocation}</div>
                        <div
                            className='card-outline-button'
                        >{timeType}</div>
                    </div>


                    <div
                        className='flex gap-2 text-base text-success font-medium my-4'
                    >
                        <div>
                            <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> {location}</div>
                        <div>
                            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> {salary}</div>
                    </div>


                </div>
            </div >


            <Link to={`../jobs/${_id}`}>
                <button
                    className='btn-primary'
                >View Details</button>
            </Link>
        </div >
    );
};

export default AppliedJobsCard; <h1>apjobs</h1>