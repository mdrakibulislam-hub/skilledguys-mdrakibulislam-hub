import React, { useContext } from 'react';
import { allJobsContext } from '../App';
import AppliedJobsCard from './AppliedJobsCard';
import JobsCard from './JobsCard';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';

const StartApplying = () => {
    const navigation = useNavigation()
    console.log(navigation.state);

    if (navigation.state === 'loading') {
        return <Loading />
    }

    const jobsContext = useContext(allJobsContext)

    return (
        <div
            className='default-container grid md:grid-cols-2 gap-8 my-10'
        >
            {
                jobsContext.map(jobInfo => <JobsCard key={jobInfo._id} jobInfo={jobInfo}></JobsCard>)
            }
        </div>
    );
};

export default StartApplying;