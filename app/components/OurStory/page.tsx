"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../data/data.json";

export default function OurStory() {
  const storyData = data.categories.Event.sections.OurStory.variants.EventOurStory1;

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#faf6fb] overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Soft Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ff0f7b]/10 to-[#6a11cb]/10 blur-3xl"></div>
        
        {/* Bottom Right Soft Glow */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#6a11cb]/10 to-[#ff0f7b]/10 blur-[100px]"></div>

        {/* Top Right Dotted Pattern */}
        <div className="absolute top-12 right-12 w-64 h-64 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
        
        {/* Bottom Left Dotted Pattern */}
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
      </div>
      
      {/* Sparkles */}
      <svg className="absolute top-[10%] right-[15%] w-8 h-8 text-pink-300 opacity-60 z-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
      </svg>
      <svg className="absolute top-[20%] left-[30%] w-6 h-6 text-purple-300 opacity-50 z-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
      </svg>
      <svg className="absolute bottom-[40%] right-[45%] w-7 h-7 text-purple-400 opacity-50 z-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
      </svg>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image Collage */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Soft background pattern behind images */}
            <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-50 -z-10"></div>
            
            <div className="flex flex-col gap-3 bg-white p-4 lg:p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[5/4] rounded-[16px] overflow-hidden">
                  <Image src={storyData.image1} alt="Event Story 1" fill className="object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="relative aspect-[5/4] rounded-[16px] overflow-hidden">
                  <Image src={storyData.image2} alt="Event Story 2" fill className="object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/2] rounded-[16px] overflow-hidden">
                  <Image src={storyData.image3} alt="Event Story 3" fill className="object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="relative aspect-[3/2] rounded-[16px] overflow-hidden">
                  <Image src={storyData.image4} alt="Event Story 4" fill className="object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
              {/* Row 3 */}
              <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden">
                <Image src={storyData.image5} alt="Event Story 5" fill className="object-cover hover:scale-105 transition-transform duration-700"/>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-[#be29ab] font-bold tracking-[0.2em] text-[16px] md:text-[20px] uppercase">
                {storyData.subtitle}
              </h4>
              <div className="flex items-center">
                <span className="w-16 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] rounded-full"></span>
                <span className="text-[#be29ab] ml-2 text-2xl leading-none">+</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-[#0f172a] leading-[1.15] mb-2">
              {storyData.titleStart} <br className="hidden md:block" />
              {storyData.titleMid}
            </h2>
            
            {/* Cursive Title */}
            <div className="relative inline-block mb-6 md:mb-8 mt-2">
              <h3 className="text-[40px] md:text-[60px] lg:text-[64px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff0f7b] to-[#6a11cb] leading-[0.8] pb-2 pr-6 whitespace-nowrap">
                {storyData.titleCursive}
              </h3>
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[16px] opacity-90" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M 10 18 L 195 4" stroke="url(#paint0_linear_story)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_story" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff0f7b"/>
                    <stop offset="1" stopColor="#6a11cb"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Descriptions */}
            <div className="space-y-5 text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
              <p className="font-medium text-[#140830]">{storyData.desc1}</p>
              
              <div className="flex items-center justify-start w-full my-1">
                <div className="h-[2px] w-32 bg-[#ff0f7b]/80"></div>
                <svg className="ml-3 text-[#7c3aed]" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                </svg>
              </div>
              
              <p>{storyData.desc2}</p>
              <p>{storyData.desc3}</p>
              <p>
                {storyData.desc4.split("EventBazaar.com")[0]}
                <span className="text-[#d1135c] font-semibold">EventBazaar.com</span>
                {storyData.desc4.split("EventBazaar.com")[1]}
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
