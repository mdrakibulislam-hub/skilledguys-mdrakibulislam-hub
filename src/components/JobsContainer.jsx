import React, { useContext } from 'react';
import { allJobsContext, dynamicJobsContext, showAllJobsContext } from '../App';
import JobsCard from './JobsCard';

const JobsContainer = () => {
    const jobsContext = useContext(dynamicJobsContext)
    const showAllJobsFunction = useContext(showAllJobsContext)

    console.log(showAllJobsContext);

    return (

        <div id='jobs-container' className='default-container flex flex-col justify-center'>

            <div>
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
            </div>

            <div
                className='grid md:grid-cols-2 gap-8'
            >

                {jobsContext.map(jobInfo => <JobsCard key={jobInfo._id} jobInfo={jobInfo}></JobsCard>)}
            </div>

            {jobsContext.length < 5 ?
                <button
                    onClick={showAllJobsFunction}
                    className='btn-primary mx-auto mt-16'
                >See All</button> :
                ""
            }

        </div>
    );
};

export default JobsContainer;