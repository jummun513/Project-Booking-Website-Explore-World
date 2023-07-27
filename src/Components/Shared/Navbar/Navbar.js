import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
]

const Navbar = () => {
    const [navtoggle, setNavToggle] = useState(false);

    return (
        <div className='absolute top-0 w-full'>
            <nav className="bg-transparent relative max-w-screen-xl mx-auto z-50 top-0 left-0">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center title-text text-2xl md:text-3xl font-semibold whitespace-nowrap text-[#ff7f00]">Explore World</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-[#ff7f00] rounded-lg md:rounded-3xl bg-[#ffffffe6] ring-2 ring-[#ffffffe6] md:ring-0 md:border-2 border-[#ffffffe6] mr-3 md:mr-0 py-0 md:py-2 px-4 md:px-8 text-[12px] md:text-sm font-bold md:font-semibold hover:bg-transparent hover:border-[#ff7f00] ease-linear duration-200">Sign In</button>
                        <button onClick={() => setNavToggle(!navtoggle)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden border-2 border-white hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${navtoggle ? "block" : "hidden"} 'items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 text-black md:text-white font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {navigation.map((item) => (
                                <li id='sidebar' key={item.name}>
                                    <NavLink to={item.href} className="block py-2 pl-3 md:px-0 rounded text-center hover:bg-[#ff7f00] focus:ring-2 md:focus:ring-0 ring-[#ffa042] focus:bg-transparent md:hover:bg-transparent md:mr-4 pr-4 nav-text relative font-semibold leading-6">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;