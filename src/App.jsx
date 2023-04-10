import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const allJobsContext = createContext([])

function App() {

  const jobsData = useLoaderData()
  console.log(jobsData);


  return (
    <>
      <allJobsContext.Provider value={jobsData}>

        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

      </allJobsContext.Provider>
    </>
  )
}

export default App
