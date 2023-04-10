import React, { useContext } from 'react';

const CategoriesCard = ({ categoryData }) => {

    const { _id, img, title, vacancy } = categoryData

    return (
        <div
            className='bg-[#FCFBFF] px-12 py-8'
        >
            <img src={img} alt="" />
            <h3
                className='font-bold text-xl text-accent py-3'
            >{title}</h3>
            <p
                className='text-base font-medium text-[#a3a3a3]'
            >{vacancy} Jobs Available</p>
        </div>
    );
};

export default CategoriesCard;