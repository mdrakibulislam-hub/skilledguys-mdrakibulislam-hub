import React, { useContext, useEffect, useState } from 'react';
import { allJobsContext } from '../App';
import { useLoaderData, useNavigation } from 'react-router-dom';
import AppliedJobsCard from './AppliedJobsCard';
import toast, { Toaster } from 'react-hot-toast';
import Loading from './Loading';

const AppliedJobs = () => {

    const navigation = useNavigation()
    console.log(navigation.state);

    if (navigation.state === 'loading') {
        return <Loading />
    }

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

    const filterFulltimeJobsHander = () => {
        const filteredJobs = appliedJobs.filter(job => job.timeType === "Full time")
        setAppliedJobs(filteredJobs)
    }

    const filterParttimeJobsHander = () => {
        const filteredJobs = appliedJobs.filter(job => job.timeType === "Part time")
        setAppliedJobs(filteredJobs)
    }

    const clearCartHandler = () => {
        localStorage.clear("appliedJobs")
        toast.error("All Application Cleared")
        setAppliedJobs([])
    }

    console.log(appliedJobs);

    return (
        <div className='default-container mt-8'>
            <div className='flex gap-6 justify-end flex-wrap'>
                <button
                    onClick={filterFulltimeJobsHander}
                    className='btn-primary'>Filter by Full Time</button>
                <button
                    onClick={filterParttimeJobsHander}
                    className='btn-primary'>Filter by Part Time</button>
                {appliedJobs.length < 1 ? '' : <button
                    onClick={clearCartHandler}
                    className='btn-primary'>Clear history</button>}
            </div>
            {
                appliedJobs.length < 1 ? <h1 className='font-bold mt-8 text-4xl text-center'>Empty.</h1> : appliedJobs.map(jobs => <AppliedJobsCard key={jobs._id} jobs={jobs}></AppliedJobsCard>)
            }
        </div>
    );
};

export default AppliedJobs;