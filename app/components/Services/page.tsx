"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import data from "../../data/data.json";
import { ServiceData } from "../../types";

export default function Services() {
  const servicesData = data.categories.Event.sections.Services.variants.EventServices1;
  const services: ServiceData[] = servicesData.servicesList;

  let subtitleLine1 = '';
  let line2FirstPart = '';
  let subtitleScriptPart = '';
  let hasLineBreak = false;

  if (servicesData.subtitle.includes('\n')) {
    hasLineBreak = true;
    const parts = servicesData.subtitle.split('\n');
    subtitleLine1 = parts[0];
    
    if (parts[1].includes('*')) {
      const line2Parts = parts[1].split('*');
      line2FirstPart = line2Parts[0].trim();
      subtitleScriptPart = line2Parts[1].trim();
    } else {
      const line2Words = (parts[1] || '').split(' ');
      line2FirstPart = line2Words.slice(0, -1).join(' ');
      subtitleScriptPart = line2Words[line2Words.length - 1] || '';
    }
  } else {
    const subtitleWords = servicesData.subtitle.split(' ');
    subtitleLine1 = subtitleWords.slice(0, -1).join(' ');
    subtitleScriptPart = subtitleWords[subtitleWords.length - 1] || '';
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="pt-8 pb-10 lg:pt-10 lg:pb-12 overflow-hidden" style={{ background: '#f8f8fb' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        <motion.div 
          className="text-center mx-auto mb-4 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-1">
            <h4 className="text-[#be29ab] font-extrabold tracking-[0.25em] text-[16px] sm:text-[18px] uppercase mb-0.5">
              {servicesData.title}
            </h4>
            <div className="flex items-center gap-1 mt-0">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] inline-block rounded-full"></span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#be29ab]">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
              </svg>
            </div>
          </motion.div>
          
          <motion.h3 variants={itemVariants} className="text-[34px] sm:text-[40px] lg:text-[52px] font-extrabold text-[#0b1021] mb-3 leading-[1.05] tracking-[-0.02em] flex flex-wrap justify-center items-center gap-x-2 gap-y-0 mt-2">
            {subtitleLine1} 
            {hasLineBreak && <div className="w-full h-0"></div>}
            {line2FirstPart}
            {subtitleScriptPart && (
              <span className="relative inline-block align-bottom ml-0 sm:ml-2">
                <span className="font-dancing text-[40px] sm:text-[48px] lg:text-[68px] text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] pr-3 pb-0 leading-none font-bold">
                  {subtitleScriptPart}
                </span>
                {/* Curved underline SVG */}
                <svg className="absolute bottom-0 left-[20%] w-[60%] h-[10px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2,13 Q50,22 98,6" fill="none" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#be29ab" />
                      <stop offset="100%" stopColor="#5129ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            )}
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-[#191c49] max-w-2xl leading-relaxed text-[16px] sm:text-[17px] font-medium mx-auto mt-2 whitespace-pre-line">
            {servicesData.desc}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col group border border-gray-50">
              <div className="h-[180px] sm:h-[200px] overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0f172a] mb-2 group-hover:text-[#5129ea] transition-colors">{service.title}</h4>
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] rounded-full mb-3 sm:mb-4"></div>
                <p className="text-[#262755] text-[12px] sm:text-[13px] font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="cursor-pointer bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white pl-7 pr-3 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-4 shadow-[0_8px_25px_rgba(91,40,231,0.35)]">
            <span className="text-[15px]">{servicesData.button?.label || "Explore All Services"}</span>
            <span className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center shrink-0">
              <ArrowRight size={16} strokeWidth={2} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

