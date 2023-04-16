import React, { createContext, useContext } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import { allJobsContext } from '../App';
import JobsContainer from './JobsContainer';


export const categoriesContext = createContext([])


const Home = () => {

    const categoriesData = useLoaderData()
    const jobsData = useContext(allJobsContext)

    return (
        <>


            <categoriesContext.Provider value={categoriesData}>
                <Banner></Banner>
                <Categories></Categories>
                <JobsContainer></JobsContainer>
            </categoriesContext.Provider>


        </>
    );
};

export default Home;