import React from 'react';
import { FaCarAlt, FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className=' border border-gray-600'>
      <div className="grid xl:grid-cols-1 grid-cols-1 ">
        <div className="p-5 ">
          <div className="py-4 px-6 rounded-xl border border-gray-800 bg-gradient-to-r from-gray-800 to-slate-900  shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <FaHamburger className="w-8 h-8 text-yellow-400 hover:text-orange-400 transition duration-300" />
                <span className="text-cyan-300 text-3xl font-semibold">HJ's Burgers</span>

                {/* Search Bar */}
                <div className="relative hidden lg:block md:block">
                  <input
                    className="rounded-3xl py-2 px-4 outline-none text-sm w-80 bg-white bg-opacity-20 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 transition duration-300"
                    placeholder="Search from menu.."
                  />
                  <FaSearch className="w-5 h-5 text-lime-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaBolt className="w-6 h-6 text-amber-300 hidden lg:block md:block" />
                <p className="text-white font-semibold text-xl hidden lg:block md:block">
                  Order now and get within{' '}
                  <span className="text-amber-300 text-xl font-semibold">15 minutes!</span>
                </p>
                <IoCart className="w-8 h-8 text-cyan-400 hover:text-amber-500 transition duration-300 rounded-full ring-2 ring-gray-600 hover:ring-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 