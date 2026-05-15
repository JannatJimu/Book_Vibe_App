import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-100 bg-white/80 backdrop-blur-xl shadow-sm">

      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2 cursor-pointer group">

          <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md group-hover:scale-105 transition duration-300">
            <BookOpen size={20} />
          </div>

          <h1 className="text-2xl font-black tracking-tight text-gray-800">
            Book
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent ml-1">
              Vibe
            </span>
          </h1>
        </div>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to='/'
          
            className="relative text-gray-700 hover:text-cyan-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>

          <Link to='/listedBooks'
            
            className="relative text-gray-700 hover:text-cyan-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Listed Books
          </Link>

          <Link to='/pages'
            className="relative text-gray-700 hover:text-cyan-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Pages to Read
          </Link>
        </div>



        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <button className="px-5 py-2 rounded-xl border border-cyan-200 text-cyan-700 font-semibold hover:bg-cyan-50 transition-all duration-300">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-200 transition-all duration-300">
            Sign Up
          </button>

        </div>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl border border-cyan-100 hover:bg-cyan-50 transition duration-300"
        >
          {open ? (
            <X size={24} className="text-cyan-700" />
          ) : (
            <Menu size={24} className="text-cyan-700" />
          )}
        </button>
      </nav>



      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >

        <div className="mx-4 rounded-2xl border border-cyan-100 bg-white shadow-lg p-5 flex flex-col gap-5">

          <Link to='/'
            className="text-gray-700 hover:text-cyan-600 font-medium transition duration-300"
          >
            Home
          </Link>

          <Link to='/listedBooks'
            className="text-gray-700 hover:text-cyan-600 font-medium transition duration-300"
          >
            Listed Books
          </Link>

          <Link to='/pages'
            className="text-gray-700 hover:text-cyan-600 font-medium transition duration-300"
          >
            Pages to Read
          </Link>



          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-2">

            <button className="w-full px-5 py-2.5 rounded-xl border border-cyan-200 text-cyan-700 font-semibold hover:bg-cyan-50 transition duration-300">
              Sign In
            </button>

            <button className="w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-md hover:scale-[1.02] transition duration-300">
              Sign Up
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;