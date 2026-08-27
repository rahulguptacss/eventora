"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import data from "../../data/data.json";
import { PolicyData } from '../../types';

export default function PolicyPageContent({ variantKey }: { variantKey?: string }) {
  if (!variantKey) return null;
  const sectionVariantKey = variantKey.replace('Page', '');
  const policyData = (data.categories.Event.sections as any).PolicyPage.variants[sectionVariantKey];

  if (!policyData) {
    return <div>Policy data not found for {variantKey}</div>;
  }

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-[#fbfbfb]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6 lg:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-2 md:gap-2.5 mb-3 md:mb-4"
          >
            <span className="text-[#9333ea] font-black tracking-[0.15em] text-[13px] md:text-[18px] lg:text-[22px] uppercase">
              {policyData.subheading}
            </span>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-[2px] md:h-[3px] w-8 md:w-14 bg-[#e32879]" />
              <Star className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-[#e32879]" fill="currentColor" />
              <div className="h-[2px] md:h-[3px] w-8 md:w-14 bg-[#e32879]" />
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[54px] lg:text-[64px] font-extrabold text-[#0a1128] font-poppins leading-[1.1] mb-3 md:mb-4 flex flex-col items-center text-center"
          >
            <span>{policyData.headingBlack}</span>
            <div className="relative inline-block mt-1 lg:mt-2">
              <span className="font-dancing text-[42px] md:text-[84px] lg:text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a7a] to-[#8b31ff] font-bold px-2 md:px-4 pb-1 md:pb-2 block leading-[1]">
                {policyData.headingPink}
              </span>
              {/* Hand-drawn gradient underline SVG */}
              <svg className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-[70%] md:w-[60%] h-[6px] md:h-[14px]" viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M5 10C100 2 200 2 295 10" stroke="url(#underlineGrad)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underlineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff2a7a" />
                    <stop offset="100%" stopColor="#8b31ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 font-medium text-[14px] md:text-[16px] lg:text-[18px] max-w-2xl mx-auto text-center px-2 md:px-0"
          >
            {policyData.description}
          </motion.p>
        </div>

        {/* Policies List */}
        <div className="space-y-6">
          {policyData.policies.map((policy: PolicyData, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-stretch">
                {/* Number Indicator & Vertical Line */}
                <div className="flex-shrink-0 flex items-start gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-[#fff0f5] flex items-center justify-center text-[#ff2a7a] font-bold text-2xl md:text-[28px] md:mt-0.5 group-hover:bg-[#ff2a7a] group-hover:text-white transition-all duration-300 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {/* Vertical Line for Desktop */}
                  <div className="hidden md:block w-[2px] h-full bg-[#ff2a7a] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="flex-1 py-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#0a1128] mb-3 md:mb-4 group-hover:text-[#ff2a7a] transition-colors duration-300">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 leading-[1.7] text-[15px] md:text-[16px] font-medium">
                    {policy.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
