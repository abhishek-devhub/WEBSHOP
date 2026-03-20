'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Zap, RotateCcw } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: "Free Shipping",
    description: "Enjoy complimentary express shipping on all orders over $50."
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Premium Quality",
    description: "Crafted with top-tier materials for lasting comfort and style."
  },
  {
    id: 3,
    icon: <RotateCcw className="w-8 h-8 text-orange-500" />,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund."
  },
  {
    id: 4,
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Fast Support",
    description: "Our 24/7 customer service team is always here to help you."
  }
];

const Mainpage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.5 } }
  };

  return (
    <div className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Why Choose WolfStore
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We believe in providing more than just clothing. We deliver an experience defined by quality, trust, and exceptional service.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] hover:border-orange-100 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-orange-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Mainpage;
