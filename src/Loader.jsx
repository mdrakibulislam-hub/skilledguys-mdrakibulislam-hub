export const allJobs = async () => {
    const jobsData = await fetch('jobs.json')
    const jobs = await jobsData.json()
    return jobs
}

export const categories = async () => {
    const categoriesData = await fetch('catagories.json')
    const categories = await categoriesData.json()
    return categories
}