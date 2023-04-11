import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import Loading from './components/Loading'

export const allJobsContext = createContext([])
export const dynamicJobsContext = createContext([])
export const showAllJobsContext = createContext(null)

function App() {

  const navigation = useNavigation()
  console.log(navigation.state);

  if (navigation.state === 'loading') {
    return <Loading />
  }

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
      <allJobsContext.Provider value={jobsData}>
        <showAllJobsContext.Provider value={allDataShowFunction}>
          <dynamicJobsContext.Provider value={jobs}>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


          </dynamicJobsContext.Provider>
        </showAllJobsContext.Provider>
      </allJobsContext.Provider>
      <Toaster />
    </>
  )
}

export default App
