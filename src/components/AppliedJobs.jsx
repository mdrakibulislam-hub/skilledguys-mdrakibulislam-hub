import React, { useContext, useEffect, useState } from 'react';
import { allJobsContext } from '../App';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from './AppliedJobsCard';

const AppliedJobs = () => {

    const allJobs = useContext(allJobsContext)
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const appliedJobs = []
        const appliedJobsId = JSON.parse(localStorage.getItem("appliedJobs"));
        if (appliedJobsId) {
            for (const key of appliedJobsId) {
                const isExist = allJobs.find(job => job._id === key);
                if (isExist) {
                    appliedJobs.push(isExist)
                }
            }
        }
        setAppliedJobs(appliedJobs)

    }, [])

    console.log(appliedJobs);

    return (
        <div className='default-container'>
            {
                appliedJobs.length < 1 ? <h1 className='font-bold mt-8 text-4xl text-center'>You haven't applied yet.</h1> : appliedJobs.map(jobs => <AppliedJobsCard key={jobs._id} jobs={jobs}></AppliedJobsCard>)
            }
        </div>
    );
};

export default AppliedJobs;