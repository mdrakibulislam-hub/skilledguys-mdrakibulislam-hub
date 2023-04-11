import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const allData = useLoaderData()
    console.log(allData);
    return (
        <div
            className='default-container'
        >
            <h1>blog Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ratione aspernatur corrupti qui aperiam, eum suscipit repellat, pariatur id libero minus necessitatibus soluta obcaecati et nihil vitae. Porro illum sunt totam, dolore eveniet modi deserunt magni quasi pariatur dolorem officiis, rerum repellat! Aut enim molestias quam itaque facilis. Dolorum, earum.</h1>
        </div>
    );
};

export default Blog;