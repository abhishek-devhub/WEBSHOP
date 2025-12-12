"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Wolfstore</h2>
          <p className="text-gray-400 leading-relaxed">
            Premium shoes, crafted for comfort & performance.  
            Experience style that moves with you.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/Men" className="hover:text-white transition">Men</Link></li>
            <li><Link href="/women" className="hover:text-white transition">Women</Link></li>
            <li><Link href="/kids" className="hover:text-white transition">Kids</Link></li>
            <li><Link href="/sale" className="hover:text-white transition">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-white transition">Returns & Refunds</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to get special offers, free giveaways, and updates.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg font-medium hover:bg-gray-200 transition">
              Join
            </button>
          </div>

          <div className="flex space-x-4 mt-5">
            <i className="fa-brands fa-facebook text-xl hover:text-orange-500 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl hover:text-orange-500 cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-xl hover:text-orange-500 cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-xl hover:text-orange-500 cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Wolfstore. All Rights Reserved.
      </div>
    </footer>
  )
}
