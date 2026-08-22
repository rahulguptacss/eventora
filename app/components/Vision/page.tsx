"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import data from "../../data/data.json";

export default function Vision() {
  const visionData = data.categories.Event.sections.Vision.variants.EventVision1;

  return (
    <section className="bg-[#fbf9ff] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Image Content (Left on Desktop, Top on Mobile) */}
        <motion.div 
          className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[400px] lg:min-h-[450px] mb-8 lg:mb-0 order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-5 md:inset-8 lg:inset-0 rounded-2xl lg:rounded-none overflow-hidden">
            <Image 
              src={visionData.image} 
              alt={visionData.subtitle} 
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content (Right on Desktop, Bottom on Mobile) */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center pt-0 pb-8 lg:py-10 px-6 md:px-12 lg:pl-12 lg:pr-24 xl:pl-16 xl:pr-32 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-start md:gap-8">
            
            {/* Desktop Icon */}
            <div className="hidden md:flex w-16 h-16 rounded-full bg-[#f3e8ff] items-center justify-center shrink-0 -mt-2">
              <Eye size={28} className="text-[#8b5cf6]" />
            </div>

            <div className="flex flex-col items-start">
              
              {/* Top row: Mobile Icon + Small Header */}
              <div className="flex items-center gap-4 md:mb-6 mb-4">
                {/* Mobile Icon */}
                <div className="md:hidden w-12 h-12 rounded-full bg-[#f3e8ff] flex items-center justify-center shrink-0">
                  <Eye className="text-[#8b5cf6] w-5 h-5" />
                </div>
                
                {/* Small Header */}
                <div className="flex flex-col items-center">
                  <span className="text-[#8b5cf6] font-bold tracking-widest text-[13px] md:text-[14px] uppercase mb-1">
                    {visionData.title}
                  </span>
                  <div className="flex items-center justify-center">
                    <div className="h-[2px] bg-[#8b5cf6] w-8 md:w-10 opacity-80"></div>
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#8b5cf6] mx-2 fill-current opacity-90" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <div className="h-[2px] bg-[#8b5cf6] w-8 md:w-10 opacity-80"></div>
                  </div>
                </div>
              </div>
            
            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#050b14] mb-3 leading-tight tracking-tight">
              {visionData.subtitle}
            </h2>
            <div className="w-16 md:w-20 h-[3px] bg-[#8b5cf6] mb-6"></div>
            
            {/* Paragraph */}
            <p className="text-[#4a5568] text-[13px] md:text-[14px] leading-[1.8] max-w-[480px] pr-4 md:pr-10 font-medium mb-0 lg:mb-6">
              {visionData.desc}
            </p>
            
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
