import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollarSign, faCalendar, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { applyBtnHandler } from '../utils/AddToStorage';
import toast, { Toaster } from 'react-hot-toast';


const FullJobCard = () => {
    const jobData = useLoaderData()
    console.log(jobData);
    return (
        <>
            <div
                className='bg-[#F9F8FF] h-72 flex justify-center items-center job-page-banner bg-no-repeat bg-fixed'
            >
                <h1
                    className='default-container text-center text-4xl font-bold text-neutral'
                >{jobData.companyName}</h1>
            </div >
            <div
                className='default-container grid grid-cols-3 my-16 gap-8'
            >
                <div
                    className='col-span-2'
                >
                    <p
                        className='text-justify'
                    >
                        <span className='font-bold'>Job Description:</span> {jobData.description}
                    </p>

                    <p
                        className='text-justify mt-8'
                    >
                        <span className='font-bold'>Job Responsibility:</span> {jobData.responsibility}
                    </p>

                    <p
                        className='text-justify mt-8'
                    >
                        <p className='font-bold'>Educational Requirement:</p> {jobData.educationalRequirements}
                    </p>

                    <p
                        className='text-justify mt-8'
                    >
                        <p className='font-bold'>Experiences:</p> {jobData.experience} in this field.
                    </p>

                </div>
                <div
                    className='flex flex-col gap-4'
                >

                    <div
                        className='bg-[#F4F1FF] p-6 rounded-lg'
                    >
                        <h1
                            className='text-neutral font-bold text-xl'
                        >Job Details</h1>
                        <hr className='mt-3' />

                        <div
                            className='flex flex-col gap-1'
                        >
                            <p className='mt-3'><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> <span className='font-bold'>Salary:</span> {jobData.salary} (Per Month)</p>
                            <p><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> <span className='font-bold'>Job Title:</span> {jobData.jobTitle}</p>
                        </div>

                        <h1
                            className='text-neutral font-bold text-xl mt-4'
                        >Contact Information</h1>
                        <hr className='mt-2' />

                        <div className='mt-2 flex flex-col gap-1'>
                            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <span className='font-bold'>Phone:</span> {jobData.contactInformation.phone}</p>
                            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span className='font-bold'>Phone:</span> {jobData.contactInformation.email}</p>
                            <p><FontAwesomeIcon icon={faMap}></FontAwesomeIcon> <span className='font-bold'>Address:</span> {jobData.location}</p>
                        </div>

                    </div>

                    <button
                        onClick={() => applyBtnHandler(jobData._id)}
                        className='btn-primary'
                    >
                        Apply Now
                    </button>


                </div>

            </div>
        </>
    );
};

export default FullJobCard;