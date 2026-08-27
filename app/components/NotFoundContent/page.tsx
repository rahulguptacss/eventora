"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Star } from "lucide-react";
import data from "../../data/data.json";

export default function NotFoundContent() {
  const pageData = data.categories.Event.sections.NotFoundContent.variants.EventNotFoundContent1;

  return (
    <section 
      className="relative pt-4 pb-72 lg:py-20 overflow-hidden min-h-[50vh] lg:min-h-[60vh] flex items-center bg-no-repeat bg-right-bottom bg-[length:auto_280px] md:bg-[length:100%_auto] lg:bg-center lg:bg-cover"
      style={{ backgroundImage: `url(${pageData.image})`, backgroundColor: '#fff7fa' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto w-full">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left bg-white/40 lg:bg-transparent p-6 rounded-3xl backdrop-blur-sm lg:backdrop-blur-none lg:p-0">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="text-[100px] md:text-[140px] lg:text-[180px] font-poppins font-extrabold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a7a] to-[#8b31ff]"
            >
              {pageData.title404}
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[28px] md:text-[36px] lg:text-[38px] font-bold text-[#0a1128] font-poppins mb-3"
            >
              {pageData.heading}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 md:gap-4 mb-5"
            >
              <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#e32879]" />
              <Star className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] text-[#e32879]" fill="currentColor" />
              <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#e32879]" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-800 lg:text-gray-600 font-medium text-[14px] md:text-[16px] leading-[1.6] max-w-sm mb-8"
            >
              {pageData.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/" 
                className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-2 bg-gradient-to-r from-[#ff2a7a] to-[#8b31ff] text-white px-8 py-3 rounded-full font-medium shadow-[0_4px_15px_rgba(255,42,122,0.3)] hover:shadow-[0_8px_25px_rgba(255,42,122,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex-1 text-center sm:flex-none">Back to Home</span>
                <Home size={18} className="shrink-0" />
              </Link>
              
              <Link 
                href="/services" 
                className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-2 bg-transparent border-[1.5px] border-[#8b31ff] text-[#8b31ff] px-8 py-3 rounded-full font-medium hover:bg-gradient-to-r hover:from-[#ff2a7a] hover:to-[#8b31ff] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex-1 text-center sm:flex-none">Explore Services</span>
                <ArrowRight size={18} className="shrink-0" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
