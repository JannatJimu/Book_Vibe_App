import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <div className="cursor-pointer">
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                        Book <span className="text-green-500">Vibe</span>
                    </h1>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <a
                        href=""
                        className="text-black hover:text-green-500 transition-all duration-300"
                    >
                        Home
                    </a>

                    <a
                        href=""
                        className="text-gray-600 hover:text-green-500 transition duration-300"
                    >
                        Listed Books
                    </a>

                    <a
                        href=""
                        className="text-gray-600 hover:text-green-500 transition duration-300"
                    >
                        Pages to Read
                    </a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="px-5 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:scale-105 hover:bg-green-600 transition-all duration-300">
                        Sign In
                    </button>

                    <button className="px-5 py-2 rounded-xl bg-cyan-400 text-white font-semibold shadow-md hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0"
                    }`}
            >
                <div className="px-6 flex flex-col gap-4 font-medium bg-white border-t border-gray-100">

                    <a
                        href=""
                        className="hover:text-green-500 transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href=""
                        className="text-gray-600 hover:text-green-500 transition duration-300"
                    >
                        Listed Books
                    </a>

                    <a
                        href=""
                        className="text-gray-600 hover:text-green-500 transition duration-300"
                    >
                        Pages to Read
                    </a>

                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 pt-3">
                        <button className="w-full px-5 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-all duration-300">
                            Sign In
                        </button>

                        <button className="w-full px-5 py-2 rounded-xl bg-cyan-400 text-white font-semibold shadow-md hover:bg-cyan-500 transition-all duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;