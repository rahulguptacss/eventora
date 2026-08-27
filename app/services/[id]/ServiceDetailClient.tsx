"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Diamond, CalendarCheck, Flower, HeartHandshake, User, Mail, Phone, Calendar, ChevronDown, ArrowRight, Briefcase, Users, Cake, Plane, Music, Building, Presentation, Pencil } from "lucide-react";
import data from "../../data/data.json";
import { ServiceData } from '../../types';

export default function ServiceDetail({ id }: { id: string }) {

  const eventServices1 = data.categories.Event.sections.Services.variants.EventServices1;
  const services = eventServices1.servicesList;
  const formStrings = eventServices1.enquiryForm;
  const detailData = services.find((s: ServiceData) => s.id.toString() === id) || services[0];

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "diamond": return <Diamond size={28} className="text-[#c20b92]" strokeWidth={2} />;
      case "calendar": return <CalendarCheck size={28} className="text-[#c20b92]" strokeWidth={2} />;
      case "flower": return <Flower size={28} className="text-[#c20b92]" strokeWidth={2} />;
      case "heart": return <HeartHandshake size={28} className="text-[#c20b92]" strokeWidth={2} />;
      default: return <Diamond size={28} className="text-[#c20b92]" strokeWidth={2} />;
    }
  };

  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Main Content */}
          <div className="w-full lg:w-[65%]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Subtitle */}
              <div className="mb-4">
                <h4 className="text-[#c20b92] font-extrabold font-sans tracking-[0.15em] text-[13px] md:text-[14px] uppercase mb-2">
                  {detailData.subtitle}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                  </svg>
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[38px] md:text-[42px] lg:text-[48px] font-black text-[#0a071f] leading-[1.2] mb-6 tracking-tight">
                {detailData.title}
              </h2>
              
              <p className="text-[#262755] text-[16px] md:text-[18px] leading-[1.8] mb-10">
                {detailData.shortDesc}
              </p>

              {/* Featured Image */}
              <div className="rounded-[24px] overflow-hidden mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <img 
                  src={detailData.featuredImage} 
                  alt={detailData.title} 
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>

              {/* Overview Subtitle */}
              <div className="mb-4 mt-12">
                <h4 className="text-[#c20b92] font-extrabold font-sans tracking-[0.15em] text-[13px] md:text-[14px] uppercase mb-2">
                  {detailData.overviewSubtitle}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                  </svg>
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                </div>
              </div>

              {/* Overview Title */}
              <h3 className="text-[32px] md:text-[36px] font-black text-[#0a071f] leading-[1.3] mb-6 tracking-tight">
                {detailData.overviewTitle}
              </h3>

              {/* Overview Desc */}
              <div className="text-[#262755] text-[15px] md:text-[16px] leading-[1.8] space-y-5 mb-12">
                {detailData.overviewDesc.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {detailData.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-[60px] h-[60px] rounded-full bg-[#fdf2f8] flex items-center justify-center shrink-0">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <div className="flex-1 mt-1">
                      <h4 className="text-[#0a071f] font-bold text-[17px] mb-1.5">{feature.title}</h4>
                      <p className="text-[#4b4e73] text-[15px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[35%]">
            <div className="sticky top-28 space-y-10">
              
              {/* Services List Box */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] p-8 shadow-[0_4px_25px_rgb(0,0,0,0.03)] border border-gray-100"
              >
                {/* Sidebar Subtitle */}
                <div className="mb-6">
                  <h4 className="text-[#0a071f] font-extrabold font-sans tracking-[0.05em] text-[15px] uppercase mb-2">
                    {detailData.sidebar.servicesTitle}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#c20b92]"></span>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                    </svg>
                    <span className="w-8 h-[1px] bg-[#c20b92]"></span>
                  </div>
                </div>

                <ul className="flex flex-col">
                  {detailData.sidebar.servicesList.map((srv, idx) => {
                    const isActive = srv.label === detailData.title;
                    const isLast = idx === detailData.sidebar.servicesList.length - 1;
                    
                    const getSidebarIcon = (label: string, active: boolean) => {
                      const color = active ? "text-[#c20b92]" : "text-[#4b4e73]";
                      switch (label) {
                        case "Wedding Planning": return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={color} xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="8" r="4.5" />
                            <circle cx="7.5" cy="14.5" r="4.5" />
                            <circle cx="16.5" cy="14.5" r="4.5" />
                          </svg>
                        );
                        case "Corporate Events": return <Briefcase size={20} className={color} strokeWidth={1.5} />;
                        case "Social Events": return <Users size={20} className={color} strokeWidth={1.5} />;
                        case "Birthday Parties": return <Cake size={20} className={color} strokeWidth={1.5} />;
                        case "Destination Weddings": return <Plane size={20} className={color} strokeWidth={1.5} />;
                        case "Event Entertainment": return <Music size={20} className={color} strokeWidth={1.5} />;
                        case "Venue Booking": return <Building size={20} className={color} strokeWidth={1.5} />;
                        case "Exhibition & Trade Shows": return <Presentation size={20} className={color} strokeWidth={1.5} />;
                        default: return <Flower size={20} className={color} strokeWidth={1.5} />;
                      }
                    };

                    return (
                      <li key={idx}>
                        <Link 
                          href={srv.href}
                          className={`flex items-center justify-between px-6 py-4 transition-all duration-300 relative ${
                            isActive 
                              ? "bg-[#fbf0f7] text-[#c20b92] rounded-[10px] mb-2 font-bold" 
                              : `bg-transparent text-[#262755] hover:text-[#c20b92] font-semibold ${!isLast ? 'border-b border-gray-100' : ''}`
                          }`}
                        >
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[#c20b92] rounded-r-md"></div>
                          )}
                          <div className="flex items-center gap-4">
                            {getSidebarIcon(srv.label, isActive)}
                            <span className="text-[15px]">{srv.label}</span>
                          </div>
                          <ArrowRight size={18} className={isActive ? "text-[#c20b92]" : "text-[#4b4e73]"} strokeWidth={1.5} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Service Enquiry Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] p-8 shadow-[0_4px_25px_rgb(0,0,0,0.03)] border border-gray-100"
              >
                <div className="mb-6">
                  <h4 className="text-[#0a071f] font-extrabold font-sans tracking-[0.05em] text-[15px] uppercase mb-2">
                    {detailData.sidebar.enquiryTitle}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#c20b92]"></span>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                    </svg>
                    <span className="w-8 h-[1px] bg-[#c20b92]"></span>
                  </div>
                </div>
                
                <p className="text-[#4b4e73] text-[14px] leading-relaxed mb-6">
                  {detailData.sidebar.enquiryDesc}
                </p>

                <form className="space-y-4">
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={formStrings.namePlaceholder} className="w-full bg-white border border-gray-100 rounded-[8px] pl-12 pr-4 py-3.5 text-[14px] focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors" />
                  </div>
                  
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" placeholder={formStrings.emailPlaceholder} className="w-full bg-white border border-gray-100 rounded-[8px] pl-12 pr-4 py-3.5 text-[14px] focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors" />
                  </div>
                  
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" placeholder={formStrings.phonePlaceholder} className="w-full bg-white border border-gray-100 rounded-[8px] pl-12 pr-4 py-3.5 text-[14px] focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors" />
                  </div>
                  
                  <div className="relative">
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select defaultValue="" className="w-full bg-white border border-gray-100 rounded-[8px] px-4 py-3.5 text-[14px] text-gray-500 appearance-none focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors">
                      <option value="" disabled>{formStrings.eventTypePlaceholder}</option>
                      {formStrings.eventTypes.map((type: { value: string, label: string }, idx: number) => (
                        <option key={idx} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={formStrings.eventDatePlaceholder} className="w-full bg-white border border-gray-100 rounded-[8px] pl-12 pr-4 py-3.5 text-[14px] focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors" />
                  </div>

                  <div className="relative">
                    <Pencil size={18} className="absolute left-4 top-4 text-gray-400" />
                    <textarea placeholder={formStrings.messagePlaceholder} rows={4} className="w-full bg-white border border-gray-100 rounded-[8px] pl-12 pr-4 py-4 text-[14px] focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-colors resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full cursor-pointer bg-gradient-to-r from-[#c20b92] to-[#7e22ce] text-white py-3.5 rounded-[8px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(194,11,146,0.3)] mt-2">
                    <span className="text-[15px]">{formStrings.submitButton}</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
