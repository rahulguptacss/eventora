"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, User, Tag, Phone, Mail, Headphones, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import data from "../../data/data.json";
import { EventData } from '../../types';

export default function EventDetail({ id }: { id: string }) {
  const eventsPageData = data.categories.Event.sections.EventsPage.variants.EventsPage1;
  const events = eventsPageData.events;
  const strings = eventsPageData.detailPageStrings;
  const pageData = events.find((e: EventData) => e.id.toString() === id) || events[0];

  return (
    <section className="py-8 md:py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px]">
        
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/events" className="inline-flex items-center gap-2 text-[#c20b92] font-semibold text-[15px] hover:underline mb-8">
            <ArrowLeft size={16} />
            {strings.backToEvents}
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Category Badge & Title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-pink-100 text-[#c20b92] text-[12px] font-bold uppercase tracking-wider rounded-sm mb-6">
                {pageData.category}
              </div>

              {/* Title */}
              <h1 className="text-[32px] md:text-[42px] font-bold text-[#0a071f] leading-tight mb-10">
                {pageData.title}
              </h1>
            </motion.div>

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-12 group"
            >
              <motion.img 
                whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}
                src={pageData.image} alt={pageData.title} className="w-full h-full object-cover"
              />
            </motion.div>

            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="mb-6 flex flex-col items-start gap-2">
                <h2 className="text-[24px] font-bold text-[#0a071f]">{strings.aboutThisEvent}</h2>
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-[#c20b92]"></div>
                  <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#c20b92] mx-1"></div>
                  <div className="w-12 h-[1px] bg-[#c20b92]/30"></div>
                </div>
              </div>
              <div className="text-[#1b1c31] text-[15px] font-medium leading-[1.7] space-y-5">
                {pageData.about.map((para: string, idx: number) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* What You'll Learn Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="mb-6 flex flex-col items-start gap-2">
                <h2 className="text-[24px] font-bold text-[#0a071f]">{strings.whatYouWillLearn}</h2>
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-[#c20b92]"></div>
                  <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#c20b92] mx-1"></div>
                  <div className="w-12 h-[1px] bg-[#c20b92]/30"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                {pageData.features.map((feature: string, idx: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.01, borderColor: "#e91e6333" }}
                    key={idx} className="flex items-center gap-4 py-3.5 px-5 bg-white border border-gray-200 rounded-lg transition-colors"
                  >
                    <CheckCircle2 size={18} className="text-[#e91e63] flex-shrink-0" />
                    <span className="text-[#1b1c31] text-[15px] font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Event Schedule */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="mb-8 flex flex-col items-start gap-2">
                <h2 className="text-[24px] font-bold text-[#0a071f]">{strings.eventSchedule}</h2>
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-[#c20b92]"></div>
                  <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#c20b92] mx-1"></div>
                  <div className="w-12 h-[1px] bg-[#c20b92]/30"></div>
                </div>
              </div>
              
              <div className="relative border-l border-gray-200 ml-4 lg:ml-[220px] flex flex-col gap-3 py-1">
                {pageData.schedule.map((item: { time: string, title: string, desc: string }, idx: number) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                    key={idx} className="relative pl-8 lg:pl-10 group"
                  >
                    <div className="absolute w-[14px] h-[14px] bg-white border-[3px] border-[#e91e63] rounded-full left-[-7.5px] top-1/2 -translate-y-1/2 transition-transform group-hover:scale-125"></div>
                    <div className="lg:absolute lg:left-[-220px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[190px] lg:text-left mb-2 lg:mb-0">
                      <span className="text-[#e91e63] font-bold text-[14px] group-hover:text-[#c20b92] transition-colors">{item.time}</span>
                    </div>
                    <div className="bg-white py-3.5 px-5 rounded-lg border border-gray-200 group-hover:border-[#e91e63]/40 group-hover:shadow-md transition-all">
                      <h4 className="text-[15px] font-semibold text-[#1b1c31] mb-0.5">{item.title}</h4>
                      <p className="text-[#1b1c31]/70 font-medium text-[14px]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column - Sidebars */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 flex flex-col gap-8">
              
              {/* Event Details Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow"
              >
                <div className="mb-8 flex flex-col items-start gap-2">
                  <h3 className="text-[22px] font-bold text-[#0a071f]">{strings.eventDetails}</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-[2px] bg-[#c20b92]"></div>
                    <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#c20b92] mx-1"></div>
                    <div className="w-12 h-[1px] bg-[#c20b92]/30"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex gap-4">
                    <Calendar size={20} className="text-[#c20b92] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[15px] font-semibold text-[#0a071f] mb-1">{strings.labels.date}</h5>
                      <p className="text-[14px] text-gray-500">{pageData.details.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={20} className="text-[#c20b92] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[15px] font-semibold text-[#0a071f] mb-1">{strings.labels.time}</h5>
                      <p className="text-[14px] text-gray-500">{pageData.details.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-[#c20b92] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[15px] font-semibold text-[#0a071f] mb-1">{strings.labels.location}</h5>
                      <p className="text-[14px] text-gray-500">{pageData.details.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <User size={20} className="text-[#c20b92] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[15px] font-semibold text-[#0a071f] mb-1">{strings.labels.organizer}</h5>
                      <p className="text-[14px] text-gray-500">{pageData.details.organizer}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Tag size={20} className="text-[#c20b92] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[15px] font-semibold text-[#0a071f] mb-1">{strings.labels.eventType}</h5>
                      <p className="text-[14px] text-gray-500">{pageData.details.eventType}</p>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#c20b92] hover:bg-[#a00978] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Tag size={18} />
                  {strings.bookYourSeat}
                </motion.button>
              </motion.div>

              {/* Need Help Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow"
              >
                <div className="mb-6 flex flex-col items-start gap-2">
                  <h3 className="text-[22px] font-bold text-[#0a071f]">{strings.needHelp}</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-[2px] bg-[#c20b92]"></div>
                    <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#c20b92] mx-1"></div>
                    <div className="w-12 h-[1px] bg-[#c20b92]/30"></div>
                  </div>
                </div>

                <p className="text-gray-600 text-[14px] whitespace-pre-line mb-6">
                  {pageData.contact.text}
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#c20b92]" />
                    <span className="text-[15px] font-bold text-[#0a071f]">{pageData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#c20b92]" />
                    <span className="text-[15px] font-bold text-[#0a071f]">{pageData.contact.email}</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-white border-2 border-gray-200 hover:border-[#c20b92] text-[#0a071f] hover:text-[#c20b92] font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Headphones size={18} />
                  {strings.contactUs}
                </motion.button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
