'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none cursor-pointer">
                <i className="fa-solid fa-user text-2xl"></i>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                    <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 ">Profile</Link>
                    <Link href="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</Link>
                    <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
                    <button onClick={() => signOut({ callbackUrl: "/login" })} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</button>
                    </div>
                    )}
        </div>
    )
}

export default SideBar
