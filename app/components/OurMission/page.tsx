"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import data from "../../data/data.json";

export default function OurMission() {
  const missionData = data.categories.Event.sections.OurMission.variants.EventOurMission1;

  return (
    <section className="py-16 md:py-24 bg-[#f7f5fa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-[#d1135c] to-[#7c3aed] bg-clip-text text-transparent font-extrabold tracking-[0.2em] text-[16px] md:text-[18px] uppercase">
                {missionData.subtitle}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#d1135c] to-[#7c3aed] rounded-full"></div>
                <Sparkles size={18} className="text-[#d1135c] fill-current" />
              </div>
            </div>
            
            <h2 className="text-[32px] md:text-[56px] font-bold text-[#0f172a] leading-[1.1] mb-2">
              {missionData.titleStart} <br className="hidden md:block" />
              {missionData.titleMid}
            </h2>
            
            <div className="relative inline-block mb-5 mt-2 md:mt-0">
              <h3 className="text-[40px] md:text-[70px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff0f7b] to-[#6a11cb] leading-[0.8] pb-2 pr-6 whitespace-nowrap">
                {missionData.titleCursive}
              </h3>
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[20px] opacity-90" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M 80 18 L 195 4" stroke="url(#paint0_linear_mission)" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_mission" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff0f7b" />
                    <stop offset="1" stopColor="#6a11cb" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#ff0f7b] to-[#d1135c] mb-5 rounded-full"></div>
            
            <p className="text-[#1e3a5f] text-[18px] leading-relaxed mb-6 font-medium max-w-[540px]">
              {missionData.desc1}
            </p>
            
            <p className="text-[#1e3a5f] text-[18px] leading-relaxed max-w-[540px] font-medium">
              {missionData.desc2}
            </p>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col lg:block gap-6 lg:gap-0 mt-8 lg:mt-0 lg:relative lg:min-h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top Right Image */}
            <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[80%] aspect-[4/3] lg:aspect-auto lg:h-[55%] rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-10">
              <Image 
                src={missionData.image1} 
                alt="Event Decoration" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom Left Image */}
            <div className="relative lg:absolute lg:bottom-0 lg:left-0 w-full lg:w-[85%] aspect-[4/3] lg:aspect-auto lg:h-[55%] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
              <Image 
                src={missionData.image2} 
                alt="Event Venue" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
