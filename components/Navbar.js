'use client'
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { cartLengthContext } from "@/app/context/context";
import { useSession , signOut } from "next-auth/react";
import SideBar from "./sideBar";


const Navbar = () => {
  const { cartLength } = useContext(cartLengthContext)
  const { data: session, status } = useSession()
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        <Link href="/" className="flex items-center gap-2">
          <i className="fa-brands fa-wolf-pack-battalion text-3xl text-orange-500"></i>
          <span className="text-2xl font-bold tracking-wide">WolfStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold tracking-wide">
          <Link href="/Men" className="hover:text-orange-600 transition">Men</Link>
          <Link href="/women" className="hover:text-orange-600 transition">Women</Link>
          <Link href="/kids" className="hover:text-orange-600 transition">Kids</Link>
          <Link href="/newarrivials" className="hover:text-orange-600 transition">New Arrivals</Link>
        </nav>

        <div className="flex items-center gap-6 text-gray-700">
          <Link href='/Search' className="hover:text-orange-600 transition"><i className="fa-solid fa-magnifying-glass text-2xl"></i></Link>
          <Link href="/cart" className="hover:text-orange-600 transition text-xl relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded-full" >
              {!cartLength ? <div>0</div> : cartLength}
            </span>
          </Link>

          {!session ? <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
          >
            Login
          </Link>
            : <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="ml-2 px-4 py-2 cursor-pointer rounded-md bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
            >
              Logout
            </button>}
            <div className="">
            <SideBar />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
