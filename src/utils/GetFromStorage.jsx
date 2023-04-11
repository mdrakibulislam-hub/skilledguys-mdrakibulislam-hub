import { allJobs } from "../Loader";

export const getAppliedData = () => {
    const appliedJobs = []
    const allJobs = allJobs;
    const appliedJobsId = JSON.parse(localStorage.getItem("appliedJobs"));
    for (const key of appliedJobsId) {
        const isExist = allJobs.find(job => job._id === key)
        if (isExist) {
            appliedJobs.push(isExist)
        }
    }

    return appliedJobs;

}