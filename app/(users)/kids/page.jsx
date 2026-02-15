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
        <h1 className="text-4xl font-bold text-center mb-10">Men&apos;s Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              <div className="relative">
                <Image
                  src={product.imageUrl[0]}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.price < 1000 && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Hot Deal 🔥
                  </span>
                )}
              </div>

              <div className="p-4">
                <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-lg">${product.price}</p>
                  {product.sizes && (
                    <p className="text-xs bg-gray-200 px-2 py-1 rounded">{product.sizes.join(", ")}</p>
                  )}
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                )}

                <p className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
