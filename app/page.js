import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Men from "./Men/page";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Navbar />

      <div className="relative w-full h-screen bg-[url('/t-shirt.png')] bg-center bg-cover opacity-95">
        <div className="absolute inset-0 bg-black/40 "></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            WOLFSTORE <span className="text-orange-500">designable</span>
          </h1>

          <p className="text-white/90 text-lg md:text-2xl mb-6 max-w-xl">
            WolfStore is a modern lifestyle brand offering stylish, high-quality apparel designed for confidence, comfort, and everyday performance.
          </p>

          <a
            href="#shop"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
