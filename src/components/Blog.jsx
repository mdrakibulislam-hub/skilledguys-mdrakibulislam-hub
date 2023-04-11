import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const allData = useLoaderData()
    console.log(allData);
    return (
        <div
            className='default-container'
        >


            <div
                className='p-8 rounded-lg border mt-8'
            >
                <h1
                    className='font-bold text-3xl'
                >
                    When should you use context API?
                </h1>
                <p>
                    you should use the Context API when you have data that needs to be accessed by multiple components, but you don't want to pass the data down through every component in between.
                </p>
            </div>



            <div
                className='p-8 rounded-lg border mt-8'
            >
                <h1
                    className='font-bold text-3xl'
                >
                    What is a custom hook?
                </h1>
                <p>
                    Custom hooks are used to encapsulate logic that can be shared between multiple components. For example, you might have a custom hook that handles form validation or one that fetches data from an API. By creating a custom hook, you can avoid duplicating code across multiple components and keep your codebase more organized and maintainable.

                </p>
            </div>




            <div
                className='p-8 rounded-lg border mt-8'
            >
                <h1
                    className='font-bold text-3xl'
                >
                    What is useRef?
                </h1>
                <p>
                    useRef is a powerful hook that allows you to access and manipulate DOM elements, as well as store values that persist between renders without triggering a re-render.


                </p>
            </div>



            <div
                className='p-8 rounded-lg border mt-8'
            >
                <h1
                    className='font-bold text-3xl'
                >
                    What is useMemo?
                </h1>
                <p>
                    useMemo is a hook that can help to optimize your application by memoizing the result of a function so that it only re-computes when its dependencies change.


                </p>
            </div>



        </div>
    );
};

export default Blog;