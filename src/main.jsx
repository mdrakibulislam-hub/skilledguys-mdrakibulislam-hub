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
import { allJobs, categories } from './Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: allJobs,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: categories
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
