import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './components/Navbar'

export const allJobsContext = createContext([])

function App() {

  const jobsData = useLoaderData()
  console.log(jobsData);


  return (
    <>
      <allJobsContext.Provider value={jobsData}>

        <Navbar></Navbar>
        <Outlet></Outlet>

      </allJobsContext.Provider>
    </>
  )
}

export default App
