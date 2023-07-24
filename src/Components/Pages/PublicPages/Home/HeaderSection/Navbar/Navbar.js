import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/highlights' },
    { name: 'Blogs', href: '/about' },
    { name: 'About', href: '/contact' },
]

const Navbar = () => {
    return (
        <div className='body-width absolute top-0'>
            <nav className="bg-transparent fixed w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center title-text text-2xl font-semibold whitespace-nowrap text-white md:text-[#ff7f00]">Explore World</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-[#ff7f00] rounded-lg md:rounded-3xl bg-transparent ring-2 ring-[#ff7f00] md:ring-0 md:border-2 border-[#ff7f00] mr-3 md:mr-0 py-1 md:py-2 px-4 md:px-8 text-[10px] md:text-sm font-bold md:font-semibold hover:bg-[#ffffffe6] hover:border-[#ffffffe6] hover:[#ff7f00] ease-linear duration-200">Sign In</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden border-2 border-white hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 md:text-white font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <NavLink to={item.href} className="block py-2 pl-3 md:px-0 rounded text-center hover:bg-[#ff7f00] focus:ring-2 md:focus:ring-0 ring-[#ffa042] focus:bg-transparent md:hover:bg-transparent md:mr-4 pr-4 nav-text relative font-semibold leading-6">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                            {/* <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;