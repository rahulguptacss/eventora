"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import data from "../../data/data.json";
import { FaqItem } from '../../types';

export default function FaqContent() {
  const sectionData = data.categories.Event.sections.FaqContent.variants.EventFaq1;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-[#fdfcff] relative overflow-hidden">
      {/* Decorative background elements */}
      {/* Blurry glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Dotted squares */}
      <div className="absolute top-10 left-4 md:left-12 w-24 h-24 opacity-60 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d3b9e3 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
      <div className="absolute top-10 right-4 md:right-12 w-24 h-24 opacity-60 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d3b9e3 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
      
      {/* Concentric circles bottom left */}
      <div className="absolute -bottom-[20%] -left-[15%] md:-left-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border-[1px] border-pink-200/60 bg-gradient-to-tr from-pink-50/40 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -left-[10%] md:-left-[2%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full border-[1px] border-pink-200/80 bg-gradient-to-tr from-pink-100/50 to-transparent pointer-events-none"></div>
      
      {/* Large arc on the right */}
      <div className="absolute top-[-10%] -right-[40%] md:-right-[20%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] rounded-full border-[1px] border-pink-200/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-1 md:mb-2"
          >
            <h4 className="font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#8b2bc5] to-[#f41368]">
              {sectionData.subtitle}
            </h4>
            <div className="flex items-center justify-center mt-2">
              <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
              <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#f41368] mx-2 rounded-[1px]"></div>
              <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#111827] leading-[1.1] mb-2 md:mb-4 font-poppins tracking-tight"
          >
            {sectionData.titleStart}<br />
            <div className="relative inline-block mt-[-5px] md:mt-[-15px]">
              <span className="font-dancing text-transparent bg-clip-text bg-gradient-to-r from-[#f41368] to-[#8b2bc5] font-bold text-[48px] md:text-[68px] lg:text-[76px] leading-[1.2] tracking-wide inline-block py-2 px-2 -mx-2">
                {sectionData.titleCursive}
              </span>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "85%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-0.5 md:-bottom-1 left-[10%] h-[3px] md:h-[4px] bg-gradient-to-r from-[#f41368] to-[#8b2bc5] rounded-[50%]"
                style={{ transform: "rotate(-2deg)" }}
              ></motion.div>
            </div>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#140b2e] font-medium text-[15px] md:text-[16px] lg:text-[17px] max-w-[550px] mx-auto leading-[1.6] mt-6 md:mt-8"
          >
            {sectionData.description}
          </motion.p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 max-w-7xl mx-auto">
          {sectionData.faqs.map((faq: FaqItem, index: number) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden transition-all duration-300 border ${
                  isActive 
                    ? "bg-[#fff7fa] border-pink-200" 
                    : "bg-white border-gray-100 hover:border-pink-100"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 px-6 md:px-8 text-left outline-none"
                  aria-expanded={isActive}
                >
                  <span className={`text-[18px] md:text-[20px] font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#f41368]" : "text-[#140b2e]"
                  }`}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4 transition-colors duration-300">
                    {isActive ? (
                      <Minus size={24} strokeWidth={2} className="text-[#f41368]" />
                    ) : (
                      <Plus size={24} strokeWidth={2} className="text-[#f41368]" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pl-6 md:pl-8 pr-12 md:pr-24 lg:pr-[20%] pb-6 md:pb-8 pt-0 text-[#140b2e] text-[16px] md:text-[17px] font-medium leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
