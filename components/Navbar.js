import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <i className="fa-brands fa-wolf-pack-battalion text-3xl text-orange-500"></i>
          <span className="text-2xl font-bold tracking-wide">WolfStore</span>
        </Link>

        {/* Center Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold tracking-wide">
          <Link href="/Men" className="hover:text-orange-600 transition">Men</Link>
          <Link href="#" className="hover:text-orange-600 transition">Women</Link>
          <Link href="#" className="hover:text-orange-600 transition">Kids</Link>
          <Link href="#" className="hover:text-orange-600 transition">New Arrivals</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          
          <Link href="/search" className="hover:text-orange-600 transition text-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          <Link href="/cart" className="hover:text-orange-600 transition text-xl relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>

          <Link 
            href="/login" 
            className="px-4 py-2 rounded-md bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
