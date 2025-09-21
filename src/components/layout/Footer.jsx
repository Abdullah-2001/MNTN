import React from 'react';
import { themeColors } from '../../styles/colors';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* Left section */}
          <div className="md:w-1/2">
            <h2 className="title-font text-3xl md:text-4xl font-bold mb-6">MNTN</h2>
            <p className="text-font text-lg text-gray-300 max-w-md mb-8">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          
          {/* Right section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Blog links */}
            <div>
              <h3 className={`text-lg font-bold text-[${themeColors.accent}] mb-4`}>More on The Blog</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-font hover:text-amber-400 transition">About MNTN</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Contributors & Writers</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Write For Us</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Contact Us</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* MNTN links */}
            <div>
              <h3 className={`text-lg font-bold text-[${themeColors.accent}] mb-4`}>More on MNTN</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-font hover:text-amber-400 transition">The Team</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Jobs</a></li>
                <li><a href="#" className="text-font hover:text-amber-400 transition">Press</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;