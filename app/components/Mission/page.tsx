"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Image from "next/image";
import data from "../../data/data.json";

export default function Mission() {
  const missionData = data.categories.Event.sections.Mission.variants.EventMission1;

  return (
    <section className="bg-[#fff7fa] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center pt-8 pb-0 lg:py-10 px-6 md:px-12 lg:pl-12 lg:pr-24 xl:pl-20 xl:pr-32"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:gap-8">
            
            {/* Desktop Icon */}
            <div className="hidden md:flex w-16 h-16 rounded-full bg-[#ffe8f0] items-center justify-center shrink-0 -mt-2">
              <Target size={28} className="text-[#ff1f6d]" />
            </div>

            <div className="flex flex-col items-start">
              
              {/* Top row: Mobile Icon + Small Header */}
              <div className="flex items-center gap-4 md:mb-6 mb-4">
                {/* Mobile Icon */}
                <div className="md:hidden w-12 h-12 rounded-full bg-[#ffe8f0] flex items-center justify-center shrink-0">
                  <Target className="text-[#ff1f6d] w-5 h-5" />
                </div>
                
                {/* Small Header */}
                <div className="flex flex-col items-center">
                  <span className="text-[#ff1f6d] font-bold tracking-widest text-[13px] md:text-[14px] uppercase mb-1">
                    {missionData.title}
                  </span>
                  <div className="flex items-center justify-center">
                    <div className="h-[2px] bg-[#ff1f6d] w-8 md:w-10 opacity-80"></div>
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#ff1f6d] mx-2 fill-current opacity-90" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <div className="h-[2px] bg-[#ff1f6d] w-8 md:w-10 opacity-80"></div>
                  </div>
                </div>
              </div>
            
            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#050b14] mb-3 leading-tight tracking-tight">
              {missionData.subtitle}
            </h2>
            <div className="w-16 md:w-20 h-[3px] bg-[#ff1f6d] mb-6"></div>
            
            {/* Paragraph */}
            <p className="text-[#4a5568] text-[13px] md:text-[14px] leading-[1.8] max-w-[480px] pr-4 md:pr-10 font-medium mb-0 lg:mb-6">
              {missionData.desc}
            </p>
            
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[400px] lg:min-h-[450px] mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-5 md:inset-8 lg:inset-0 rounded-2xl lg:rounded-none overflow-hidden">
            <Image 
              src={missionData.image} 
              alt={missionData.subtitle} 
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
