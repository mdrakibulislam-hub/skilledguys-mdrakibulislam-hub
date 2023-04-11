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

    const filterOnsiteJobsHander = () => {
        const filteredJobs = appliedJobs.filter(job => job.workLocation === "Onsite")
        setAppliedJobs(filteredJobs)
    }

    const filterRemoteJobsHander = () => {
        const filteredJobs = appliedJobs.filter(job => job.workLocation === "Remote")
        setAppliedJobs(filteredJobs)
    }

    const clearCartHandler = () => {
        localStorage.clear("appliedJobs")
        toast.error("All Application Cleared")
        setAppliedJobs([])
    }

    console.log(appliedJobs);

    return (

        <>

            <div className='bg-[#F9F8FF] h-72 flex justify-center items-center job-page-banner bg-no-repeat bg-fixed'>
                <h1 className='default-container text-center text-4xl font-bold text-neutral'>Applied Jobs</h1>
            </div >

            <div className='default-container mt-8'>

                <div className='flex gap-6 justify-end flex-wrap'>
                    <button
                        onClick={filterOnsiteJobsHander}
                        className='btn-primary'>Filter Onsite Jobs</button>
                    <button
                        onClick={filterRemoteJobsHander}
                        className='btn-primary'>Filter Remote Jobs</button>
                    {appliedJobs.length < 1 ? '' : <button
                        onClick={clearCartHandler}
                        className='btn-warn'>Clear history</button>}
                </div>
                {
                    appliedJobs.length < 1 ? <h1 className='font-bold mt-8 text-4xl text-center'>Empty.</h1> : appliedJobs.map(jobs => <AppliedJobsCard key={jobs._id} jobs={jobs}></AppliedJobsCard>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;