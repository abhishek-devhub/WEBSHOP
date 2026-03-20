'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Mainpage from "@/components/Mainpage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans selection:bg-orange-500 selection:text-white" ref={containerRef}>
      <Navbar />

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-hero.png"
            alt="Hero Background"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-black/40 to-black/80 mix-blend-multiply transition-colors duration-700"></div>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-screen-2xl mx-auto px-6 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter drop-shadow-2xl">
              WOLF<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">STORE</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-200 dark:text-zinc-300 text-lg md:text-2xl font-medium mb-12 max-w-3xl drop-shadow-lg leading-relaxed tracking-wide"
          >
            Redefining modern luxury. Uncompromising quality meets radical design for those who lead, not follow.
          </motion.p>

          <motion.a
            href="#shop"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-300 border border-transparent dark:border-zinc-800"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discover Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </motion.a>
        </div>
      </motion.div>

      <div className="w-full bg-orange-500 dark:bg-orange-600 text-white py-3 overflow-hidden border-y border-orange-400 dark:border-orange-500 flex bg-opacity-90 backdrop-blur-md">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 text-sm md:text-base font-bold tracking-widest uppercase items-center"
        >
          <span>Free Worldwide Shipping</span>
          <span>Premium Sustainable Materials</span>
          <span>Members Get 20% Off</span>
          <span>New Arrivals Every Week</span>
          <span>Free Worldwide Shipping</span>
          <span>Premium Sustainable Materials</span>
          <span>Members Get 20% Off</span>
          <span>New Arrivals Every Week</span>
        </motion.div>
      </div>

      <div id="shop" className="bg-white dark:bg-zinc-950 py-32 px-6 relative z-10 transition-colors duration-700">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white mb-4 tracking-tighter">
                New Arrivals
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-xl leading-relaxed">
                Curated essentials for the modern wardrobe. Defined by perfect fits and exceptional fabrics.
              </p>
            </div>
            <a href="/Search" className="text-orange-500 font-bold tracking-widest uppercase text-sm hover:text-orange-600 transition-colors border-b-2 border-orange-500 pb-1">
              View All Products
            </a>
          </motion.div>
            <p className="text-center text-gray-400 mb-6">This is just the dummy you can add the products in the mens page...</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { id: 1, src: "/1.webp", name: "Heavyweight Cotton Tee", price: "$45.00", tag: "Bestseller" },
              { id: 2, src: "/2.jpg", name: "Structured Boxy Fit", price: "$55.00", tag: "New" },
              { id: 3, src: "/3.jpg", name: "Oversized Vintage Wash", price: "$60.00", tag: "Limited" },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-6 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                  <motion.div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md text-zinc-950 dark:text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  </motion.div>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/10 dark:group-hover:bg-zinc-950/40 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 w-[85%]">
                    <button className="w-full bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white font-bold py-4 rounded-xl shadow-2xl hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 tracking-wide">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">{item.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">100% Organic Cotton</p>
                  </div>
                  <p className="text-zinc-950 dark:text-white font-black text-lg">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Mainpage />
      <Footer />
    </div>
  );
}
