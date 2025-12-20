
import Image from "next/image";
import Footer from "@/components/Footer";
import { getMensImages } from "@/components/MensImages";
import Navbar from "@/components/Navbar";
import AddtoCart from "@/components/AddtoCart";
import SizeSelctor from "@/components/SizeSelctor";

export default async function ProductPage({ params }) {

  const products = await getMensImages();
  const { id } = await params

  const product = products.find(p => p.id === id)


  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="flex gap-4">

            <div className="flex flex-col gap-3">
              <div className="border rounded-lg p-1 cursor-pointer">
                <Image src={product.image} alt={product.name} width={80} height={100} className="object-contain" />
              </div>
              <div className="border rounded-lg p-1 cursor-pointer">
                <Image src={product.image} alt={product.name} width={80} height={100} className="object-contain" />
              </div>
              <div className="border rounded-lg p-1 cursor-pointer">
                <Image src={product.image} alt={product.name} width={80} height={100} className="object-contain" />
              </div>
            </div>

            <div className="relative bg-gray-100 rounded-xl p-3 flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={420}
                height={520}
                className="object-contain transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                priority
              />
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow cursor-pointer">
                ❤
              </button>
            </div>

          </div>

          <section className="space-y-5">

            <h1 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                4.6 ★
              </span>
              <span className="text-gray-600 text-sm">
                26 ratings & 2 reviews
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-green-600 font-semibold text-sm">Special price</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="line-through text-gray-400 text-lg">$85</span>
                <span className="text-green-600 font-semibold">44% off</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Size</p>
              <SizeSelctor />
            </div>

            <div className="space-y-2 text-sm">
              <p className="font-medium">Available offers</p>
              <ul className="space-y-1 text-gray-700">
                <li>Bank Offer 5% cashback on Axis Bank Cards</li>
                <li>Bank Offer 5% cashback on SBI Credit Card</li>
                <li>Combo Offer Buy more save more</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <AddtoCart product={product} />
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer">
                Buy Now
              </button>
            </div>

          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
