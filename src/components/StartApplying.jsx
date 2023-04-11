import React, { useContext } from 'react';
import { allJobsContext } from '../App';
import AppliedJobsCard from './AppliedJobsCard';
import JobsCard from './JobsCard';

const StartApplying = () => {
    const jobsContext = useContext(allJobsContext)
    return (
        <div
            className='default-container grid grid-cols-2 gap-8 my-10'
        >
            {
                jobsContext.map(jobInfo => <JobsCard key={jobInfo._id} jobInfo={jobInfo}></JobsCard>)
            }
        </div>
    );
};

export default StartApplying;