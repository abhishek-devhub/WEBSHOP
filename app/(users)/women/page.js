import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getMensImages } from "@/components/MensImages";

export default async function Men() {
  const products = await getMensImages();

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl text-center mb-10">Women&apos;s Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products.map(product => (
            <Link
             key={product.id}
             href={`/product/${product.id}`}
             className="border rounded-lg p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full cursor-pointer"
              />
              <h2 className="mt-2 font-semibold">{product.name}</h2>
              <h2 className=" text-gray-400">{product.CardDescription}</h2>
              <p className="font-bold">${product.price}</p>
              <button className={` ${product.Offer ? "text-sm bg-orange-400 mt-2 font-semibold rounded-[10px] p-[5px] " : null} `}>{product.Offer}</button>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}