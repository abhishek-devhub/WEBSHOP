'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import { cartLengthContext } from "@/app/context/context";
import { useSession, signOut } from "next-auth/react";
import SideBar from "./sideBar";

const Navbar = () => {
  const { cartLength } = useContext(cartLengthContext)
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        <button
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer p-1 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>

        <Link href="/" className="flex items-center gap-2 flex-1 md:flex-none">
          <i className="fa-brands fa-wolf-pack-battalion text-2xl md:text-3xl text-orange-500"></i>
          <span className="text-xl md:text-2xl font-bold tracking-wide">WolfStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold tracking-wide">
          <Link href="/Men" className="hover:text-orange-600 transition">Men</Link>
          <Link href="/women" className="hover:text-orange-600 transition">Women</Link>
          <Link href="/kids" className="hover:text-orange-600 transition">Kids</Link>
          <Link href="/newarrivials" className="hover:text-orange-600 transition">New Arrivals</Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-6 text-gray-700">
          <Link href='/Search' className="hover:text-orange-600 transition hidden sm:block"><i className="fa-solid fa-magnifying-glass text-xl md:text-2xl"></i></Link>
          <Link href="/cart" className="hover:text-orange-600 transition text-lg md:text-xl relative mr-2 md:mr-0">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[20px]" >
              {!cartLength ? <div>0</div> : cartLength}
            </span>
          </Link>

          {!session ? <Link
            href="/login"
            className="hidden sm:block px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-orange-400 text-white text-sm md:text-base font-medium hover:bg-orange-500 transition"
          >
            Login
          </Link>
            : <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="hidden sm:block ml-1 md:ml-2 px-3 py-1.5 md:px-4 md:py-2 cursor-pointer rounded-md bg-orange-400 text-white text-sm md:text-base font-medium hover:bg-orange-500 transition"
            >
              Logout
            </button>}
          <div className="ml-1 md:ml-0">
            <SideBar />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl py-4 px-6 flex flex-col gap-4 text-gray-800 font-semibold text-lg z-40 transition-all">
          <Link href="/Search" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-600 transition sm:hidden flex items-center gap-2 border-b pb-2">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </Link>
          <Link href="/Men" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-600 transition block pb-2 border-b">Men</Link>
          <Link href="/women" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-600 transition block pb-2 border-b">Women</Link>
          <Link href="/kids" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-600 transition block pb-2 border-b">Kids</Link>
          <Link href="/newarrivials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-600 transition block pb-2 border-b">New Arrivals</Link>

          <div className="pt-2 sm:hidden flex flex-col gap-3">
            {!session ? <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center w-full px-4 py-2 rounded-md bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
            >
              Login
            </Link> :
              <button
                onClick={() => { signOut({ callbackUrl: "/login" }); setIsMobileMenuOpen(false); }}
                className="text-center w-full px-4 py-2 rounded-md bg-orange-400 text-white font-medium hover:bg-orange-500 transition cursor-pointer"
              >
                Logout
              </button>}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
