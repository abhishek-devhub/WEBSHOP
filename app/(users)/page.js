import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Mainpage from "@/components/Mainpage"

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
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Featured Collection
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover our handpicked selection of premium t-shirts designed for comfort and style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/1.webp"
                  alt="Premium T-shirt"
                  width={400}
                  height={350}
                  className="mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Buy Now
                </button>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Premium Cotton T-Shirt
                </h3>
                <p className="text-gray-500 mt-1">$29.99</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image src="/2.jpg" alt="T-shirt" width={400} height={350} className="mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Buy Now
                </button>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Classic Fit T-Shirt</h3>
                <p className="text-gray-500 mt-1">$24.99</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image src="/3.jpg" alt="T-shirt" width={400} height={350} className="mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Buy Now
                </button>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Oversized T-Shirt</h3>
                <p className="text-gray-500 mt-1">$34.99</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Mainpage />
      <Footer />
    </div>
  );
}
