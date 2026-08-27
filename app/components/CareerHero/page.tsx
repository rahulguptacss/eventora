"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, PlayCircle, Users } from "lucide-react";
import data from "../../data/data.json";

export default function CareerHero() {
  const heroData = data.categories.Event.sections.CareerHero.variants.EventCareerHero1;

  return (
    <section className="relative pt-8 pb-8 lg:pt-12 lg:pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex flex-col items-center mb-6">
              <span className="text-purple-600 font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">{heroData.subheader}</span>
              <div className="flex items-center gap-2">
                <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
                <span className="text-purple-600 text-[14px] leading-none flex items-center h-[2px]">✦</span>
                <span className="w-12 h-[2px] bg-purple-600 rounded-full"></span>
              </div>
            </div>
            
            <h1 className="text-[40px] md:text-[50px] lg:text-[56px] font-semibold text-[#131336] leading-[1.1] mb-2 tracking-tight">
              {heroData.title1}
            </h1>
            <h1 className="text-[40px] md:text-[50px] lg:text-[56px] font-semibold text-[#131336] leading-[1.1] mb-2 tracking-tight">
              {heroData.title2}
            </h1>
            <div className="relative inline-block mb-6 -mt-2">
              <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-none pb-2 px-2">
                {heroData.title3}
              </h2>
              <svg className="absolute -bottom-1 right-0 w-[78%] h-[14px]" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14 Q 90 0 196 8" stroke="url(#paint0_linear_hero)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_hero" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ec4899" />
                    <stop offset="1" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <p className="text-[#374151] text-[16px] leading-[1.8] font-medium mb-10 max-w-[480px]">
              {heroData.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-8 py-3.5 rounded-lg font-semibold text-[16px] transition-opacity flex items-center gap-3">
                <Users size={22} strokeWidth={1.5} />
                {heroData.btn1}
              </button>
              <button className="cursor-pointer bg-white hover:bg-gray-50 text-[#131336] border border-[#131336] px-8 py-3.5 rounded-lg font-semibold text-[16px] transition-colors flex items-center gap-3">
                <PlayCircle size={22} strokeWidth={2} className="text-pink-500" />
                {heroData.btn2}
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Pink Blob/Circle Background */}
            <motion.div 
              animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-10 w-[400px] h-[400px] bg-[#fdf2f7] rounded-full blur-3xl -z-10"
            ></motion.div>
            
            {/* Dot Pattern */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 z-0"
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#d100c8" fillOpacity="0.3" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </motion.div>
            
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img 
                src={heroData.image} 
                alt="Careers at Eventora" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
