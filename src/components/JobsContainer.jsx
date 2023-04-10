import React, { useContext } from 'react';
import { allJobsContext } from '../App';
import JobsCard from './JobsCard';

const JobsContainer = () => {
    const jobsContext = useContext(allJobsContext)

    return (

        <div className='default-container'>

            <h1
                className='font-bold text-5xl text-center'
            >
                Featured Jobs
            </h1>

            <p
                className='font-medium text-base text-slate-500 text-center py-8'
            >
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>

            <div
                className='grid grid-cols-2 gap-8'
            >

                {jobsContext.map(jobInfo => <JobsCard key={jobInfo._id} jobInfo={jobInfo}></JobsCard>)}
            </div>

        </div>
    );
};

export default JobsContainer;