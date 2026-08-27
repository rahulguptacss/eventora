"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import data from "../../data/data.json";

export default function Awards() {
  const awardsData = data.categories.Event.sections.Awards.variants.EventAwards1;
  const cursiveWords = awardsData.titleCursive.split(' ');
  const cursiveLastWord = cursiveWords.pop() || '';
  const cursiveFirstPart = cursiveWords.join(' ');

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-24 bg-[#fdfcfd] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-2">
            <h4 className="text-purple-600 font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">
              {awardsData.subtitle}
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
              <span className="text-purple-600 text-[16px]">✦</span>
              <span className="w-12 h-[2px] bg-purple-600 rounded-full"></span>
            </div>
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-[#0b0410] leading-tight mb-0 flex flex-col md:block">
            <span>{awardsData.titleStart.split(' ')[0]}</span>
            <span className="hidden md:inline"> </span>
            <span>{awardsData.titleStart.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="mb-4 -mt-2 md:-mt-4">
            <h3 className="text-[64px] md:text-[100px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-none pb-2 px-2 flex justify-center gap-3">
              <span>{cursiveFirstPart}</span>
              <span className="relative inline-block">
                {cursiveLastWord}
                <svg className="absolute bottom-2 md:bottom-4 left-0 w-full h-[8px] md:h-[12px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10 Q 100 2 196 10" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ec4899" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h3>
          </div>
          <p className="text-[#191c49] font-medium text-[17px] max-w-[650px] mx-auto leading-relaxed">
            {awardsData.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {awardsData.awardsList.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[24px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-[#fdf2f8]"
            >
              <div className="relative w-full h-[240px] mb-4 flex items-center justify-center">
                {/* Background Circle */}
                <div className="absolute w-[180px] h-[180px] md:w-[200px] md:h-[200px] bg-[#fcf0f7] rounded-full z-0"></div>

                {/* Sparkles around the circle */}
                <svg className="absolute top-10 left-8 w-4 h-4 text-pink-400 z-0 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
                <svg className="absolute bottom-16 left-4 w-3 h-3 text-pink-400 z-0 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
                <svg className="absolute top-16 right-6 w-3 h-3 text-pink-400 z-0 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
                <svg className="absolute bottom-24 right-10 w-2 h-2 text-pink-400 z-0 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>

                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500 z-10"
                />
              </div>

              <h4 className="text-[19px] font-bold text-[#11133c] mb-4 leading-snug">
                {award.title}
              </h4>

              <div className="flex items-center justify-center w-full max-w-[140px] gap-2 mb-5 mx-auto">
                <span className="flex-grow h-[2px] bg-gradient-to-r from-transparent to-[#f1247d]"></span>
                <span className="text-[#f1247d] text-[14px]">✦</span>
                <span className="flex-grow h-[2px] bg-gradient-to-l from-transparent to-[#f1247d]"></span>
              </div>

              <p className="text-[#51586a] text-[15px] md:text-[16px] leading-relaxed mb-8 flex-grow font-medium">
                {award.desc}
              </p>

              <div className={`text-[26px] font-bold tracking-wide ${index % 2 === 0 ? "text-[#f1247d]" : "text-[#a830d8]"}`}>
                {award.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
