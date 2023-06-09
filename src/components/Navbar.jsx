import React from 'react';
import { Link, NavLink } from "react-router-dom";

<NavLink
    to="/messages"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    }
>
    Messages
</NavLink>;

const Navbar = () => {
    return (
        <div>


            {/* navbar starts here */}

            <div className='bg-secondary'>
                <div className="navbar default-container py-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost px-2 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="statistics"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Statistics
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="appliedjobs"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Applied Jobs
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="blog"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link to='/' className="p-0 normal-case text-3xl font-bold">SkilledGuys</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="statistics"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="appliedjobs"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Applied Jobs
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="blog"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='startapplying' className="btn-primary">Start Applying</Link>
                    </div>
                </div>
            </div>

            {/* navbar ends here */}

        </div>
    );
};

export default Navbar;