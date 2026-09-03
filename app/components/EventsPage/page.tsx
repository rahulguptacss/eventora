"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../data/data.json";
import { EventData } from '../../types';

export default function EventsPage() {
  const pageData = data.categories.Event.sections.EventsPage.variants.EventsPage1;
  const [activeCategory, setActiveCategory] = useState(pageData.categories[0]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter events based on active category
  const filteredEvents = activeCategory === pageData.categories[0] 
    ? pageData.events 
    : pageData.events.filter((event: EventData) => event.category === activeCategory);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="pt-10 md:pt-16 pb-16 md:pb-24 bg-white font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 lg:gap-16">
          <div className="md:w-[55%] lg:w-[60%]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#0a071f] text-[42px] md:text-[56px] font-black leading-tight tracking-tight"
            >
              {pageData.titleLine1}
              <br />
              <span className="relative inline-block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] via-[#c20b92] to-[#6b21a8]" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3em", fontWeight: "700", lineHeight: 1, paddingRight: "10px" }}>
                  {pageData.titleLine2}
                </span>
                <svg className="absolute w-[100%] h-[12px] md:h-[16px] -bottom-1 md:-bottom-2 left-0" preserveAspectRatio="none" viewBox="0 0 354 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.14995 14.8876C112.56 -3.5188 238.291 -2.92383 350.59 12.1956C352.793 12.4925 352.127 16.0374 349.866 15.8679C240.231 7.64018 116.31 8.84755 4.88734 17.5815C2.60256 17.7607 1.05045 15.2415 3.14995 14.8876Z" fill="url(#paint_brush)"/>
                  <defs>
                    <linearGradient id="paint_brush" x1="0" y1="9" x2="354" y2="9" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff6b6b"/>
                      <stop offset="0.5" stopColor="#c20b92"/>
                      <stop offset="1" stopColor="#6b21a8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#4b4e73] text-[15px] leading-[1.8] mt-6 max-w-lg"
            >
              {pageData.description}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-[45%] lg:w-[40%] flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[420px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img src={pageData.image} alt="Events Illustration" className="w-full h-auto object-cover" />
              {/* Optional overlay to mimic illustration color if needed */}
              <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {pageData.categories.map((cat: string, idx: number) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={`cursor-pointer px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                  isActive 
                    ? "bg-[#c20b92] text-white shadow-[0_4px_15px_rgba(194,11,146,0.3)]" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#c20b92] hover:text-[#c20b92]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentEvents.map((evt: EventData, idx: number) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[16px] overflow-hidden border border-gray-100 hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <Link href={`/events/${evt.id}`} className="block relative h-[240px] overflow-hidden group-hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={evt.image} 
                  alt={evt.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-[#c20b92] text-white px-3 py-1.5 rounded-md text-[13px] font-bold flex items-center gap-2 shadow-sm">
                  <User size={14} strokeWidth={2.5} />
                  {evt.seats}
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-5 text-[13px] text-gray-500 font-semibold mb-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#c20b92]" />
                    {evt.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#c20b92]" />
                    {evt.location}
                  </div>
                </div>
                
                <Link href={`/events/${evt.id}`}>
                  <h3 className="text-[17px] font-bold text-[#0a071f] leading-snug mb-4 hover:text-[#c20b92] transition-colors cursor-pointer">
                    {evt.title}
                  </h3>
                </Link>
                
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link href={`/events/${evt.id}`} className="text-[#c20b92] text-[14px] font-bold hover:underline">
                    {pageData.bookNowText}
                  </Link>
                  <button className="text-[#c20b92] hover:bg-pink-50 p-2 rounded-full transition-colors">
                    <Share2 size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-bold transition-all ${
                  currentPage === page 
                    ? "bg-[#5129ea] text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
