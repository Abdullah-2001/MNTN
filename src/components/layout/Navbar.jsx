import React from 'react';
import Icon from '../ui/icon';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-[1000] flex justify-between items-center p-6 md:p-8">
            <div className="title-font text-white font-bold text-2xl">MNTN</div>

            <div className="md:hidden">
                <button className="text-white text-2xl">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
                <a href="#" className="navbar-links hover:text-[#FBD784] transition">Equipment</a>
                <a href="#" className="navbar-links hover:text-[#FBD784] transition">About us</a>
                <a href="#" className="navbar-links hover:text-[#FBD784] transition">Blog</a>
            </div>

            <div className="hidden md:block">
                <a href="#" className="text-white flex items-center hover:text-[#FBD784] transition">
                    <i className="fas fa-user-circle mr-2"></i>
                    <Icon name='account' />
                    <span className='text-font'>Account</span>
                </a>
            </div>
        </nav>
    );
}
