import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/Banner';
import Home from './components/Home';
import { allJobs, categories } from './utils/Loader';
import Blog from './components/Blog';
import FullJobCard from './components/FullJobCard';
import AppliedJobs from './components/AppliedJobs';
import { getAppliedData } from './utils/GetFromStorage';
import StartApplying from './components/StartApplying';
import ErrorPage from './components/ErrorPage';
import Statistics from './components/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: allJobs,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home>, loader: categories },
      { path: "blog", element: <Blog></Blog> },
      { path: "statistics", element: <Statistics></Statistics> },
      { path: "jobs/:id", element: <FullJobCard></FullJobCard>, loader: ({ params }) => fetch(`/jobs${params.id}.json`) },
      { path: "appliedjobs", element: <AppliedJobs></AppliedJobs> },
      { path: "startapplying", element: <StartApplying></StartApplying>, }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
