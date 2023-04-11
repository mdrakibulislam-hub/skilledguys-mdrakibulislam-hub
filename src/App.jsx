import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const allJobsContext = createContext([])
export const showAllJobsContext = createContext(null)

function App() {

  const jobsData = useLoaderData()

  const [jobs, setJobs] = useState([])

  useEffect(() => {

    const initialJobs = jobsData.slice(0, 4)
    setJobs(initialJobs)

  }, [])

  console.log(jobs);

  const allDataShowFunction = () => setJobs(jobsData)



  return (
    <>
      <allJobsContext.Provider value={jobs}>
        <showAllJobsContext.Provider value={allDataShowFunction}>

          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>

        </showAllJobsContext.Provider>
      </allJobsContext.Provider>
    </>
  )
}

export default App
