import React, { useContext } from 'react';
import { categoriesContext } from './Home';
import CategoriesCard from './CategoriesCard';

const Categories = () => {

    const categoriesData = useContext(categoriesContext)

    return (
        <div className='default-container my-24'>
            <h1
                className='font-bold text-5xl text-center'
            >
                Job Category List
            </h1>

            <p
                className='font-medium text-base text-slate-500 text-center py-8'
            >
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>


            <div className='flex justify-between items-center flex-wrap gap-4 mx-auto'>
                {categoriesData.map(categoryData => <CategoriesCard key={categoryData._id} categoryData={categoryData}></CategoriesCard>)}
            </div>

        </div>
    );
};

export default Categories;